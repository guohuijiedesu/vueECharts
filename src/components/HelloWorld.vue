<template>
  <div class="hello">
    <!-- <div ref="firstvueChart" :style="{width: '720px', height: '300px'}"></div> -->
    <div class="main" ref="topChart" :style="{width: '1780px', height: '450px'}"></div>
    <div class="second" ref="secondBar" :style="{width: '960px', height: '510px'}"></div>
    <div class="third" ref="thirdBar" :style="{width: '960px', height: '510px'}"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:['firstdata','secdata','topdataset','firstlegendname','secdataset','thirddataset',],
  // props: {
  //   legends:{
  //     type:Array,
  //     default:()=>[]
  //   }
  //   // legends:Array,
  //   // values:Array
  // },
  mounted(){
    this.drawLine();
  },
  watch: {
    firstdata() {
      this.drawLine();
    },
    secdata() {
      this.drawLine();
    },
    topdataset() {
      this.drawLine();
    },
    secdataset() {
      this.drawLine();
    },
    thirddataset() {
      this.drawLine();
    }
  },
  methods: {
    drawLine(){
      let topChart =this.$echarts.init(this.$refs.topChart)
      topChart.setOption({
          legend:[
              {width: 582,left:140,bottom: 10 ,icon:"circle",
              textStyle: {color: "rgba(255, 255, 255, 1)",fontSize: 12},
              // data:['港股通(沪)','港股通(深)','上交所A','深交所A','银行间','中金所','场外']
              // data:this.firstpiename
              },{
              width: 562,left:1100,bottom: 22,icon:"circle",itemGap:22,
              textStyle: {color: "rgba(255, 255, 255, 1)",fontSize: 12},
              // data: ['指令笔数', '成交笔数', '委托笔数', '成交金额(百万元)', '净买入金额(百万元)']
              data: this.firstlegendname
          }],
          grid: {left: '57.5%',top:'17%',width: '40.5%', height: '60%'},
          title: [{
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
          yAxis: [
                    {
                    axisLine: { 		
                        lineStyle: { 			
                            type: 'solid',			
                            color: '#b1ddff', //左边线的颜色                        			
                            width: '1' //坐标线的宽度                    		
                        }	
                    },
                    axisLabel: {textStyle: {color: '#b1ddff',},fontSize: 14,formatter:function(value){ var showValue=value/1000;return showValue+'K';}},
                    splitLine: {
                        show: false
                    },
                    splitNumber: 3,
                    type: 'value'
                }
          ],
          xAxis: [
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
                // data: ['港股通(深)', '港股通(沪)', '深交所A', '上交所']
              }
          ],
          series: [
              {
                type: 'pie',
                radius:  '100',
                center: ['12%', '54.8%'],
                data:this.firstdata,
                color: ["#43f177", "#ffe75f", "#f09641","#ff6161","#9a66e3", "#1461ce", "#2ad3ff"],
                labelLine: {show: false,length: 2},
                label:{formatter: '{d}%',fontSize: 18,color: "#fff"}
              },
              {
                type: 'pie',
                radius:  '100',
                center: ['33%', '54.8%'],
                data:this.secdata,
                labelLine: {show: false,length: 2},
                label:{formatter: '{d}%',fontSize: 18,color: "#fff"},
                color: ["#43f177", "#ffe75f", "#f09641","#ff6161","#9a66e3", "#1461ce", "#2ad3ff"],
              },
              {
                // name: '成交笔数',
                type: 'bar',
                barGap: 0,
                barCategoryGap: "40%",
                color: ['#ffe567'],
                // data: [15.5, 15.5, 20.1, 21.7]
                seriesLayoutBy:'row'
              },
              {
                // name: '指令笔数',
                type: 'bar',
                color: ['#2ad3ff'],
                // data: [10, 10, 17.4, 14.5]
                seriesLayoutBy:'row'
              },
              {
                // name: '委托笔数',
                type: 'bar',
                color: ['#ff6161'],
                // data: [11.2, 11.2, 14.5,19.5]
                seriesLayoutBy:'row'
              },
              {
                // name: '成交金额(百万元)',
                type: 'bar',
                color: ['#0d51d5'],
                // data: [15.2, 15, 22, 28.8]
                seriesLayoutBy:'row'
              },
              {
                // name: '净买入金额(百万元)',
                type: 'bar',
                color: ['#935ee5'],
                // data: [26.8, 26.8, 12.2, 11.3]
                seriesLayoutBy:'row'
              }
          ],
          dataset:{ source:this.topdataset}
      });
      let thirdBar =this.$echarts.init(this.$refs.thirdBar)
      thirdBar.setOption({
          legend:{width: 562,left:216,bottom: 41,icon:"circle",itemGap:22,
                  textStyle: {color: "rgba(255, 255, 255, 1)",fontSize: 12},
                  // data: ['指令笔数', '成交笔数', '委托笔数', '成交金额(万元)', '净买入金额(万元)']
                  
          },
          grid: {left: '13.82%',top:'23.5%',width: '75.2%', height: '53%'},
          title:{
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
          yAxis: [
              {
                  axisLine: { 		
                      lineStyle: { 			
                          type: 'solid',			
                          color: '#b1ddff', //左边线的颜色                        			
                          width: '1' //坐标线的宽度                    		
                      }	
                  },
                  axisLabel: {textStyle: {color: '#b1ddff',},fontSize: 14,formatter:function(value){ var showValue=value/1000;return showValue+'K';}},
                  splitLine: {
                      show: false
                  },
                  splitNumber: 3,
                  type: 'value'
              }
          ],
          xAxis: [
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
                // data: ['港股通(沪)', '深交所A', '上交所'],
              }
          ],
          series:[
              {
                // name: '成交笔数',
                type: 'bar',
                barGap: 0,
                barCategoryGap: "50%",
                color: ['#ffe567'],
                // data: [ 15.5, 20.1, 21.7]
                seriesLayoutBy:'row'
              },{
                // name: '指令笔数',
                type: 'bar',
                color: ['#2ad3ff'],
                // data: [ 10, 17.4, 14.5]
                seriesLayoutBy:'row'
              },{
                // name: '委托笔数',
                type: 'bar',
                color: ['#ff6161'],
                // data: [ 11.2, 14.5,19.5]
                seriesLayoutBy:'row'
              },{
                // name: '成交金额(万元)',
                type: 'bar',
                color: ['#0d51d5'],
                // data: [ 15, 22, 28.8]
                seriesLayoutBy:'row'
              },{
                // name: '净买入金额(万元)',
                type: 'bar',
                color: ['#935ee5'],
                // data: [ 26.8, 12.2, 11.3]
                seriesLayoutBy:'row'
              }
          ],
          dataset:{ source: this.thirddataset}
      });
      let secondBar =this.$echarts.init(this.$refs.secondBar)
      secondBar.setOption({
            legend:{width: 562,left:292,bottom: 41,icon:"circle",itemGap:22,
                textStyle: {color: "rgba(255, 255, 255, 1)",fontSize: 12},
                // data: ['指令笔数', '成交笔数', '成交金额(亿元)', '委托笔数']
                // data: []
            },
            grid: {left: '13.82%',top:'23.5%',width: '75.2%', height: '53%'},
            title:{
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
            yAxis: [
                      {
                      axisLine: { 		
                          lineStyle: { 			
                              type: 'solid',			
                              color: '#b1ddff', //左边线的颜色                        			
                              width: '1' //坐标线的宽度                    		
                          }	
                      },
                      axisLabel: {textStyle: {color: '#b1ddff',},fontSize: 14,formatter:function(value){ var showValue=value/1000;return showValue+'K';}},
                      splitLine: {
                          show: false
                      },
                      splitNumber: 3,
                      type: 'value',
                      data: ['10k', '周二', '周三', '周四', '周五', '周六', '周日']
                  }
            ],
            xAxis: [
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
                  // data: ['银行间', '深交所A', '场外','中金所','上交所A'],
                }
            ],
            series:[
                {
                  // name: '成交笔数',
                  type: 'bar',
                  barGap: 0,
                  barCategoryGap: "50%",
                  color: ['#ffe567'],
                  // data: [ 15.4, 20.5, 19.6,21.7,15.4]
                  seriesLayoutBy:'row'
                },{
                  // name: '指令笔数',
                  type: 'bar',
                  color: ['#2ad3ff'],
                  // data: [ 9.9, 17.4,17, 19.3,9.9]
                  seriesLayoutBy:'row'
                },{
                  // name: '委托笔数',
                  type: 'bar',
                  color: ['#ff6161'],
                  // data: [ 11.2, 14.6,16.2,19.5,11.2]
                  seriesLayoutBy:'row'
                },{
                  // name: '成交金额(亿元)',
                  type: 'bar',
                  color: ['#0d51d5'],
                  // data: [ 15, 22,22.7, 28.8,15]
                  seriesLayoutBy:'row'
                }
            ],
            dataset:{ source: this.secdataset}
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  /* background-color: brown; */
  margin:0 auto;
}
.second {
  /* background-color: brown; */
  float: left;
}
.third {
  /* background-color: blue; */
  float: right;
}
</style>
