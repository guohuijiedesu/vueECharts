<template>
  <div id="app">
    <div class="header">
    <span class="title">南方基金大屏</span>
    <span class="Time">{{time}}</span>
    </div>
    <HelloWorld :firstdata="firstdata" :secdata="secdata" :topdataset="topdataset" :firstlegendname="firstlegendname" :secdataset="secdataset" :thirddataset="thirddataset"  />
  </div>
</template>

<script scoped>
import HelloWorld from './components/HelloWorld.vue'
import date from 'moment'
import {getPieOne,getPieTwo} from "./api/pie"
import {getBarOne,getBarTwo,getBarThree} from "./api/bar"

export default {
  name: 'App',
  data(){
    return{
      date,
      time:undefined,
      timer:"",
      firstdata:[],
      secdata:[],
      topdataset:[],
      firstlegendname:[],
      secdataset:[],
      thirddataset:[]
      // firstdata:[{name: '场外', value: 18},
      //                 {name: '上交所A', value: 12},
      //                 {name: '中金所', value: 7},
      //                 {name: '银行间', value: 5},
      //                 {name: '港股通(沪)', value: 4},
      //                 {name: '深交所A', value: 30},
      //                 {name: '港股通(深)', value: 20}],
      // secdata:[{name: '场外', value: 18},
      //                 {name: '上交所A', value: 12},
      //                 {name: '中金所', value: 7},
      //                 {name: '银行间', value: 5},
      //                 {name: '港股通(沪)', value: 4},
      //                 {name: '深交所A', value: 30},
      //                 {name: '港股通(深)', value: 20}],
      // topdataset:  [
      //           ['product', '成交笔数', '指令笔数', '委托笔数', '成交金额(百万元)', '净买入金额(百万元)'],
      //           ['港股通(深)', '15500', '10000', '11200', '15200', '26800'],
      //           ['港股通(沪)', '15500', '10000', '11200', '15000', '26800'],
      //           ['深交所A', '20100', '17400', '14500', '22000', ' 12200'],
      //           ['上交所', '21700', '14500', '19500', '28800', ' 11300'] 
      // ],
      // secdataset:  [
      //       ['product', '成交笔数', '指令笔数', '委托笔数', '成交金额(亿元)'],
      //       ['银行间', '15400', '9900', '11200', '15000'],
      //       ['深交所A', '20500', '17400', '14600', '22000'],
      //       ['场外', '19600', '17000', '16200', '22700'],
      //       ['中金所', '21700', '19300', '19500', '28800'],
      //       ['上交所A', '15400', '9900', '11200', '15000'] 
      // ],
      // thirddataset: [
      //           ['product', '成交笔数', '指令笔数', '委托笔数', '成交金额(万元)', '净买入金额(万元)'],
      //           ['港股通(沪)', '15500', '10000', '11200', '15000', '26800'],
      //           ['深交所A', '20100', '17400', '14500', '22000', '12200'],
      //           ['上交所', '21700', '14500', '19500', '28800', ' 11300'] 
      // ]
      
      
    }
  },
  components: {
    HelloWorld
  },
  destroyed(){
    clearInterval(this.timer);
    this.timer=null;
  },
  created(){
   this.timer=setInterval(()=>{
      this.time=date().format("YYYY-MM-DD h:mm:ss");
    },1000);
    getPieOne().then((res)=>{
      this.firstdata=res.data.data;
      // var firstpiename=[];
      // res.data.data.forEach(function(values){
      //   firstpiename.push(values.name);
      // });
    });
    getPieTwo().then((res)=>{
      this.secdata=res.data.data;
    });
    getBarOne().then((res)=>{
      console.log(res.data.dataset)
      this.topdataset=res.data.dataset;
      var firstlegendname=[];
      res.data.dataset.forEach(function(values){
        firstlegendname.push(values[0]);
      });
      this.firstlegendname=firstlegendname;
      console.log(firstlegendname)
    });
    getBarTwo().then((res)=>{
      this.secdataset=res.data.dataset;
    });
    getBarThree().then((res)=>{
      this.thirddataset=res.data.dataset;
    });
  },

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
