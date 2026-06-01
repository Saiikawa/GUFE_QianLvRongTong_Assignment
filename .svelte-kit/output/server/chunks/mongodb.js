import { MongoClient } from "mongodb";
/** @type {import('$env/static/private').MONGODB_URI} */
var MONGODB_URI = "mongodb://Saiikawa:3101041224llC@ac-0uom5hr-shard-00-00.7asuwwi.mongodb.net:27017,ac-0uom5hr-shard-00-01.7asuwwi.mongodb.net:27017,ac-0uom5hr-shard-00-02.7asuwwi.mongodb.net:27017/?ssl=true&authSource=admin";
//#endregion
//#region src/lib/server/mongodb.js
var DB_NAME = "qianlvtong";
var cachedClient = null;
var cachedDb = null;
var connectionPromise = null;
/**
* 获取 MongoDB 客户端（防并发重入）
*/
async function getMongoClient() {
	if (cachedClient) return cachedClient;
	if (connectionPromise) return connectionPromise;
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
	for (let i = 0; i <= maxRetries; i++) try {
		const client = new MongoClient(MONGODB_URI, {
			maxPoolSize: 3,
			minPoolSize: 0,
			serverSelectionTimeoutMS: 8e3,
			connectTimeoutMS: 8e3,
			socketTimeoutMS: 3e4,
			maxIdleTimeMS: 3e4,
			directConnection: "mongodb://Saiikawa:3101041224llC@ac-0uom5hr-shard-00-00.7asuwwi.mongodb.net:27017,ac-0uom5hr-shard-00-01.7asuwwi.mongodb.net:27017,ac-0uom5hr-shard-00-02.7asuwwi.mongodb.net:27017/?ssl=true&authSource=admin".includes("mongodb://") && !"mongodb://Saiikawa:3101041224llC@ac-0uom5hr-shard-00-00.7asuwwi.mongodb.net:27017,ac-0uom5hr-shard-00-01.7asuwwi.mongodb.net:27017,ac-0uom5hr-shard-00-02.7asuwwi.mongodb.net:27017/?ssl=true&authSource=admin".includes(",")
		});
		await client.connect();
		console.log("MongoDB connected (attempt", i + 1, ")");
		return client;
	} catch (error) {
		lastError = error;
		cachedClient = null;
		cachedDb = null;
		console.error(`MongoDB connection error (attempt ${i + 1}):`, error.message);
		if (i < maxRetries) await new Promise((r) => setTimeout(r, 1e3 * (i + 1)));
	}
	throw lastError;
}
/**
* 获取数据库实例
*/
async function getDb() {
	if (cachedDb) return cachedDb;
	cachedDb = (await getMongoClient()).db(DB_NAME);
	return cachedDb;
}
/**
* 申请集合
*/
async function getApplicationsCollection() {
	return (await getDb()).collection("loan_applications");
}
//#endregion
export { getApplicationsCollection as t };
