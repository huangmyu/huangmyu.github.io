//各地区饼状图
(function() {
	var myChart = echarts.init(document.querySelector(".chart01"));
	var option = {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},
		series: [{
			name: '各地区人口数量',
			type: 'pie',
			// 调整饼状图的大小
			radius: '90%',
			avoidLabelOverlap: false,

			// 调整饼状图的位置
			center: ["50%", "50%"],
			label: {
				show: true,
				position: "inside"
			},
			// 不显示标签文字
			labelLine: {
				show: false
			},
			data: [{
					value: 98514948,
					name: '东北地区',
					itemStyle: {
						normal: {
							color: '#55aa7f'
						}
					}
				},
				{
					value: 563717119,
					name: '东部地区',
					itemStyle: {
						normal: {
							color: '#ffd19c'
						}
					}
				},
				{
					value: 364694362,
					name: '中部地区',
					itemStyle: {
						normal: {
							color: '#ff8c8e'
						}
					}
				},
				{
					value: 382852295,
					name: '西部地区',
					itemStyle: {
						normal: {
							color: '#ff7c54'
						}
					}
				}
			]
		}]
	};
	myChart.setOption(option);
})();

//2000，2010,2020年各地区人口数量变化
(function() {
	var myChart = echarts.init(document.querySelector(".chart2"));
	var option = {
			    color: ['#55aa7f', '#ffd19c', '#ff8c8e', '#ff7c54'],
		 tooltip: {
		        trigger: 'axis',
		        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
		            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    legend: {
		        data: ['东北地区', '东部地区', '中部地区', '西部地区'],
				textStyle: {
					color: '#ffffff',
					fontSize: '15px'}
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis: [
		        {
		            type: 'category',
		            data: ['2000年', '2010年', '2020年'],
					axisLabel: {
						color: '#ffffff',
						fontSize: '20px'
					},
					axisLine: {
						lineStyle:{
							color:'#ffffff'
						},
						}
		        }
		    ],
		    yAxis: [
		        {
		            type: 'value',
					axisLabel: {
						color: '#ffffff',
						fontSize: '20px'
					},
					axisLine: {
						lineStyle:{
							color:'#ffffff'
						},
						},
					splitLine: {
						show: false
					}
		        }
		    ],
		    series: [
		        {
		            name: '东北地区',
		            type: 'bar',
		            emphasis: {
		                focus: 'series'
		            },
		            data: [104864179, 109513129, 98514948]
		        },
		        {
		            name: '东部地区',
		            type: 'bar',
		            emphasis: {
		                focus: 'series'
		            },
		            data: [442338084, 506191179, 563717119]
		        },
		        {
		            name: '中部地区',
		            type: 'bar',
		            emphasis: {
		                focus: 'series'
		            },
		            data: [345888685, 356748794, 364694362]
		        },
				{
				    name: '西部地区',
				    type: 'bar',
				    emphasis: {
				        focus: 'series'
				    },
				    data: [349521278, 360357704, 382852295]
				}
		    ]
	};
	myChart.setOption(option);
})();

//2000,2010,2020年中国人口变化
(function() {
	var myChart = echarts.init(document.querySelector(".chart03"));
	var option = {
		tooltip: {
		       trigger: 'axis',
		       axisPointer: {            // 坐标轴指示器，坐标轴触发有效
		           type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		       }
		   },
		   grid: {
		       left: '3%',
		       right: '4%',
		       bottom: '3%',
		       containLabel: true
		   },
		    legend: {
		        data: ['全国人口数量'],
				textStyle: {
					color: '#ffffff',
					fontSize: '15px'}
		    },
		    xAxis: [
		        {
		            type: 'category',
		            data: ['2000年', '2010年', '2020年'],
		            axisPointer: {
		                type: 'shadow'
		            },
					axisLabel: {
						color: '#ffffff',
						fontSize: '20px'
					},
					axisLine: {
						lineStyle:{
							color:'#ffffff'
						},
						}
		        }
		    ],
		    yAxis: [
		        {
		            type: 'value',
		            name: '全国人口数量',
					axisLabel: {
						color: '#ffffff',
						fontSize: '20px'
					},
					axisLine: {
						lineStyle:{
							color:'#ffffff'
						},
						},
					splitLine: {
						show: false
					}
		        },
		        {
		            type: 'value',
					axisLine: {
						show:false
						},
					splitLine: {
						show: false
					}
		        },
				
		    ],
		    series: [
		        {
		            name: '全国人口数量',
					color:"#55ffff",
		            type: 'bar',
					barWidth:"30px",
		            data: [1242612226,1332810869,1411778724]
		        },
		        {
		            name: '全国人口数量',
		            type: 'line',
					color:"#ff8c8e",
		            data: [1242612226,1332810869,1411778724]
		        }
		    ]
	};
	myChart.setOption(option);
})();

//年龄组成2020
(function() {
	var myChart = echarts.init(document.querySelector(".chart41"));
	var option = {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},
		legend: {
			 orient: 'vertical',
			        left: 'left',
			 textStyle: {
				color: '#ffffff',
				fontSize: '30px'}
		},
		series: [{
			name: '2020年年龄组成（万人）',
			type: 'pie',
			// 调整饼状图的大小
			radius: '85%',
			avoidLabelOverlap: false,

			// 调整饼状图的位置
			center: ["60%", "56%"],
			label: {
				show: false,
				position: "inside"
			},
			// 不显示标签文字
			labelLine: {
				show: false
			},
			data: [{
					value: 25338,
					name: '2020年0-14岁人口',
					itemStyle: {
						normal: {
							color: '#55aa7f'
						}
					}
				},
				{
					value: 89438,
					name: '2020年15-59岁人口',
					itemStyle: {
						normal: {
							color: '#ffd19c'
						}
					}
				},
				{
					value: 7338,
					name: '2020年60-64岁人口',
					itemStyle: {
						normal: {
							color: '#ff8c8e'
						}
					}
				},
				{
					value: 19604,
					name: '2020年65岁及以上人口',
					itemStyle: {
						normal: {
							color: '#ff7c54'
						}
					}
				}
			]
		}]
	};
	myChart.setOption(option);
})();

//年龄组成2010
(function() {
	var myChart = echarts.init(document.querySelector(".chart42"));
	var option = {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},
		legend: {
			 orient: 'vertical',
			        left: 'left',
			 textStyle: {
				color: '#ffffff',
				fontSize: '30px'}
		},
		series: [{
			name: '2010年年龄组成（万人）',
			type: 'pie',
			// 调整饼状图的大小
			radius: '85%',
			avoidLabelOverlap: false,

			// 调整饼状图的位置
			center: ["60%", "56%"],
			label: {
				show: false,
				position: "inside"
			},
			// 不显示标签文字
			labelLine: {
				show: false
			},
			data: [{
					value: 22132,
					name: '2010年0-14岁人口',
					itemStyle: {
						normal: {
							color: '#55aa7f'
						}
					}
				},
				{
					value: 93389,
					name: '2010年15-59岁人口',
					itemStyle: {
						normal: {
							color: '#ffd19c'
						}
					}
				},
				{
					value: 5866,
					name: '2010年60-64岁人口',
					itemStyle: {
						normal: {
							color: '#ff8c8e'
						}
					}
				},
				{
					value: 11889,
					name: '2010年65岁及以上人口',
					itemStyle: {
						normal: {
							color: '#ff7c54'
						}
					}
				}
			]
		}]
	};
	myChart.setOption(option);
})();

//年龄组成2000
(function() {
	var myChart = echarts.init(document.querySelector(".chart43"));
	var option = {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},
		legend: {
			 orient: 'vertical',
			        left: 'left',
			 textStyle: {
				color: '#ffffff',
				fontSize: '30px'}
		},
		series: [{
			name: '2000年年龄组成（万人）',
			type: 'pie',
			// 调整饼状图的大小
			radius: '85%',
			avoidLabelOverlap: false,

			// 调整饼状图的位置
			center: ["60%", "56%"],
			label: {
				show: false,
				position: "inside"
			},
			// 不显示标签文字
			labelLine: {
				show: false
			},
			data: [{
					value: 28453,
					name: '2000年0-14岁人口',
					itemStyle: {
						normal: {
							color: '#55aa7f'
						}
					}
				},
				{
					value: 82811,
					name: '2000年15-59岁人口',
					itemStyle: {
						normal: {
							color: '#ffd19c'
						}
					}
				},
				{
					value: 4170,
					name: '2000年60-64岁人口',
					itemStyle: {
						normal: {
							color: '#ff8c8e'
						}
					}
				},
				{
					value: 8827,
					name: '2000年65岁及以上人口',
					itemStyle: {
						normal: {
							color: '#ff7c54'
						}
					}
				}
			]
		}]
	};
	myChart.setOption(option);
})();

//年龄组成折线图
(function() {
	var myChart = echarts.init(document.querySelector(".chart05"));
	var option = {
		 color: ['#55aa7f', '#ffd19c', '#ff8c8e', '#ff7c54'],
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: [{
					name: '0-14岁',
					icon: 'rectangular'
				},
				{
					name: '15-59岁',
					icon: 'rectangular'
				},{
					name: '60-64岁',
					icon: 'rectangular'
				},
				{
					name: '65岁及以上',
					icon: 'rectangular'
				}
			],
			textStyle: {
				color: '#ffffff',
				fontSize: '15px',
			},
			top: '3%'
		},
		grid: {
			left: '3%',
			right: '5%',
			bottom: '4%',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ['2000', '2010', '2020'],
			axisLabel: {
				color: '#ffffff',
				fontSize: '20px'
			},
			axisLine: {
				lineStyle:{
					color:'#ffffff'
				}},
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				color: '#ffffff',
				fontSize: '16'
			},
			axisLine: {
				lineStyle:{
					color:'#ffffff'
				}},
			splitLine: {
				show: false
			}
		},
		series: [{
				name: '0-14岁',
				type: 'line',
				symbolSize: 10,
				showSymbol: true,
				data: [22.9, 16.6, 18.0],
			},
			{
				name: '15-59岁',
				type: 'line',
				symbolSize: 10,
				showSymbol: true,
				data: [66.7, 70.1, 63.1]
			},
			{
				name: '60-64岁',
				type: 'line',
				symbolSize: 10,
				showSymbol: true,
				data: [3.4, 4.4, 5.2]
			},
			{
				name: '65岁及以上',
				type: 'line',
				symbolSize: 10,
				showSymbol: true,
				data: [7.1, 8.9, 13.8]
			}
		],
	};;
	myChart.setOption(option);
})();

//2020男女性别比
(function() {
	var myChart = echarts.init(document.querySelector(".chart61"));
	var option = {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},legend: {
			data: [{
					name: '男性人口（万）',
					icon: 'rectangular'
				},
				{
					name: '女性人口（万）',
					icon: 'rectangular'
				}
			],
			textStyle: {
				color: '#ffffff',
				fontSize: '15px',
			},
			right: '5%',
			top: '3%'
		},
		series: [{
			name: '2020年性别比例',
			type: 'pie',
			// 调整饼状图的大小
			// 内圆半径  外圆半径
			radius: ['35%', '80%'],
			avoidLabelOverlap: false,

			// 调整饼状图的位置
			center: ["50%", "55%"],
			label: {
				show: true,
				position: "inside"
			},
			// 不显示标签文字
			labelLine: {
				show: false
			},
			data: [{
					value: 72334,
					name: '男性人口（万）',
					itemStyle: {
						normal: {
							color: '#00aa00'
						}
					}
				},
				{
					value: 68844,
					name: '女性人口（万）',
					itemStyle: {
						normal: {
							color: '#2a67b8'
						}
					}
				}
			]
		}]
	};
	myChart.setOption(option);
})();

//2000,2010,2020性别比例
(function() {
	var myChart = echarts.init(document.querySelector(".chart62"));
	var option = {
			    color: ['#55aa7f',  '#ff7c54','#ff0000'],
		 tooltip: {
		        trigger: 'axis',
		        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
		            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    legend: {
		        data: ['男性人口（万）', '女性人口（万）'],
				textStyle: {
					color: '#ffffff',
					fontSize: '20px'},
				top:'8%'
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis: [
		        {
		            type: 'category',
		            data: ['2000年', '2010年', '2020年'],
					axisLabel: {
						color: '#ffffff',
						fontSize: '20px'
					},
					axisLine: {
						lineStyle:{
							color:'#ffffff'
						},
						}
		        }
		    ],
		    yAxis: [
		        {
		            type: 'value',
					axisLabel: {
						color: '#ffffff',
						fontSize: '20px'
					},
					axisLine: {
						lineStyle:{
							color:'#ffffff'
						},
						},
					splitLine: {
						show: false
					}
		        },
				 {
				            type: 'value',
				            name: '性别比',
							min:100,
							max:110,
				            interval: 5,
				            axisLabel: {
				                formatter: '{value} °C'
				            },
							axisLabel: {
								color: '#ffffff',
								fontSize: '20px'
							},
							axisLine: {
								lineStyle:{
									color:'#ffffff'
								},
								},
							splitLine: {
								show: false
							}
				        }
		    ],
		    series: [
		        {
		            name: '男性人口（万）',
		            type: 'bar',
		            emphasis: {
		                focus: 'series'
		            },
		            data: [64027.6, 68233.0, 72334]
		        },
		        {
		            name: '女性人口（万）',
		            type: 'bar',
		            emphasis: {
		                focus: 'series'
		            },
		            data: [60233.6, 65048.2, 68844]
		        },
				 {
				            name: '性别比',
				            type: 'line',
				            yAxisIndex: 1,
				            data: [106.74, 105.2, 105.07]
				        }
		    ]
	};
	myChart.setOption(option);
})();

//受教育情况
(function() {
	var myChart = echarts.init(document.querySelector(".chart71"));
	var option = {
		color: ['#ff7c54','#ffa0ad', '#ffd19c','#55aa7f','#55aaff'],
		title: {
		         text: '2020年人口受教育程度(万)',
		         left: 'center',
				 top:'4%',
				 textStyle:{
					 color:'#ffffff'
				 }
		     },
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},legend: {
			data: [{
					name: '大学（大专及以上）',
					icon: 'rectangular'
				},
				{
					name: '高中（含中专）',
					icon: 'rectangular'
				},
				{
					name: '初中',
					icon: 'rectangular'
				},
				{
					name: '小学',
					icon: 'rectangular'
				},
				{
					name: '其他',
					icon: 'rectangular'
				}
			],
			orient: 'vertical',
			       // left: 'left',
			textStyle: {
				color: '#ffffff',
				fontSize: '25px',
			},
			left: '4%',
			top: '13%'
		},
		series: [{
			name: '人口受教育程度',
			type: 'pie',
			// 调整饼状图的大小
			// 内圆半径  外圆半径
			radius: ['35%', '75%'],
			avoidLabelOverlap: false,

			// 调整饼状图的位置
			center: ["60%", "60%"],
			label: {
				show: true,
				position: "inside"
			},
			// 不显示标签文字
			labelLine: {
				show: false
			},
			data: [{
					value: 72334,
					name: '大学（大专及以上）'
				},
				{
					value: 68844,
					name: '高中（含中专）'
				},
				{
					value: 68844,
					name: '初中'
				},
				{
					value: 68844,
					name: '小学'
				},
				{
					value: 68844,
					name: '其他'
				}
			]
		}]
	};
	myChart.setOption(option);
})();

//三次调查受教育程度变化折线图
(function() {
	var myChart = echarts.init(document.querySelector(".chart72"));
	var option = {
		color: [ '#ff7c54','#ffa0ad', '#ffd19c','#55aa7f' ],
		title: {
		         text: '每十万人中受教育程度',
		         left: 'center',
				 top:'17%',
				 textStyle:{
					 color:'#ffffff',
					 fontSize:'20px'
				 }
		     },
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: [{
					name: '大学（大专及以上）程度',
					icon: 'rectangular'
				},
				{
					name: '高中（含中专）程度',
					icon: 'rectangular'
				},
				{
					name: '初中程度',
					icon: 'rectangular'
				},
				{
					name: '小学程度',
					icon: 'rectangular'
				}
			],
			textStyle: {
				color: '#ffffff',
				fontSize: '15px',
			},
		},
		grid: {
			top:'25%',
			left:'2%',
			right:'5%',
			bottom: '2%',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ['2000', '2010', '2020'],
			axisLabel: {
				color: '#ffffff',
				fontSize: '10px'
			},
			axisLine: {
				lineStyle:{
					color:'#ffffff'
				}},
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				color: '#ffffff',
				fontSize: '16'
			},
			axisLine: {
				lineStyle:{
					color:'#ffffff'
				}},
			splitLine: {
				show: false
			}
		},
		series: [{
				name: '大学（大专及以上）程度',
				type: 'line',
				symbolSize: 10,
				showSymbol: true,
				data: [3611,8930, 15467],
			},
			{
				name: '高中（含中专）程度',
				type: 'line',
				symbolSize: 10,
				showSymbol: true,
				data: [11146, 14032, 15088]
			},
			{
				name: '初中程度',
				type: 'line',
				symbolSize: 10,
				showSymbol: true,
				data: [33961, 38788, 34507]
			},
			{
				name: '小学程度',
				type: 'line',
				symbolSize: 10,
				showSymbol: true,
				data: [35701, 26779, 24767]
			}
		],
	};;
	myChart.setOption(option);
})();

//文盲比例
(function() {
	var myChart = echarts.init(document.querySelector(".chart08"));
	var option = {
			    color: ['#55aa7f',  '#ff7c54'],
		 tooltip: {
		        trigger: 'axis',
		        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
		            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    legend: {
		        data: ['文盲人口（万）','文盲率'],
				textStyle: {
					color: '#ffffff',
					fontSize: '25px'},
				top:'8%'
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis: [
		        {
		            type: 'category',
		            data: ['2000年', '2010年', '2020年'],
					axisLabel: {
						color: '#ffffff',
						fontSize: '20px'
					},
					axisLine: {
						lineStyle:{
							color:'#ffffff'
						},
						}
		        }
		    ],
		    yAxis: [
		        {
		            type: 'value',
					axisLabel: {
						color: '#ffffff',
						fontSize: '20px'
					},
					axisLine: {
						lineStyle:{
							color:'#ffffff'
						},
						},
					splitLine: {
						show: false
					}
		        },
				 {
				            type: 'value',
				            name: '文盲率',
							min:0,
							max:25,
				            interval: 5,
				            axisLabel: {
				                formatter: '{value} %'
				            },
							axisLabel: {
								color: '#ffffff',
								fontSize: '20px'
							},
							axisLine: {
								lineStyle:{
									color:'#ffffff'
								},
								},
							splitLine: {
								show: false
							}
				        }
		    ],
		    series: [
		        {
		            name: '文盲人口（万）',
		            type: 'bar',
					barWidth:'50%',
		            emphasis: {
		                focus: 'series'
		            },
		            data: [8507, 5466, 3775]
		        },
				{
				    name: '文盲率',
				    type: 'line',
				    yAxisIndex: 1,
				    data: [6.7, 4.1, 2.7]
				}
		    ]
	};
	myChart.setOption(option);
})();

//2015-2019出生、死亡人口，出生、死亡率
(function() {
	var myChart = echarts.init(document.querySelector(".chart91"));
	var option = {
			    color: ['#55aa7f',' #ff7c54','#55ffff','#ff0000'],
		 tooltip: {
		        trigger: 'axis',
		        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
		            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    legend: {
		        data: ['出生人口（万）', '死亡人口（万）','出生率','死亡率'],
				textStyle: {
					color: '#ffffff',
					fontSize: '20px'},
				top:'3%',
				// right:'10%'
		    },
		    grid: {
				top:'25%',
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis: [
		        {
		            type: 'category',
		            data: ['2015年', '2016年', '2017年', '2018年', '2019年'],
					axisLabel: {
						color: '#ffffff',
						fontSize: '20px'
					},
					axisLine: {
						lineStyle:{
							color:'#ffffff'
						},
						}
		        }
		    ],
		    yAxis: [
		        {
		            type: 'value',
					axisLabel: {
						color: '#ffffff',
						fontSize: '20px'
					},
					axisLine: {
						lineStyle:{
							color:'#ffffff'
						},
						},
					splitLine: {
						show: false
					}
		        },
				 {
				            type: 'value',
				            name: '出生率/死亡率',
							min:0,
							max:20,
				            interval: 5,
				            axisLabel: {
				                formatter: '{value} °C'
				            },
							axisLabel: {
								color: '#ffffff',
								fontSize: '20px'
							},
							axisLine: {
								lineStyle:{
									color:'#ffffff'
								},
								},
							splitLine: {
								show: false
							}
				        }
		    ],
		    series: [
		        {
		            name: '出生人口（万）',
		            type: 'bar',
		            emphasis: {
		                focus: 'series'
		            },
		            data: [1655,1786,1723, 1523,1465]
		        },
		        {
		            name: '死亡人口（万）',
		            type: 'bar',
		            emphasis: {
		                focus: 'series'
		            },
		            data: [975,977,986,993,998]
		        },
				 {
				            name: '出生率',
				            type: 'line',
				            yAxisIndex: 1,
				            data: [12.07,12.95,12.43,10.94,10.48]
				},
				{
				           name: '死亡率',
				           type: 'line',
				           yAxisIndex: 1,
				           data: [7.11,7.09,7.11,7.13,7.14]
				}
		    ]
	};
	myChart.setOption(option);
})();

//2015-2019年年末人口
(function() {
	var myChart = echarts.init(document.querySelector(".chart92"));
	var option = {
		title: {
		         text: '2015-2019年年末总人口(万)',
		         right: '10%',
				 // top:'5%',
				 
				 textStyle:{
					 color:'#ffffff'
				 }
		     },
		tooltip: {
		       trigger: 'axis',
		       axisPointer: {            // 坐标轴指示器，坐标轴触发有效
		           type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		       }
		   },
		   grid: {
			   top:'30%',
		       left: '3%',
		       right: '4%',
		       bottom: '3%',
		       containLabel: true
		   },
		    legend: {
		        data: ['年末总人口(万)'],
				textStyle: {
					color: '#ffffff',
					fontSize: '15px'},
					top:'5%',
					right:'2%'
		    },
		    xAxis: [
		        {
		            type: 'category',
		            data: ['2015年', '2016年', '2017年', '2018年', '2019年'],
		            axisPointer: {
		                type: 'shadow'
		            },
					axisLabel: {
						color: '#ffffff',
						fontSize: '20px'
					},
					axisLine: {
						lineStyle:{
							color:'#ffffff'
						},
						}
		        }
		    ],
		    yAxis: [
		        {
		            type: 'value',
		            name: '年末总人口（万）',
					min:100000,
					max:150000,
					axisLabel: {
						color: '#ffffff',
						fontSize: '20px'
					},
					axisLine: {
						lineStyle:{
							color:'#ffffff'
						},
						},
					splitLine: {
						show: false
					}
		        },
		        {
		            type: 'value',
					axisLine: {
						show:false
						},
					splitLine: {
						show: false
					}
		        },
				
		    ],
		    series: [
		        {
		            name: '年末总人口',
					color:"#55aa7f",
		            type: 'bar',
					barWidth:"30px",
		            data: [137465,138271,139008,139538,140005]
		        },
		        {
		            name: '年末总人口',
		            type: 'line',
					color:"#55ffff",
		            data: [137465,138271,139008,139538,140005]
		        }
		    ]
	};
	myChart.setOption(option);
})();

//出生人口、死亡人口性别
(function() {
	var myChart = echarts.init(document.querySelector(".chart101"));
	var option = {
		title: {
		         text: '2010 年 出 生 人 口 及 性 别 比 例',
				 top:'12%',
				 left:'1%',
				 // right:'50%',
				 textStyle:{
					 color:'#ffffff',
					 fontSize:22,
				 }
		     },
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},legend: {
			data: [{
					name: '男性人口（人）',
					icon: 'rectangular'
				},
				{
					name: '女性人口（人）',
					icon: 'rectangular'
				}
			],
			textStyle: {
				color: '#ffffff',
				fontSize: "110%",
			},
			orient: 'vertical',
			top: '55%',
			left:'5%',
			itemHeight:30,
			itemWidth:55,
			itemGap:20
		},
		series: [{
			name: '2010年出生人口',
			type: 'pie',
			// 调整饼状图的大小
			// 内圆半径  外圆半径
			radius: ['35%', '80%'],
			avoidLabelOverlap: false,

			// 调整饼状图的位置
			center: ["75%", "55%"],
			label: {
				show: true,
				position: "inside"
			},
			// 不显示标签文字
			labelLine: {
				show: false
			},
			data: [{
					value: 7487489,
					name: '男性人口（人）',
					itemStyle: {
						normal: {
							color: '#00aa00'
						}
					}
				},
				{
					value: 6348698,
					name: '女性人口（人）',
					itemStyle: {
						normal: {
							color: '#2a67b8'
						}
					}
				}
			]
		}]
	};
	myChart.setOption(option);
})();

(function() {
	var myChart = echarts.init(document.querySelector(".chart92"));
	var option = {
		title: {
		         text: '2015-2019年年末总人口(万)',
		         left: '38%',
				 top:'10%',
				 textStyle:{
					 color:'#ffffff'
				 }
		     },
		tooltip: {
		       trigger: 'axis',
		       axisPointer: {            // 坐标轴指示器，坐标轴触发有效
		           type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		       }
		   },
		   grid: {
		       left: '3%',
		       right: '4%',
		       bottom: '3%',
		       containLabel: true
		   },
		    legend: {
		        data: ['年末总人口(万)'],
				textStyle: {
					color: '#ffffff',
					fontSize: '15px'},
					top:'5%',
					right:'2%'
		    },
		    xAxis: [
		        {
		            type: 'category',
		            data: ['2015年', '2016年', '2017年', '2018年', '2019年'],
		            axisPointer: {
		                type: 'shadow'
		            },
					axisLabel: {
						color: '#ffffff',
						fontSize: '20px'
					},
					axisLine: {
						lineStyle:{
							color:'#ffffff'
						},
						}
		        }
		    ],
		    yAxis: [
		        {
		            type: 'value',
		            name: '年末总人口（万）',
					min:100000,
					max:150000,
					axisLabel: {
						color: '#ffffff',
						fontSize: '20px'
					},
					axisLine: {
						lineStyle:{
							color:'#ffffff'
						},
						},
					splitLine: {
						show: false
					}
		        },
		        {
		            type: 'value',
					axisLine: {
						show:false
						},
					splitLine: {
						show: false
					}
		        },
				
		    ],
		    series: [
		        {
		            name: '年末总人口',
					color:"#55aa7f",
		            type: 'bar',
					barWidth:"30px",
		            data: [137465,138271,139008,139538,140005]
		        },
		        {
		            name: '年末总人口',
		            type: 'line',
					color:"#55ffff",
		            data: [137465,138271,139008,139538,140005]
		        }
		    ]
	};
	myChart.setOption(option);
})();

(function() {
	var myChart = echarts.init(document.querySelector(".chart102"));
	var option = {
		title: {
		         text: '2010 年 死 亡 人 口 及 性 别 比 例',
				 top:'12%',
				 right:'1%',
				 // right:'50%',
				 textStyle:{
					 color:'#ffffff',
					 fontSize:22,
				 }
		     },
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},legend: {
			data: [{
					name: '男性人口（人）',
					icon: 'rectangular'
				},
				{
					name: '女性人口（人）',
					icon: 'rectangular'
				}
			],
			textStyle: {
				color: '#ffffff',
				fontSize: "110%",
			},
			orient: 'vertical',
			top: '55%',
			right:'10%',
			itemHeight:30,
			itemWidth:55,
			itemGap:20
		},
		series: [{
			name: '2010年出生人口',
			type: 'pie',
			// 调整饼状图的大小
			// 内圆半径  外圆半径
			radius: ['35%', '80%'],
			avoidLabelOverlap: false,

			// 调整饼状图的位置
			center: ["25%", "55%"],
			label: {
				show: true,
				position: "inside"
			},
			// 不显示标签文字
			labelLine: {
				show: false
			},
			data: [{
					value: 4293783,
					name: '男性人口（人）',
					itemStyle: {
						normal: {
							color: '#00aa00'
						}
					}
				},
				{
					value: 3128207,
					name: '女性人口（人）',
					itemStyle: {
						normal: {
							color: '#2a67b8'
						}
					}
				}
			]
		}]
	};
	myChart.setOption(option);
})();
