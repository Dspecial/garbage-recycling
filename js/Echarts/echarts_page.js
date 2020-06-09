$(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(document.getElementById("charts1"),"Limitless");
    var myChart2 = echarts.init(document.getElementById("charts2"),"Limitless");
    var myChart3 = echarts.init(document.getElementById("charts3"),"Limitless");
    var myChart4 = echarts.init(document.getElementById("charts4"),"Limitless");
    var myChart5 = echarts.init(document.getElementById("charts5"),"Limitless");
    var myChart6 = echarts.init(document.getElementById("charts6"),"Limitless");

    const chart1_data = [900, 800, 700, 650, 600, 550, 500, 450, 400, 300]
    const sideData = chart1_data.map(item => item + 25);
    option1 = {
        tooltip: {
            trigger: 'axis',
            formatter: "{b} : {c}",
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {  
            left: '5%',  
            right: '6%',
            top: '10%',
            bottom: '10%',  
            containLabel: true  
        }, 
        xAxis: {
            data: ['北京', '上海', '南京', '广州', '无锡', '苏州', '深圳', '张家港', '常熟', '太仓'],
            splitLine: {
                show: false,
            },
            //坐标轴
            axisLine: {
                lineStyle: {
                    color: '#3eb2e8'
                }
            },
            //坐标值标注
            axisLabel: {
                color: "#7597A3", //刻度线标签颜色
                interval:0,//横轴信息全部显示
                rotate:45,//-30度角倾斜显示
            }
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle:{
                    color: ['#7597A3'],
                    width: 1,
                    type: 'dotted'
                }
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                color: "#7597A3", //刻度线标签颜色
            },
        },
        series: [{
            name: '城市智慧站数量排行',
            tooltip: {
                show: false
            },
            type: 'bar',
            barWidth: 16,
            itemStyle: {
                //通常情况下：
                normal: {
                    //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: function (params) {
                        var colorList = [
                            ['#ABDCFF', '#0396FF'],
                            ['#90F7EC', '#32CCBC'],
                            ['#81FBB8', '#28C76F'],
                            ['#E2B0FF', '#9F44D3'],
                            ['#FFD3A5', '#FD6585'],
                            ['#FDEB71', '#D4B900'],
                            ['#FCCF31', '#F55555'],
                            ['#F10076', '#FFB5D9'],
                            ['#D37300', '#FFB05E'],
                            ['#FFBCBD', '#FF4C4F'],
                        ];
                        var index = params.dataIndex;
                        if (params.dataIndex >= colorList.length) {
                            index = params.dataIndex - colorList.length;
                        }
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1,[
                            {
                                offset: 0,
                                color: colorList[index][0]
                            },
                            {
                                offset: 1,
                                color: colorList[index][1]
                            }
                        ]);
                    }
                },
            },
            data: chart1_data,
            barGap: 0
        }, {
            type: 'bar',
            barWidth: 5,
            itemStyle: {
                normal: {
                    color: function(params) {
                        let colorList = [
                            "#116FD0",
                            "#08C1AE",
                            "#07A44D",
                            "#861FC1",
                            "#CD3A46",
                            "#D5BA05",
                            "#BE3C12",
                            "#DA247D",
                            "#D67200",
                            "#D92C2E"
                        ];
                        return colorList[params.dataIndex];
                    }
                }
            },
            barGap: 0,
            data: sideData
        }, {
            name: '城市智慧站数量排行-3d部分',
            tooltip: {
                show: false
            },
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: function(params) {
                        let colorList = [
                            "#1A86FF",
                            "#08C1AE",
                            "#38D881",
                            "#B05BE1",
                            "#F25C5C",
                            "#E5CC29",
                            "#D67A23",
                            "#E12D85",
                            "#E38821",
                            "#FF6E71"
                        ];
                        return colorList[params.dataIndex];
                    }
                }
            },
            symbol: 'path://M 0,0 l 120,0 l -30,60 l -120,0 z',
            symbolSize: ['23', '4'],
            symbolOffset: ['0', '-4'],
            //symbolRotate: -5,
            symbolPosition: 'end',
            data: chart1_data,
            z: 3
        }]
    };

    option2 = {
        grid: {
            left: "5%",
            top: "10%",
            bottom: "-4%",
            right: "17%",
            containLabel: true
        },
        tooltip: {
            trigger: "item",
        },
        xAxis: {
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel: {show: false}
        },
        yAxis: [{
            type: "category",
            inverse: true,
            data: ["减少出车次数(次)","减少二氧化碳(吨)","减少清运时间(小时)","减少人力(个)","减少二噁英(吨)"],
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel: {
                margin: 15,
                textStyle: {
                    color: "#fff",
                    fontSize: 14,
                }
            }
        }],
        series: [
            {
                tooltip: {
                    show: true
                },
                z: 4,
                type: "pictorialBar",
                symbolSize: ['4', '16'],
                symbolRepeat: "fixed",
                symbol:'roundRect',
                symbolMargin:[5,0],
                color:"rgba(35,98,194,0.4)",
                data: [1,1,1,1,1],// 此数据用不到
            },
            {
                z: 6,
                name:'垃圾分类价值',
                type: "pictorialBar",
                symbolSize: ['4', '16'],
                animation: true,
                symbolRepeat: "fixed",
                symbol:'roundRect',
                symbolClip: true,
                symbolPosition: "start",
                symbolMargin:[5,0],
                data:[1805,1300,1050,850,1600],
                itemStyle: {
                    normal: {
                        color: function(params) {
                            let colorList = [
                                "#58D58B",
                                "#16E3EB",
                                "#FF7875",
                                "#FFC53D",
                                "#40A9FF"
                            ];
                            return colorList[params.dataIndex];
                        }
                    }
                },
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#7BE39D',
                            fontSize: 14,

                        },
                        position: "right",
                        offset: [10, 0]

                    }
                },
            },
            {
                type: "bar"
            },

        ]
    };

    var chart3_data = [
        {
            name: '海门',
            value: 7000, // 投放智慧站
            value2: 20000, // 已分类垃圾
            value3: 3000, // 已分类纸箱
            value4: 20000, // 已分类瓶子
            value5: 1000, // 已减少二氧化碳
        },
        {
            name: '西藏',
            value: 12000, // 投放智慧站
            value2: 20000, // 已分类垃圾
            value3: 3000, // 已分类纸箱
            value4: 20000, // 已分类瓶子
            value5: 1000, // 已减少二氧化碳
        },
        {
            name: '贵州',
            value: 4500, // 投放智慧站
            value2: 20000, // 已分类垃圾
            value3: 3000, // 已分类纸箱
            value4: 20000, // 已分类瓶子
            value5: 1000, // 已减少二氧化碳
        },
        {
            name: '江苏',
            value: 1100, // 投放智慧站
            value2: 20000, // 已分类垃圾
            value3: 3000, // 已分类纸箱
            value4: 20000, // 已分类瓶子
            value5: 1000, // 已减少二氧化碳
        },
        {
            name: '重庆',
            value: 750, // 投放智慧站
            value2: 20000, // 已分类垃圾
            value3: 3000, // 已分类纸箱
            value4: 20000, // 已分类瓶子
            value5: 1000, // 已减少二氧化碳
        },
        {
            name: '北京',
            value: 100, // 投放智慧站
            value2: 20000, // 已分类垃圾
            value3: 3000, // 已分类纸箱
            value4: 20000, // 已分类瓶子
            value5: 1000, // 已减少二氧化碳
        },
        {
            name: '青海',
            value: 4600, // 投放智慧站
            value2: 20000, // 已分类垃圾
            value3: 3000, // 已分类纸箱
            value4: 20000, // 已分类瓶子
            value5: 1000, // 已减少二氧化碳
        },
        {
            name: '南海诸岛',
            value: 4600, // 投放智慧站
            value2: 20000, // 已分类垃圾
            value3: 3000, // 已分类纸箱
            value4: 20000, // 已分类瓶子
            value5: 1000, // 已减少二氧化碳
        },
    ];

    function convertData(data) {
       var res = [];
       for (var i = 0; i < data.length; i++) {
           var geoCoord = geoCoordMap[data[i].name];
           if (geoCoord) {
               res.push({
                   name: data[i].name,
                   value: geoCoord.concat(data[i].value)
               });
           }
       }
       return res;
    };


    option3 = {
        legend: {
            show: false
        },
        tooltip: {
            show: true,
            padding: 0,
            enterable: true,// 鼠标是否可以进入tip框中
            transitionDuration: 1,
            triggerOn: "click",
            confine:true,//是否把tip限制在图表区域内
            formatter: function(params) {
                //console.log(params);
                if(params.data){
                    var tipHtml = '';
                    tipHtml += `
                        <div class="d-flex justify-content-between align-items-center map_tooltip">
                            <i class="iconfont icon-huishou" style="color:`+ params.color + `"></i>
                            <div class="tip_content">
                                <p style="font-size:18px;text-align:right;margin-bottom:10px;"><span>`+ params.name + `</span></p>
                                <p class="d-flex justify-content-between">
                                    <span>投放智慧站</span>
                                    <span><span style="color:`+ params.color + `">`+ params.data.value +`</span>个</span>
                                </p>
                                <p class="d-flex justify-content-between">
                                    <span>已分类垃圾</span><span>
                                    <span style="color:`+ params.color + `">`+ params.data.value2 +`</span>吨</span>
                                </p>
                                <p class="d-flex justify-content-between">
                                    <span>已分类纸箱</span><span>
                                    <span style="color:`+ params.color + `">`+ params.data.value3 +`</span>吨</span>
                                </p>
                                <p class="d-flex justify-content-between">
                                    <span>已分类瓶子</span><span>
                                    <span style="color:`+ params.color + `">`+ params.data.value4 +`</span>个</span>
                                </p>
                                <p class="d-flex justify-content-between">
                                    <span>已减少二氧化碳</span><span>
                                    <span style="color:`+ params.color + `">`+ params.data.value5 +`</span>吨</span>
                                </p>
                            </div>
                        </div>
                    `;
                    return tipHtml;
                }

            }
        },
        visualMap: {
            min: 0,
            max: 1000,
            right: 26,
            top: 40,
            showLabel: !0,
            text: ["高", "低"],
            pieces: [{
                gte: 10000,
                label: "> 10000 吨",
                color: "#FF817E"
            },{
                gte: 5000,
                lte: 10000,
                label: "5000 - 10000 吨",
                color: "#FFEC3D"
            },{
                gte: 2000,
                lte: 5000,
                label: "2000 - 5000 吨",
                color: "#7BDA56"
            }, {
                gte: 1000,
                lte: 2000,
                label: "1000 - 2000 吨",
                color: "#ff8c71"
            }, {
                gte: 500,
                lt: 1000,
                label: "500 - 1000 吨",
                color: "#36CFC9"
            }, {
                lt: 500,
                label: "< 500 吨",
                color: "#009FFF"
            }],
            show: false,// 不显示 visualMap
        },
        geo: {
            map: 'china',
            aspectScale: 0.75,
            label: {
                emphasis: {
                    show: false
                }
            },
            regions: [
                {
                  name: "南海诸岛",
                  value: 0,
                  itemStyle: {
                    normal: {
                      opacity: 0,
                      label: {
                        show: false
                      }
                    }
                  }
                }
            ],
            roam: false,//地图设置不可拖拽，固定的
            itemStyle: {
                normal: {
                    borderColor: '#05E4FF',
                    borderWidth: 4,
                    areaColor: "#031E65",
                    shadowColor: '#05E4FF',
                    shadowBlur: 10
                },
                emphasis: {
                    show:false,
                    borderColor: '#05E4FF',
                    borderWidth: 4,
                    areaColor: "#031E65",
                }
            },
            z: 2
        },
        series: [{
            name:'垃圾回收',
            type: 'map',
            map: 'china',
            showLegendSymbol: false, //系列标识的小圆点，存在 legend 组件时生效
            tooltip: {
                show: true,
            },
            label: {
                normal:{
                    show: false,
                    color:"#fff",
                },
                emphasis: {
                    show: false,
                }
            },
            top: '8.5%',
            left: '10.3%',
            aspectScale: .75,
            roam: false,
            itemStyle: {
                normal: {
                    borderColor: 'rgba(255,255,255,0.5)',
                    borderWidth: 1,
                    areaColor: "#009FFF",
                },
                emphasis: {
                    show:false,
                    areaColor: '#4C83FF'
                }
            },
            data: chart3_data,
            z: 3
        },]
    };


    option4 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function (params) {
                return params[0].name + ': ' + params[0].value;
            }
        },
        grid: {  
            left: '5%',  
            right: '10%',
            top: '0%',
            bottom: '10%',  
            containLabel: true  
        },
        xAxis: {
            data: ['上海', '北京', '南京', '常州', '无锡', '苏州', '太仓', '昆山'],
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel: {
                color: '#fff'
            }
        },
        yAxis: {
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel: {show: false}
        },
        series: [{
            name: '各城市垃圾减量数量',
            type: 'pictorialBar',
            barCategoryGap: '-120%',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
                normal: {
                    //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: function (params) {
                        var colorList = [
                            ['#ABDCFF', '#0396FF'],
                            ['#90F7EC', '#32CCBC'],
                            ['#81FBB8', '#28C76F'],
                            ['#FFD3A5', '#FD6585'],
                            ['#FCCF31', '#F55555'],
                            ['#FDEB71', '#D4B900'],
                            ['#FFBCBD', '#FF4C4F'],
                            ['#F10076', '#FFB5D9'],
                            ['#E2B0FF', '#9F44D3'],
                        ];
                        var index = params.dataIndex;
                        if (params.dataIndex >= colorList.length) {
                            index = params.dataIndex - colorList.length;
                        }
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1,[
                            {
                                offset: 0,
                                color: colorList[index][0]
                            },
                            {
                                offset: 1,
                                color: colorList[index][1]
                            }
                        ]);
                    },
                    opacity: 0.6
                },
            },
            emphasis: {
                itemStyle: {
                    opacity: 1
                }
            },
            data: [231, 160, 215, 118, 212, 170, 200, 190],
        }]
    };

    option5 = {
        color: ['#21A3FF','#FFF700','#69EDA4'],
        series: [
            {
                name:'垃圾回收时间',
                type:'pie',
                radius: ['70%', '90%'],
                avoidLabelOverlap: false,
                hoverOffset:5,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '14',
                            lineHeight: 20,
                            rich: {
                                a: {
                                    lineHeight: 20,
                                }
                            }
                        },
                        formatter: '{b}\n {d}%',
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:100, name:'8-12点'},
                    {value:69, name:'12-16点'},
                    {value:85, name:'16-23点'}
                ]
            }
        ]
    };
    
    option6 = {
        color: ['#FFA940','#5CDBD3','#FF7875'],
        series: [
            {
                name:'垃圾投递时间',
                type:'pie',
                radius: ['70%', '90%'],
                avoidLabelOverlap: false,
                hoverOffset:5,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '14',
                            lineHeight: 20,
                            rich: {
                                a: {
                                    lineHeight: 20,
                                }
                            }
                        },
                        formatter: '{b}\n {d}%',
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:10, name:'8-12点'},
                    {value:36, name:'12-16点'},
                    {value:85, name:'16-23点'}
                ]
            }
        ]
    };

    if (option1 && typeof option1 === "object") {
        myChart1.setOption(option1, true);
    }
    if (option2 && typeof option2 === "object") {
        myChart2.setOption(option2, true);
    }
    if (option3 && typeof option3 === "object") {
        myChart3.setOption(option3, true);
    }
    if (option4 && typeof option4 === "object") {
        myChart4.setOption(option4, true);
    }
    if (option5 && typeof option5 === "object") {
        myChart5.setOption(option5, true);
    }
    if (option6 && typeof option6 === "object") {
        myChart6.setOption(option6, true);
    }



    tools.loopShowTooltip(myChart5, option5,{
        interval: 4000,
        loopSeries: true
    });
    tools.loopShowTooltip(myChart6, option6,{
        interval: 4000,
        loopSeries: true
    });
});