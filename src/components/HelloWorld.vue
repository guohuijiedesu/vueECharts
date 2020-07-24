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
  props:['toplegend','topgrid','toptitle','topxAxis','topyAxis','topseries','seclegend','secgrid','sectitle','secxAxis','secyAxis','secseries','thirdlegend','thirdgrid','thirdtitle','thirdxAxis','thirdyAxis','thirdseries'],
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
  methods: {
 drawLine(){
      let topChart =this.$echarts.init(this.$refs.topChart)
      topChart.setOption({
        xAxis:this.topxAxis,
        yAxis:this.topyAxis,
        grid:this.topgrid,
        title:this.toptitle,
        series:this.topseries,
        legend:this.toplegend, 
      });
      let thirdBar =this.$echarts.init(this.$refs.thirdBar)
      thirdBar.setOption({
        xAxis:this.thirdxAxis,
        yAxis:this.thirdyAxis,
        grid:this.thirdgrid,
        title:this.thirdtitle,
        series:this.thirdseries,
        legend:this.thirdlegend, 
      });
      let secondBar =this.$echarts.init(this.$refs.secondBar)
      secondBar.setOption({
        xAxis:this.secxAxis,
        yAxis:this.secyAxis,
        grid:this.secgrid,
        title:this.sectitle,
        series:this.secseries,
        legend:this.seclegend,
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
