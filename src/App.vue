<template>
  <div id="app">
    <div class="header">
    <span class="title">南方基金大屏</span>
    <span class="Time">{{date().format('YYYY-MM-DD h:mm:ss')}}</span>
    </div>
    <HelloWorld :toplegend="toplegend" :topgrid="topgrid"  :toptitle="toptitle" :topxAxis="topxAxis" :topyAxis="topyAxis" :topseries="topseries" :seclegend="seclegend" :secgrid="secgrid"  :sectitle="sectitle" :secxAxis="secxAxis" :secyAxis="secyAxis" :secseries="secseries" :thirdlegend="thirdlegend" :thirdgrid="thirdgrid"  :thirdtitle="thirdtitle" :thirdxAxis="thirdxAxis" :thirdyAxis="thirdyAxis" :thirdseries="thirdseries"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import date from 'moment'
export default {
  name: 'App',
  data(){
    return{
      date,
      toplegend:[
        {width: 582,left:140,bottom: 22 ,icon:"circle",
         textStyle: {color: "rgba(255, 255, 255, 1)",fontSize: 12},
         data:['港股通(沪)','港股通(深)','上交所A','深交所A','银行间','中金所','场外']
        },{
          width: 562,left:1100,bottom: 22,icon:"circle",itemGap:22,
          textStyle: {color: "rgba(255, 255, 255, 1)",fontSize: 12},
          data: ['指令笔数', '成交笔数', '委托笔数', '成交金额(百万元)', '净买入金额(百万元)']
      }],
      topgrid: {left: '57.5%',top:'17%',width: '40.5%', height: '60%'},
      toptitle: [{
            text: '各市场委托笔数占比',
            top:'6.5%',left: '7.2%',
            textStyle: {
                fontSize: 18,
                color : '#ffffff',
                lineHeight :24,
                width: 167,
                height: 18,

            }
        },{
            text: '各市场成交笔数占比',
            top:'6.5%',left: '28%',
            textStyle: {
                fontSize: 18,
                color : '#ffffff',
                lineHeight :24,
                width: 167,
                height: 18,
            }
        },{
            text: '交易场内-主动',
            top:'6.5%',left: '72.7%',
            textStyle: {
                fontSize: 18,
                color : '#ffffff',
                lineHeight :24,
                width: 167,
                height: 18,
            }
      }],
      topxAxis: [
          {
            axisLine: { 		
                lineStyle: { 			
                    type: 'solid',			
                    color: '#b1ddff', //左边线的颜色                        			
                    width: '1' //坐标线的宽度                    		
                }	
            },
            axisLabel: {
                textStyle: {color: '#b1ddff',},
                fontSize: 14,
                margin: 24
            },
            type: 'category',
            // axisTick: {show: true},
            data: ['港股通(深)', '港股通(沪)', '深交所A', '上交所']
          }
      ],
      topyAxis: [
                {
                axisLine: { 		
                    lineStyle: { 			
                        type: 'solid',			
                        color: '#b1ddff', //左边线的颜色                        			
                        width: '1' //坐标线的宽度                    		
                    }	
                },
                axisLabel: {textStyle: {color: '#b1ddff',},fontSize: 14,formatter: '{value} K',max: 30,min:0},
                splitLine: {
                    show: false
                },
                splitNumber: 3,
                type: 'value',
                data: ['10k', '周二', '周三', '周四', '周五', '周六', '周日']
            }
      ],
      topseries: [
          {
            type: 'pie',
            radius:  '100',
            center: ['12%', '54.8%'],
            data:[{name: '场外', value: 18},
                  {name: '上交所A', value: 12},
                  {name: '中金所', value: 7},
                  {name: '银行间', value: 5},
                  {name: '港股通(沪)', value: 4},
                  {name: '深交所A', value: 30},
                  {name: '港股通(深)', value: 20}],
            color: ["#43f177", "#ffe75f", "#f09641","#ff6161","#9a66e3", "#1461ce", "#2ad3ff"],
            labelLine: {show: false,length: 2},
            label:{formatter: '{c}%',fontSize: 18,color: "#fff"}
          },
          {
            type: 'pie',
            radius:  '100',
            center: ['33%', '54.8%'],
            data:[{name: '场外', value: 18},
                  {name: '上交所A', value: 12},
                  {name: '中金所', value: 7},
                  {name: '银行间', value: 5},
                  {name: '港股通(沪)', value: 4},
                  {name: '深交所A', value: 30},
                  {name: '港股通(深)', value: 20}],
            labelLine: {show: false,length: 2},
            label:{formatter: '{c}%',fontSize: 18,color: "#fff"},
            color: ["#43f177", "#ffe75f", "#f09641","#ff6161","#9a66e3", "#1461ce", "#2ad3ff"],
          },
          {
            name: '成交笔数',
            type: 'bar',
            barGap: 0,
            barCategoryGap: "40%",
            color: ['#ffe567'],
            data: [15.5, 15.5, 20.1, 21.7]
          },
          {
            name: '指令笔数',
            type: 'bar',
            color: ['#2ad3ff'],
            data: [10, 10, 17.4, 14.5]
          },
          {
            name: '委托笔数',
            type: 'bar',
            color: ['#ff6161'],
            data: [11.2, 11.2, 14.5,19.5]
          },
          {
            name: '成交金额(百万元)',
            type: 'bar',
            color: ['#0d51d5'],
            data: [15.2, 15, 22, 28.8]
          },
          {
            name: '净买入金额(百万元)',
            type: 'bar',
            color: ['#935ee5'],
            data: [26.8, 26.8, 12.2, 11.3]
          }
      ],
      seclegend:{width: 562,left:292,bottom: 41,icon:"circle",itemGap:22,
                textStyle: {color: "rgba(255, 255, 255, 1)",fontSize: 12},
                data: ['指令笔数', '成交笔数', '成交金额(亿元)', '委托笔数']
      },
      secgrid: {left: '13.82%',top:'23.5%',width: '75.2%', height: '53%'},
      sectitle:{
            text: '交易场外',
            top:'13%',left: '47%',
            textStyle: {
                fontSize: 18,
                color : '#ffffff',
                lineHeight :24,
                width: 167,
                height: 18,
            }
      },
      secxAxis: [
            {
            axisLine: { 		
                lineStyle: { 			
                    type: 'solid',			
                    color: '#b1ddff', //左边线的颜色                        			
                    width: '1' //坐标线的宽度                    		
                }	
            },
            axisLabel: {
                textStyle: {color: '#b1ddff',},
                fontSize: 14,
                margin: 24
            },
            type: 'category',
            // axisTick: {show: true},
            data: ['银行间', '深交所A', '场外','中金所','上交所A'],
          }
      ],
      secyAxis: [
                {
                axisLine: { 		
                    lineStyle: { 			
                        type: 'solid',			
                        color: '#b1ddff', //左边线的颜色                        			
                        width: '1' //坐标线的宽度                    		
                    }	
                },
                axisLabel: {textStyle: {color: '#b1ddff',},fontSize: 14,formatter: '{value} K',max: 30,min:0},
                splitLine: {
                    show: false
                },
                splitNumber: 3,
                type: 'value',
                data: ['10k', '周二', '周三', '周四', '周五', '周六', '周日']
            }
      ],
      secseries:[
          {
            name: '成交笔数',
            type: 'bar',
            barGap: 0,
            barCategoryGap: "50%",
            color: ['#ffe567'],
            data: [ 15.4, 20.5, 19.6,21.7,15.4]
          },{
            name: '指令笔数',
            type: 'bar',
            color: ['#2ad3ff'],
            data: [ 9.9, 17.4,17, 19.3,9.9]
          },{
            name: '委托笔数',
            type: 'bar',
            color: ['#ff6161'],
            data: [ 11.2, 14.6,16.2,19.5,11.2]
          },{
            name: '成交金额(亿元)',
            type: 'bar',
            color: ['#0d51d5'],
            data: [ 15, 22,22.7, 28.8,15]
          }
      ],
      thirdlegend:{width: 562,left:210,bottom: 41,icon:"circle",itemGap:22,
                   textStyle: {color: "rgba(255, 255, 255, 1)",fontSize: 12},
                   data: ['指令笔数', '成交笔数', '委托笔数', '成交金额(百万元)', '净买入金额(百万元)']
      },
      thirdgrid: {left: '13.82%',top:'23.5%',width: '75.2%', height: '53%'},
      thirdtitle:{
            text: '交易场内-被动',
            top:'13%',left: '42.2%',
            textStyle: {
                fontSize: 18,
                color : '#ffffff',
                lineHeight :24,
                width: 167,
                height: 18,
            }
      },
      thirdxAxis: [
          {
            axisLine: { 		
                lineStyle: { 			
                    type: 'solid',			
                    color: '#b1ddff', //左边线的颜色                        			
                    width: '1' //坐标线的宽度                    		
                }	
            },
            axisLabel: {
                textStyle: {color: '#b1ddff',},
                fontSize: 14,
                margin: 24
            },
            type: 'category',
            // axisTick: {show: true},
            data: ['港股通(沪)', '深交所A', '上交所'],
          }
      ],
      thirdyAxis: [
            {
                axisLine: { 		
                    lineStyle: { 			
                        type: 'solid',			
                        color: '#b1ddff', //左边线的颜色                        			
                        width: '1' //坐标线的宽度                    		
                    }	
                },
                axisLabel: {textStyle: {color: '#b1ddff',},fontSize: 14,formatter: '{value} K',max: 30,min:0},
                splitLine: {
                    show: false
                },
                splitNumber: 3,
                type: 'value',
                data: ['10k', '周二', '周三', '周四', '周五', '周六', '周日']
            }
      ],
      thirdseries:[
          {
            name: '成交笔数',
            type: 'bar',
            barGap: 0,
            barCategoryGap: "50%",
            color: ['#ffe567'],
            data: [ 15.5, 20.1, 21.7]
          },{
            name: '指令笔数',
            type: 'bar',
            color: ['#2ad3ff'],
            data: [ 10, 17.4, 14.5]
          },{
            name: '委托笔数',
            type: 'bar',
            color: ['#ff6161'],
            data: [ 11.2, 14.5,19.5]
          },{
            name: '成交金额(百万元)',
            type: 'bar',
            color: ['#0d51d5'],
            data: [ 15, 22, 28.8]
          },{
            name: '净买入金额(百万元)',
            type: 'bar',
            color: ['#935ee5'],
            data: [ 26.8, 12.2, 11.3]
          }
      ]

  }
  },
  components: {
    HelloWorld
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url(assets/南方基金大屏v背景图.jpg);

  width: 1920px;
  height: 1080px;
}
.header {
  height: 100px;
}
.title {
  height: 73px;
  font-family: SourceHanSansSC-Regular;
	font-size: 36px;
  font-weight: bold;
  letter-spacing: 3px;
  color: #65b9e9;
}
.Time {
  position:absolute;
  /* align-content: center; */
  margin-top: 32px;
  right: 30px;
  font-size: 30px;
  font-family: SourceHanSansSC-Regular;
  color: #92edfe;
}
</style>
