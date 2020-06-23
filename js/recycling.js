/*
* @Author: dxx
* @Email: dxxtalking@163.com
* @Date:   2020-06-06 17:00:09
* @Last Modified by:   dxx
* @Last Modified time: 2020-06-23 17:40:52
*/
$(function () {
	// 请求ajax 
	var json_data = {
	  "provName": "",
	  "cityName": "",
	  "distName": ""
	};

	$.ajax({
	  type: "POST",
	  url: "/api/Open/GetDataBoard",
	  data: JSON.stringify(json_data),
	  contentType: "application/json;charset=utf-8",
	  dataType: "json",
	  success: function(response){
	  	console.log(response.data);
	  	if(response.code == 200){ //Success
	  		var data = response.data;
	  		
	  		/* ----------- 左边 ----------- */
	  		// 城市智慧站数量排行 machineCountRanking
        machineCount(data.machineCountRanking);
        // 城市减少二氧化碳排行 reduceCo2Ranking
        reduceCo2(data.reduceCo2Ranking);
        // 城市智慧站使用人次排行 useCountRanking
        useCount(data.useCountRanking);
        // 垃圾分类价值 rubbishBackValue
        rubbishBackValue(data.rubbishBackValue);

        /* ----------- 中间 ----------- */
        // 地图
        
        // 各项垃圾清运时间 rubbishClearTime
        rubbishClearTime(data.rubbishClearTime); 
        // 投递人次
        $("#toudi").text(data.totalPutCount);
        // 清运人次
        $("#qingyun").text(data.totalBackCount);
        /* 各城市垃圾减量 */
        // 各城市垃圾减量数量 reduceRubbishRanking
        reduceRubbishRank(data.reduceRubbishRanking);
        // 各城市垃圾减量占比排名 reduceRubbishPercent
        reduceRubbishPercent(data.reduceRubbishPercent);

        /* ----------- 右边 ----------- */
        /* 垃圾分类数据汇总 */
        // 分类干湿垃圾重量
        $("#summary_1").text(data.totalDryCookWeight);
        // 分类可回收纸箱重量
        $("#summary_2").text(data.totalPaperWeight);
        // 分类回收瓶子个数
        $("#summary_3").text(data.totalBottleCount);

        /* 垃圾投递、清运时间占比 */
        // 垃圾回收时间占比 putTimeZonePercent
        timeZone(data.putTimeZonePercent,myChart5,option5,"垃圾回收时间");
		    // 垃圾投递时间占比 backTimeZonePercent
		    timeZone(data.backTimeZonePercent,myChart6,option6,"垃圾投递时间");

        /* 垃圾分类执行效果 */
        // 分类正确
        $("#result_true").text(data.putSuccessPercent + '%');
        // 分类错误
        $("#result_false").text(data.putErrorPercent  + '%');

        /* 垃圾投递清运记录 */
        // 投递记录 latelyPutRecord
        latelyRecord(data.latelyPutRecord,"#delivery");

				// 清运记录 latelyBackRecord
				latelyRecord(data.latelyBackRecord,"#check");
	  	}
	  },
	  error:function(arg1){
	    //console.log(arg1)
	    console.log("接口错误，系统异常");
	  }
	});

});

// 城市智慧站数量排行
function machineCount(data){
  myChart1.setOption({                
    xAxis:{
      data:data.xAxis
    },                
    series:[
      { //根据名字对应到相应的系列
        name:"城市智慧站数量排行",
        data:data.yAxis,
      },{
      	name: '城市智慧站数量排行-3d右侧部分',
      	data:data.yAxis.map(item => item + 0.1),
      },{
      	name: '城市智慧站数量排行-3d头部分',
      	data:data.yAxis,
      }
    ]
  });
};

// 城市减少二氧化碳排行
function reduceCo2(data){
  for(var i = 0; i< data.length; i++){
  	var co2_item = data[i];
  	var itemHtml = `
  		<div class="rank_item">
				<p>NO.`+ (i+1) +`</p>
				<span>`+ co2_item.xAxis +`</span>
				<div class="vertical_line"></div>
			</div>
  	`;
  	$("#co2").append(itemHtml);
  };
};

// 城市智慧站使用人次排行
function useCount(data){
	for(var i = 0; i< data.length; i++){
  	var slide = data[i];
  	var swiperSlide = `
  		<div class="swiper-slide">
      	<div class="times_item">
					<p><span class="myFont1">`+ slide.yAxis +`</span></p>
					<div class="times_txt text-center">
						<span>`+ slide.xAxis +`</span>
						<img src="images/times_item`+ (i+1) +`.png" alt="" class="img-fluid">
					</div>
				</div>
      </div>
  	`;
  	$("#swiper-wrapper").append(swiperSlide);
  };
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 20,
  	centeredSlides: true,
  	autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  	loop: true,
  });
};

// 垃圾分类价值
function rubbishBackValue(data){
	myChart2.setOption({                
    yAxis:[{
      data:data.xAxis
    }],                
    series:[
      { //根据名字对应到相应的系列
        name:"垃圾分类价值",
        data:data.yAxis,
      }
    ]
  });
};

// 地图
function mapRubbishList(){

};

// 各项垃圾清运时间
function rubbishClearTime(data){
	for(var i = 0; i< data.length; i++){
  	var p = data[i];
  	var timesP = `
  		<p class="d-flex justify-content-between">
				<span>`+ p.pairKey + `</span><span class="myFont2">`+ p.pairValue + `</span>
			</p>
  	`;
  	$("#clearTime").append(timesP);
  };
};

// 各城市垃圾减量数量
function reduceRubbishRank(data){
	myChart4.setOption({                
	  xAxis:{
	    data:data.xAxis
	  },                
	  series:[
	    { //根据名字对应到相应的系列
	      name: '各城市垃圾减量数量',
	      data:data.yAxis,
	    }
	  ]
	});
};

// 各城市垃圾减量占比排名
function reduceRubbishPercent(data){
	for(var i = 0; i< data.length; i++){
		var decrease = data[i];
		var decreaseHtml = `
			<div class="decrease_item d-flex justify-content-between">
				<div class="col-2 level">`+ (i+1) +`</div>
				<div class="col-6 city">`+ decrease.xAxis +`</div>
				<div class="col-4 num">`+ decrease.yAxis +` %</div>
			</div>
		`;
		$("#decrease_rank").append(decreaseHtml);
	}; 
}

// 时间占比
function timeZone(data,chart,option,name){
	var len = data.yAxis.length;
	var timeZoneData = new Array();
	for(var i = 0; i< len; i++){
		timeZoneData.push({
			value:data.yAxis[i],
			name:data.xAxis[i],
		});
	};
	chart.setOption({                               
	  series:[
	    { //根据名字对应到相应的系列
	      name:name,
	      data:timeZoneData,
	    }
	  ]
	});
	tools.loopShowTooltip(chart, option,{
    interval: 4000,
    loopSeries: true
	});
};

// 记录列表
function latelyRecord(data,parentDom){
	for(var i = 0; i< data.length; i++){
		var lately = data[i];
		var liHtml;
		if("totalWeight" in lately){
			liHtml = `
				<li>
					<div>
						<span>` + lately.cityName+ `</span>
						<span>` + lately.distName+ `</span>
						<span>` + lately.userName+ `</span>
						<span>` + lately.totalWeight+ ` kg</span>
						<span>` + lately.totalCount+ `</span>
						<span>` + lately.createTime+ `</span>
					</div>
				</li>
			`;
		}else{
			liHtml = `
				<li>
					<div>
						<span>` + lately.cityName+ `</span>
						<span>` + lately.distName+ `</span>
						<span>` + lately.userName+ `</span>
						<span>` + lately.createTime+ `</span>
					</div>
				</li>
			`;
		}
		$(parentDom + " ul").append(liHtml);
	}

	$(parentDom).cxScroll({
		step:1,
		time:2000,
		direction: 'bottom',
	});
}

