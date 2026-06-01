import { getApplicationsCollection } from '$lib/server/mongodb.js';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  try {
    const collection = await getApplicationsCollection();
    
    // 查询条件
    const query = {};
    const status = url.searchParams.get('status');
    if (status) {
      query['状态'] = status;
    }
    
    // 获取所有申请数据
    const applications = await collection.find(query).sort({ '提交时间': -1 }).toArray();
    
    if (applications.length === 0) {
      return new Response('暂无数据', {
        status: 200,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }
    
    // CSV 列定义（中文字段名）
    const columns = [
      '申请编号', '企业名称', '统一社会信用代码', '法人代表', '法人电话',
      '联系人', '联系电话', '所在城市',
      '贷款金额_万元', '贷款用途', '贷款期限_月', '担保方式', '绿色项目类型',
      '备注',
      '测评_企业类型', '测评_贷款金额等级', '测评_贷款期限等级',
      '测评_担保方式', '测评_城市等级', '测评_项目类型',
      '测评总分', '推荐等级', '匹配产品',
      '状态', '初审状态', '材料审核状态', '终审状态',
      '提交时间', '更新时间'
    ];
    
    // 生成 CSV 内容
    const escapeCsv = (val) => {
      if (val === null || val === undefined) return '';
      const str = String(val);
      if (str.includes(',') || str.includes('"') || str.includes('\n')) {
        return `"${str.replace(/"/g, '""')}"`;
      }
      return str;
    };
    
    const formatDate = (val) => {
      if (!val) return '';
      const d = new Date(val);
      if (isNaN(d.getTime())) return String(val);
      return d.toLocaleString('zh-CN', { hour12: false });
    };
    
    const header = columns.join(',');
    const rows = applications.map(app => {
      return columns.map(col => {
        let val = app[col];
        if (col === '提交时间' || col === '更新时间') {
          val = formatDate(val);
        }
        return escapeCsv(val);
      }).join(',');
    });
    
    const csvContent = '\uFEFF' + header + '\n' + rows.join('\n');
    
    const filename = `绿色贷款申请_${new Date().toISOString().slice(0, 10)}.csv`;
    
    return new Response(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(filename)}`
      }
    });
    
  } catch (error) {
    console.error('Export error:', error);
    
    return new Response(JSON.stringify({
      success: false,
      message: '导出失败: ' + error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
