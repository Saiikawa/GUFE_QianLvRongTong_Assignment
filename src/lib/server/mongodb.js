import { MongoClient } from 'mongodb';
import { MONGODB_URI, MONGODB_DB_NAME } from '$env/static/private';

const DB_NAME = MONGODB_DB_NAME || 'qianlvtong';

// Cloudflare Workers 是无状态的，全局变量在同一实例内可复用
let cachedClient = null;
let cachedDb = null;
let connectionPromise = null;

/**
 * 获取 MongoDB 客户端（防并发重入）
 */
export async function getMongoClient() {
  if (cachedClient) {
    return cachedClient;
  }

  // 防止并发请求同时创建多个连接
  if (connectionPromise) {
    return connectionPromise;
  }

  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI 环境变量未设置');
  }

  connectionPromise = connectWithRetry();

  try {
    cachedClient = await connectionPromise;
    return cachedClient;
  } catch (error) {
    connectionPromise = null;
    throw error;
  }
}

/**
 * 带重试的连接
 */
async function connectWithRetry(maxRetries = 2) {
  let lastError;

  for (let i = 0; i <= maxRetries; i++) {
    try {
      const client = new MongoClient(MONGODB_URI, {
        // 优化 Cloudflare Workers 环境的连接参数
        maxPoolSize: 3,
        minPoolSize: 0,
        serverSelectionTimeoutMS: 8000,
        connectTimeoutMS: 8000,
        socketTimeoutMS: 30000,
        maxIdleTimeMS: 30000,
        // 直接连接描述符，减少 SRV 解析开销
        directConnection: MONGODB_URI.includes('mongodb://') && !MONGODB_URI.includes(','),
      });

      await client.connect();
      console.log('MongoDB connected (attempt', i + 1, ')');
      return client;
    } catch (error) {
      lastError = error;
      cachedClient = null;
      cachedDb = null;
      console.error(`MongoDB connection error (attempt ${i + 1}):`, error.message);
      if (i < maxRetries) {
        await new Promise(r => setTimeout(r, 1000 * (i + 1)));
      }
    }
  }

  throw lastError;
}

/**
 * 获取数据库实例
 */
export async function getDb() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await getMongoClient();
  cachedDb = client.db(DB_NAME);
  return cachedDb;
}

/**
 * 关闭 MongoDB 连接
 */
export async function closeMongoConnection() {
  if (cachedClient) {
    await cachedClient.close();
    cachedClient = null;
    cachedDb = null;
    connectionPromise = null;
  }
}

/**
 * 申请集合
 */
export async function getApplicationsCollection() {
  const db = await getDb();
  return db.collection('loan_applications');
}
