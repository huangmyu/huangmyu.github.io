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
	var myChart = echarts.init(document.querySelector(".chart02"));
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
			radius: '90%',
			avoidLabelOverlap: false,

			// 调整饼状图的位置
			center: ["50%", "50%"],
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
			radius: '90%',
			avoidLabelOverlap: false,

			// 调整饼状图的位置
			center: ["50%", "50%"],
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
			radius: '90%',
			avoidLabelOverlap: false,

			// 调整饼状图的位置
			center: ["50%", "50%"],
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
			right: '5%',
			top: '3%'
		},
		grid: {
			left: '3%',
			right: '2%',
			bottom: '2%',
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
	var myChart = echarts.init(document.querySelector(".chart51"));
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
	var myChart = echarts.init(document.querySelector(".chart52"));
	var option = {
			    color: ['#55aa7f',  '#ff7c54'],
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
		        }
		    ]
	};
	myChart.setOption(option);
})();

(function() {
	var myChart = echarts.init(document.querySelector(".chart01"));
	var option = {
		
	};
	myChart.setOption(option);
})();
