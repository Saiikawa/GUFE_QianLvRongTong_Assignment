import { t as getApplicationsCollection } from "../../../../chunks/mongodb.js";
//#region src/routes/api/apply/+server.js
/** @type {import('./$types').RequestHandler} */
async function POST({ request }) {
	try {
		const data = await request.json();
		for (const field of [
			"companyName",
			"creditCode",
			"legalPerson",
			"legalPhone",
			"city",
			"loanAmount",
			"loanPurpose",
			"loanTerm"
		]) if (!data[field]) return new Response(JSON.stringify({
			success: false,
			message: `缺少必填字段: ${field}`
		}), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const applicationId = `QLR${Date.now()}${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
		const applicationData = {
			申请编号: applicationId,
			企业名称: data.companyName,
			统一社会信用代码: data.creditCode,
			法人代表: data.legalPerson,
			法人电话: data.legalPhone,
			联系人: data.contactPerson || "",
			联系电话: data.contactPhone,
			所在城市: data.city,
			贷款金额_万元: Number(data.loanAmount),
			贷款用途: data.loanPurpose,
			贷款期限_月: data.loanTerm,
			担保方式: data.guaranteeType || "",
			绿色项目类型: data.greenProject || "",
			备注: data.remark || "",
			测评_企业类型: data.quizAnswers?.enterpriseType || "",
			测评_贷款金额等级: data.quizAnswers?.loanAmountLevel || "",
			测评_贷款期限等级: data.quizAnswers?.loanTermLevel || "",
			测评_担保方式: data.quizAnswers?.guarantee || "",
			测评_城市等级: data.quizAnswers?.cityLevel || "",
			测评_项目类型: data.quizAnswers?.projectType || "",
			测评总分: data.totalScore || 0,
			推荐等级: data.recommendationLevel || "",
			匹配产品: data.matchedProducts ? data.matchedProducts.join("、") : "",
			状态: "待审核",
			初审状态: "待审核",
			材料审核状态: "待审核",
			终审状态: "待审核",
			提交时间: /* @__PURE__ */ new Date(),
			更新时间: /* @__PURE__ */ new Date()
		};
		const result = await (await getApplicationsCollection()).insertOne(applicationData);
		console.log("Application saved:", result.insertedId, "ApplicationId:", applicationId);
		return new Response(JSON.stringify({
			success: true,
			message: "申请提交成功",
			data: {
				applicationId,
				status: "pending",
				estimatedReviewTime: "1-3个工作日",
				nextSteps: [
					"平台将在1-3个工作日内审核您的申请",
					"审核通过后，专业顾问将与您联系",
					"如有疑问可拨打服务热线：400-888-8888"
				]
			}
		}), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (error) {
		console.error("Application submission error:", error);
		let message = "服务器错误，请稍后重试";
		if (error.name === "MongoServerError") if (error.code === 11e3) message = "该申请已存在，请勿重复提交";
		else message = "数据库错误，请稍后重试";
		else if (error.message?.includes("MONGODB_URI")) message = "服务配置错误，请联系管理员";
		else if (error.name === "MongoNetworkError" || error.name === "MongoTimeoutError") message = "数据库连接超时，请稍后重试";
		return new Response(JSON.stringify({
			success: false,
			message
		}), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
}
/** @type {import('./$types').RequestHandler} */
async function GET({ url }) {
	try {
		const applicationId = url.searchParams.get("applicationId");
		if (!applicationId) return new Response(JSON.stringify({
			success: false,
			message: "请提供申请编号"
		}), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const application = await (await getApplicationsCollection()).findOne({ "申请编号": applicationId });
		if (!application) return new Response(JSON.stringify({
			success: false,
			message: "未找到该申请"
		}), {
			status: 404,
			headers: { "Content-Type": "application/json" }
		});
		return new Response(JSON.stringify({
			success: true,
			data: application
		}), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (error) {
		console.error("Query error:", error);
		return new Response(JSON.stringify({
			success: false,
			message: "服务器错误"
		}), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
}
//#endregion
export { GET, POST };
