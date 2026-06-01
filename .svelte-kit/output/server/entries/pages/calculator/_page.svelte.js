import { U as escape_html, V as attr, a as ensure_array_like, c as store_get, i as derived, l as stringify, n as attr_class, o as head, r as attr_style, u as unsubscribe_stores } from "../../../chunks/dev.js";
import { n as t } from "../../../chunks/i18n.js";
//#region src/routes/calculator/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let currentStep = 1;
		let answers = {
			greenDirectoryType: "",
			greenBenefitQuantifiable: "",
			energyData: "",
			carbonCalcData: "",
			envMonitorData: "",
			revenueStability: "",
			financialReports: "",
			repaymentSource: "",
			envViolation: "",
			creditStatus: "",
			businessLicense: "",
			guizhouIndustry: "",
			specializedEnterprise: "",
			basicMaterials: "",
			projectCompliance: "",
			greenProof: "",
			loanApplication: ""
		};
		const dimensions = [
			{
				name: "绿色属性",
				weight: "25%",
				questions: [{
					id: "greenDirectoryType",
					title: "您的项目属于以下哪个类别？",
					subtitle: "请根据《绿色金融支持项目目录（2025年版）》选择",
					options: [
						{
							value: "energy",
							label: "节能降碳产业"
						},
						{
							value: "environment",
							label: "环境保护产业"
						},
						{
							value: "resource",
							label: "资源循环利用产业"
						},
						{
							value: "cleanEnergy",
							label: "清洁能源产业"
						},
						{
							value: "otherGreen",
							label: "其他绿色项目"
						},
						{
							value: "notInList",
							label: "不属于目录范围"
						}
					]
				}, {
					id: "greenBenefitQuantifiable",
					title: "您的项目能提供哪些绿色效益测算数据？",
					subtitle: "包括节能率、碳减排率等可量化数据",
					options: [
						{
							value: "complete",
							label: "能提供完整的节能率/减排率测算数据，且数据合理"
						},
						{
							value: "partial",
							label: "有测算但数据不完整"
						},
						{
							value: "none",
							label: "无法提供绿色效益测算"
						}
					]
				}]
			},
			{
				name: "数据完整度",
				weight: "20%",
				questions: [
					{
						id: "energyData",
						title: "您的企业能提供近12个月的能耗数据吗？",
						subtitle: "包括用电量、用水量、用气量等",
						options: [
							{
								value: "complete",
								label: "能提供完整的近12个月能耗数据"
							},
							{
								value: "partial",
								label: "仅能提供部分能耗数据"
							},
							{
								value: "none",
								label: "无法提供能耗数据"
							}
						]
					},
					{
						id: "carbonCalcData",
						title: "您的项目能提供碳减排效果测算数据吗？",
						subtitle: "包括项目实施前后的碳排放对比",
						options: [
							{
								value: "complete",
								label: "能提供完整的碳减排对比测算"
							},
							{
								value: "simple",
								label: "仅能提供简单估算"
							},
							{
								value: "none",
								label: "无法提供碳减排测算"
							}
						]
					},
					{
						id: "envMonitorData",
						title: "您的企业能提供环保监测数据吗？",
						subtitle: "包括排污许可证、环保设施运行记录等",
						options: [
							{
								value: "complete",
								label: "能提供完整的环保监测数据（排污许可证、运行记录、监测报告）"
							},
							{
								value: "partial",
								label: "仅能提供部分数据"
							},
							{
								value: "none",
								label: "无法提供环保监测数据"
							}
						]
					}
				]
			},
			{
				name: "财务可行性",
				weight: "20%",
				questions: [
					{
						id: "revenueStability",
						title: "您的上年度营业收入与融资金额的比例是？",
						subtitle: "融资金额不超过营收的2倍更有利于获批",
						options: [
							{
								value: "above2",
								label: "营收 ≥ 融资金额 × 2"
							},
							{
								value: "1to2",
								label: "营收为融资金额的 1-2 倍"
							},
							{
								value: "below1",
								label: "营收 < 融资金额"
							}
						]
					},
					{
						id: "financialReports",
						title: "您的企业能提供近2年的财务报表吗？",
						subtitle: "包括资产负债表和利润表",
						options: [
							{
								value: "complete",
								label: "能提供2023-2024年完整财务报表，且数据勾稽一致"
							},
							{
								value: "partial",
								label: "仅能提供1年财务报表"
							},
							{
								value: "none",
								label: "无法提供财务报表"
							}
						]
					},
					{
						id: "repaymentSource",
						title: "您的还款来源规划是？",
						options: [
							{
								value: "clear",
								label: "还款来源为经营收入，有具体的还款计划"
							},
							{
								value: "vague",
								label: "还款来源明确，但还款计划不具体"
							},
							{
								value: "unclear",
								label: "还款来源不明确"
							}
						]
					}
				]
			},
			{
				name: "信用风险",
				weight: "15%",
				questions: [
					{
						id: "envViolation",
						title: "您的企业近3年是否有环保行政处罚记录？",
						options: [
							{
								value: "none",
								label: "近3年无环保行政处罚记录"
							},
							{
								value: "rectified",
								label: "有记录但已完成整改"
							},
							{
								value: "unrectified",
								label: "有未整改的处罚"
							}
						]
					},
					{
						id: "creditStatus",
						title: "您的企业征信状况是？",
						options: [
							{
								value: "good",
								label: "企业征信良好，无逾期、无失信记录"
							},
							{
								value: "minor",
								label: "有轻微逾期但已结清"
							},
							{
								value: "bad",
								label: "有当前逾期或失信记录"
							}
						]
					},
					{
						id: "businessLicense",
						title: "您的企业经营资质状况是？",
						subtitle: "包括营业执照、相关许可证等",
						options: [
							{
								value: "valid",
								label: "证照齐全且在有效期内"
							},
							{
								value: "expiring",
								label: "证照齐全但即将到期"
							},
							{
								value: "missing",
								label: "证照缺失或不完整"
							}
						]
					}
				]
			},
			{
				name: "政策匹配度",
				weight: "10%",
				questions: [{
					id: "guizhouIndustry",
					title: "您的企业所属行业属于贵州省重点支持产业吗？",
					subtitle: "贵州省重点支持十大工业产业、特色轻工等",
					options: [
						{
							value: "priority",
							label: "属于贵州省十大工业产业、特色轻工、民族民间工艺品等"
						},
						{
							value: "general",
							label: "属于一般制造业"
						},
						{
							value: "other",
							label: "其他行业"
						}
					]
				}, {
					id: "specializedEnterprise",
					title: "您的企业是否获得\"专精特新\"或\"绿色工厂\"认定？",
					options: [
						{
							value: "certified",
							label: "已获得\"专精特新\"或\"绿色工厂\"认定"
						},
						{
							value: "applying",
							label: "已申报，认定在审"
						},
						{
							value: "none",
							label: "未获得相关认定"
						}
					]
				}]
			},
			{
				name: "材料完整度",
				weight: "10%",
				questions: [
					{
						id: "basicMaterials",
						title: "您能提供以下哪些基础资质材料？",
						subtitle: "营业执照、法人身份证、银行流水、征信报告",
						options: [
							{
								value: "complete",
								label: "四类材料齐全"
							},
							{
								value: "partial",
								label: "缺1项材料"
							},
							{
								value: "missing",
								label: "缺2项及以上材料"
							}
						]
					},
					{
						id: "projectCompliance",
						title: "您能提供以下哪些项目合规材料？",
						subtitle: "立项/备案文件、可研报告、环保批复",
						options: [
							{
								value: "complete",
								label: "三类材料齐全"
							},
							{
								value: "partial",
								label: "缺1项材料"
							},
							{
								value: "missing",
								label: "缺2项及以上材料"
							}
						]
					},
					{
						id: "greenProof",
						title: "您能提供绿色属性证明材料吗？",
						subtitle: "包括节能降耗测算报告、能耗监测数据、绿色认证等",
						options: [
							{
								value: "complete",
								label: "能提供完整的绿色属性证明材料"
							},
							{
								value: "partial",
								label: "仅能提供部分材料"
							},
							{
								value: "none",
								label: "无法提供绿色属性证明"
							}
						]
					},
					{
						id: "loanApplication",
						title: "您能提供以下贷款申请材料吗？",
						subtitle: "包括贷款申请书、资金使用计划、还款计划",
						options: [{
							value: "complete",
							label: "三类材料齐全"
						}, {
							value: "partial",
							label: "缺1项材料"
						}]
					}
				]
			}
		];
		const totalQuestions = dimensions.reduce((sum, dim) => sum + dim.questions.length, 0);
		const optionScores = {
			greenDirectoryType: {
				energy: 15,
				environment: 12,
				resource: 12,
				cleanEnergy: 10,
				otherGreen: 5,
				notInList: 0
			},
			greenBenefitQuantifiable: {
				complete: 10,
				partial: 5,
				none: 0
			},
			energyData: {
				complete: 8,
				partial: 4,
				none: 0
			},
			carbonCalcData: {
				complete: 7,
				simple: 3,
				none: 0
			},
			envMonitorData: {
				complete: 5,
				partial: 2,
				none: 0
			},
			revenueStability: {
				above2: 8,
				"1to2": 4,
				below1: 0
			},
			financialReports: {
				complete: 6,
				partial: 3,
				none: 0
			},
			repaymentSource: {
				clear: 6,
				vague: 3,
				unclear: 0
			},
			envViolation: {
				none: 8,
				rectified: 3,
				unrectified: 0
			},
			creditStatus: {
				good: 4,
				minor: 2,
				bad: 0
			},
			businessLicense: {
				valid: 3,
				expiring: 1,
				missing: 0
			},
			guizhouIndustry: {
				priority: 5,
				general: 2,
				other: 0
			},
			specializedEnterprise: {
				certified: 5,
				applying: 2,
				none: 0
			},
			basicMaterials: {
				complete: 3,
				partial: 1,
				missing: 0
			},
			projectCompliance: {
				complete: 3,
				partial: 1,
				missing: 0
			},
			greenProof: {
				complete: 2,
				partial: 1,
				none: 0
			},
			loanApplication: {
				complete: 2,
				partial: 0
			}
		};
		function calculateScore() {
			let score = 0;
			const dimensionScores = {};
			dimensions.forEach((dim) => {
				let dimScore = 0;
				dim.questions.forEach((q) => {
					const selectedValue = answers[q.id];
					if (selectedValue && optionScores[q.id] && optionScores[q.id][selectedValue] !== void 0) dimScore += optionScores[q.id][selectedValue];
				});
				dimensionScores[dim.name] = dimScore;
				score += dimScore;
			});
			return {
				total: score,
				dimensions: dimensionScores
			};
		}
		function getResult(result, answers) {
			const { total, dimensions: dimScores } = result;
			let level, levelName, description, actions, recommendations;
			if (total >= 85) {
				level = "A";
				levelName = "A级（高度适配）";
				description = "项目绿色属性强，材料完整，财务可行，信用良好";
				actions = [
					"优先推荐国有大行绿色信贷产品",
					"可争取纯信用贷款",
					"建议尽快提交申请，抢占额度"
				];
				recommendations = answers.greenDirectoryType === "energy" || answers.greenDirectoryType === "environment" || answers.greenDirectoryType === "resource" ? [{
					bank: "工商银行贵州省分行",
					product: "\"绿色制造贷\"",
					maxAmount: "最高3000万",
					rate: "年化3.45%-4.35%",
					features: "审批快、可信用可抵押"
				}, {
					bank: "农业银行贵州省分行",
					product: "\"绿色节能贷\"",
					maxAmount: "最高2000万",
					rate: "年化3.5%-4.3%",
					features: "期限最长5年"
				}] : [{
					bank: "建设银行贵州省分行",
					product: "\"绿色贷款通\"",
					maxAmount: "最高2000万",
					rate: "年化3.6%-4.5%",
					features: "纯信用/抵押均可"
				}, {
					bank: "贵阳银行",
					product: "\"绿易贷\"",
					maxAmount: "最高1000万",
					rate: "年化4%-5%",
					features: "绿色企业优先"
				}];
			} else if (total >= 70) {
				level = "B";
				levelName = "B级（基本适配）";
				description = "具备绿色融资基本条件，但存在材料或数据缺口";
				actions = [
					"推荐地方城商行产品",
					"需补充缺项材料后申报",
					"可通过担保增信提升通过率"
				];
				recommendations = [{
					bank: "贵阳银行",
					product: "\"绿易贷\"",
					maxAmount: "最高1000万",
					rate: "年化4%-5%",
					features: "门槛相对较低"
				}, {
					bank: "贵州银行",
					product: "\"绿色普惠信用贷\"",
					maxAmount: "最高500万",
					rate: "年化4.5%-5.5%",
					features: "小微企业友好"
				}];
			} else if (total >= 55) {
				level = "C";
				levelName = "C级（条件不足）";
				description = "绿色属性尚可，但某方面存在明显短板";
				actions = [
					"建议先完成材料整改和合规核验",
					"可匹配担保增信或抵押方式",
					"3个月后复评"
				];
				recommendations = [{
					bank: "贵州银行",
					product: "\"普惠小微贷\"",
					maxAmount: "最高300万",
					rate: "年化5%-6%",
					features: "需要担保抵押"
				}, {
					bank: "贵阳银行",
					product: "\"普惠信用贷\"",
					maxAmount: "最高200万",
					rate: "年化5.5%-6.5%",
					features: "小微专项"
				}];
			} else if (total >= 40) {
				level = "D";
				levelName = "D级（暂不适配）";
				description = "绿色属性不明确或信用/财务存在重大风险";
				actions = [
					"建议重新评估项目绿色属性",
					"如属于目录外项目，建议转向普通普惠贷款",
					"需实质性改善经营或信用状况"
				];
				recommendations = [{
					bank: "贵州省农村信用社",
					product: "\"普惠通\"",
					maxAmount: "最高100万",
					rate: "年化6%-8%",
					features: "门槛较低"
				}, {
					bank: "各商业银行",
					product: "普通小额贷款",
					maxAmount: "视情况",
					rate: "年化6%-10%",
					features: "建议先规范经营"
				}];
			} else {
				level = "E";
				levelName = "E级（不建议申报）";
				description = "不符合绿色信贷基本准入条件";
				actions = [
					"不建议当前申报绿色贷款",
					"建议先进行环保整改、财务规范",
					"或选择其他融资方式"
				];
				recommendations = [{
					bank: "-",
					product: "建议先完善企业资质",
					maxAmount: "-",
					rate: "-",
					features: "完成整改后再评估"
				}];
			}
			return {
				total,
				level,
				levelName,
				description,
				actions,
				recommendations,
				dimensionScores: dimScores
			};
		}
		function generateSuggestions(result) {
			const suggestions = [];
			const { dimensions: dimScores } = result;
			if (dimScores["绿色属性"] < 20) {
				if (dimScores["绿色属性"] === 0) suggestions.push("您的项目暂未被纳入《绿色金融支持项目目录》，建议先确认项目归属类别或考虑其他融资渠道");
				else if (dimScores["绿色属性"] < 15) suggestions.push("建议完善绿色效益测算报告，提供具体的节能率和减排率数据");
			}
			if (dimScores["数据完整度"] < 15) suggestions.push("建议补充近12个月完整能耗数据和碳减排效果测算数据");
			if (dimScores["财务可行性"] < 15) {
				suggestions.push("建议提供近2年完整财务报表，确保数据准确一致");
				suggestions.push("合理规划融资金额，不宜超过年营收的2倍");
			}
			if (dimScores["信用风险"] < 10) {
				if (dimScores["信用风险"] < 8) suggestions.push("建议处理完所有环保处罚记录并获取结案证明");
				suggestions.push("保持良好征信记录，结清所有逾期款项");
			}
			if (dimScores["政策匹配度"] < 5) {
				suggestions.push("建议积极申报\"专精特新\"企业或\"绿色工厂\"认定，可显著提升政策匹配度");
				suggestions.push("关注贵州省重点产业政策，确保项目符合支持方向");
			}
			if (dimScores["材料完整度"] < 8) suggestions.push("建议按照《项目申报材料标准化清单》逐一核对并补充缺项材料");
			if (suggestions.length === 0) suggestions.push("您的企业条件优秀，建议尽快提交绿色贷款申请");
			return suggestions;
		}
		let currentQuestionInfo = derived(() => () => {
			let index = currentStep - 1;
			let questionIndex = 0;
			for (let i = 0; i < dimensions.length; i++) {
				const dim = dimensions[i];
				for (let j = 0; j < dim.questions.length; j++) {
					if (questionIndex === index) return {
						dimensionIndex: i,
						dimensionName: dim.name,
						dimensionWeight: dim.weight,
						questionIndexInDim: j,
						totalQuestionsInDim: dim.questions.length,
						question: dim.questions[j]
					};
					questionIndex++;
				}
			}
			return null;
		});
		let canProceed = derived(() => () => {
			const info = currentQuestionInfo()();
			if (!info) return false;
			return !!answers[info.question.id];
		});
		let scoreResult = derived(() => () => {
			if (currentStep <= totalQuestions) return null;
			return calculateScore();
		});
		let finalResult = derived(() => () => {
			const score = scoreResult()();
			if (!score) return null;
			return getResult(score, answers);
		});
		derived(() => () => {
			const result = finalResult()();
			if (!result) return [];
			return generateSuggestions(result);
		});
		head("1xmkimt", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>${escape_html(store_get($$store_subs ??= {}, "$t", t)("quizPage.title"))} - 黔绿融通</title>`);
			});
		});
		$$renderer.push(`<div class="container svelte-1xmkimt"><div class="page-title svelte-1xmkimt"><h1 class="svelte-1xmkimt">🌿 ${escape_html(store_get($$store_subs ??= {}, "$t", t)("quizPage.title"))}</h1> <p class="svelte-1xmkimt">${escape_html(store_get($$store_subs ??= {}, "$t", t)("quizPage.subtitle"))}</p></div> <div class="quiz-container svelte-1xmkimt">`);
		if (currentStep <= totalQuestions) {
			$$renderer.push("<!--[0-->");
			const info = currentQuestionInfo()();
			if (info) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="progress-container svelte-1xmkimt"><div class="progress-bar svelte-1xmkimt"><div class="progress-fill svelte-1xmkimt"${attr_style(`width: ${stringify((currentStep - 1) / totalQuestions * 100)}%`)}></div></div> <span class="progress-text svelte-1xmkimt">第 ${escape_html(currentStep)} / ${escape_html(totalQuestions)} 题</span></div> <div class="dimension-indicator svelte-1xmkimt"><span class="dimension-name svelte-1xmkimt">${escape_html(info.dimensionName)}</span> <span class="dimension-progress svelte-1xmkimt">(${escape_html(info.questionIndexInDim + 1)}/${escape_html(info.totalQuestionsInDim)})</span></div> <div class="question-card svelte-1xmkimt"><h2 class="question-title svelte-1xmkimt">${escape_html(info.question.title)}</h2> `);
				if (info.question.subtitle) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<p class="question-subtitle svelte-1xmkimt">${escape_html(info.question.subtitle)}</p>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--> <div class="options-list svelte-1xmkimt"><!--[-->`);
				const each_array = ensure_array_like(info.question.options);
				for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
					let option = each_array[$$index];
					$$renderer.push(`<button${attr_class("option-btn svelte-1xmkimt", void 0, { "selected": answers[info.question.id] === option.value })}><span class="option-icon svelte-1xmkimt">`);
					if (answers[info.question.id] === option.value) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`✓`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--></span> <span class="option-text svelte-1xmkimt">${escape_html(option.label)}</span></button>`);
				}
				$$renderer.push(`<!--]--></div></div> <div class="quiz-nav svelte-1xmkimt">`);
				if (currentStep > 1) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<button class="nav-btn prev-btn svelte-1xmkimt">${escape_html(store_get($$store_subs ??= {}, "$t", t)("quizPage.prevBtn"))}</button>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--> `);
				if (currentStep === totalQuestions) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<button class="nav-btn next-btn svelte-1xmkimt"${attr("disabled", !canProceed(), true)}>${escape_html(store_get($$store_subs ??= {}, "$t", t)("quizPage.viewResults"))}</button>`);
				} else {
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`<button class="nav-btn next-btn svelte-1xmkimt"${attr("disabled", !canProceed(), true)}>${escape_html(store_get($$store_subs ??= {}, "$t", t)("quizPage.nextBtn"))}</button>`);
				}
				$$renderer.push(`<!--]--></div> <button class="reset-link svelte-1xmkimt">${escape_html(store_get($$store_subs ??= {}, "$t", t)("quizPage.restartQuiz"))}</button>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]-->`);
		} else {
			$$renderer.push("<!--[-1-->");
			const result = finalResult()();
			if (result) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="results-container svelte-1xmkimt"><div class="score-card svelte-1xmkimt"><div class="score-main svelte-1xmkimt"><div class="score-number svelte-1xmkimt">${escape_html(result.total)}</div> <div class="score-label svelte-1xmkimt">${escape_html(store_get($$store_subs ??= {}, "$t", t)("quizPage.scoreLabel"))}</div></div> <div${attr_class(`level-badge level-${stringify(result.level)}`, "svelte-1xmkimt")}>${escape_html(result.levelName)}</div></div> <div class="level-desc svelte-1xmkimt"><h3 class="svelte-1xmkimt">${escape_html(store_get($$store_subs ??= {}, "$t", t)("quizPage.fitDescription"))}</h3> <p class="svelte-1xmkimt">${escape_html(result.description)}</p></div> <div class="recommendations svelte-1xmkimt"><h3>${escape_html(store_get($$store_subs ??= {}, "$t", t)("quizPage.recommendedProducts"))}</h3> <div class="products-list svelte-1xmkimt"><!--[-->`);
				const each_array_1 = ensure_array_like(result.recommendations);
				for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
					let rec = each_array_1[$$index_1];
					$$renderer.push(`<div class="product-item svelte-1xmkimt"><div class="product-header svelte-1xmkimt"><span class="product-bank svelte-1xmkimt">${escape_html(rec.bank)}</span> <span class="product-name svelte-1xmkimt">${escape_html(rec.product)}</span></div> <div class="product-details svelte-1xmkimt"><div class="product-detail svelte-1xmkimt"><span class="detail-label svelte-1xmkimt">${escape_html(store_get($$store_subs ??= {}, "$t", t)("quizPage.amount"))}</span> <span class="detail-value svelte-1xmkimt">${escape_html(rec.maxAmount)}</span></div> <div class="product-detail svelte-1xmkimt"><span class="detail-label svelte-1xmkimt">${escape_html(store_get($$store_subs ??= {}, "$t", t)("quizPage.rate"))}</span> <span class="detail-value svelte-1xmkimt">${escape_html(rec.rate)}</span></div> <div class="product-detail full svelte-1xmkimt"><span class="detail-label svelte-1xmkimt">${escape_html(store_get($$store_subs ??= {}, "$t", t)("quizPage.features"))}</span> <span class="detail-value svelte-1xmkimt">${escape_html(rec.features)}</span></div></div></div>`);
				}
				$$renderer.push(`<!--]--></div></div> <div class="actions-section svelte-1xmkimt"><h3 class="svelte-1xmkimt">${escape_html(store_get($$store_subs ??= {}, "$t", t)("quizPage.actionTips"))}</h3> <ul class="actions-list svelte-1xmkimt"><!--[-->`);
				const each_array_2 = ensure_array_like(result.actions);
				for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
					let action = each_array_2[$$index_2];
					$$renderer.push(`<li class="svelte-1xmkimt">${escape_html(action)}</li>`);
				}
				$$renderer.push(`<!--]--></ul></div> <div class="result-actions svelte-1xmkimt"><button class="action-btn primary svelte-1xmkimt" data-apply-trigger=""${attr("data-quiz-result", JSON.stringify({
					recommendationLevel: result.levelName,
					totalScore: result.total,
					matchedProducts: result.recommendations.map((r) => `${r.bank} - ${r.product}`)
				}))}>${escape_html(store_get($$store_subs ??= {}, "$t", t)("quizPage.applyNow"))}</button> <button class="action-btn secondary svelte-1xmkimt">${escape_html(store_get($$store_subs ??= {}, "$t", t)("quizPage.restartAssessment"))}</button> <a href="/products" class="action-btn secondary svelte-1xmkimt">${escape_html(store_get($$store_subs ??= {}, "$t", t)("quizPage.viewAllProducts"))}</a></div></div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]-->`);
		}
		$$renderer.push(`<!--]--></div></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
export { _page as default };
