<template>
  <div class="container">
    <div class="box">
      <p class="clearfix">
        <span style="float:left;">城市选择:</span>
        <city-selector
          class="city-selector  abc"
          field="city"
          placeholder="请选择城市"
          :city-list="cityList"
          v-model="cityId"
        ></city-selector>
      </p>
      <p class="restaurant">
        餐厅关键字：
        <input type="text" placeholder="输入餐厅或地址名称" v-model="array">
        <span class="query" @click="chaxun1()">查询</span>
      </p>
      <img src="../../static/imgs/aaa.jpg" alt>
      <div class="textBox">
        <transition name="fade">
          <p class="text" :key="text.id">{{text.val}}</p>
        </transition>
      </div>
    </div>
    <div id="container1"></div>
    <div id="panel"></div>
  </div>
</template>

<script>
import { citySelector } from "vue2-city-selector";
import cityList from "china-city-data";
export default {
  name: "Rest",
  data() {
    return {
      textArr: [
        "走过路过不要错过",
        "两块钱你买不到吃亏",
        "两块钱你买不到上当",
        "两块钱你什么也买不到",
        "你个low比",
        "全场起价十元"
      ],
      number: 0,
      array: "",
     cityId: '',
          cityList  
    };
  },
  mounted() {
    this.getMap();
    this.run2();
  },
  watch: {
    cityId() {
      console.log(this.cityId);
      if (
        this.cityId == "110100" ||
        this.cityId == "120100" ||
        this.cityId == "310100"
      ) {
        var id = this.cityId.replace(/100$/, "000");
      } else {
        var id = this.cityId;
      }
      this.placeSearch.setCity(id);
      this.chaxun1("必胜客");
    }
  },
  methods: {
    chaxun1(value) {
      if(value){
               this.placeSearch.search(value) 
            }else{
            //关键字查询
            this.placeSearch.search(this.array)
            }
    },
    getMap() {
      var that = this  
        var map = new AMap.Map('container1', {
            zoom:13,//级别
            center: [116.397428, 39.90923],//中心点坐标
            viewMode:'3D'//使用3D视图
        });

        AMap.plugin([
            'AMap.ControlBar',
        ], function(){
            // 添加 3D 罗盘控制
            map.addControl(new AMap.ControlBar());
        });
        AMap.service(["AMap.PlaceSearch"], function() {
        //构造地点查询类
        that.placeSearch = new AMap.PlaceSearch({ 
            pageSize: 5, // 单页显示结果条数
            pageIndex: 1, // 页码
            city: "010", // 兴趣点城市
            citylimit: true,  //是否强制限制在设置的城市内搜索
            map: map, // 展现结果的地图实例
            panel: "panel", // 结果列表将在此容器中进行展示。
            autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        });
        //关键字查询
        that.placeSearch.search('必胜客')
        })
    } ,
    run2() {
      var timer1 = setInterval(() => {
        if (this.number == this.textArr.length - 1) {
          this.number = 0;
        } else {
          this.number += 1;
        }
      }, 1500);
    }
  },
  computed: {
    text() {
      return {
        id: this.number,
        val: this.textArr[this.number]
      };
    }
  }
};
</script>

<style scoped>
#container1 {
  width: 840px;
  height: 500px;
  position: absolute;
  left: 680px;
  top: 200px;
}
#panel {
  position: absolute;
  background-color: white;
  max-height: 80%;
  overflow-y: auto;
  top: 200px;
  left: 400px;
  width: 280px;
}
.box {
  width: 1110px;
  height: 150px;
  border: 1px solid #cccccc;
  position: relative;
}
input {
  width: 270px;
  height: 28px;
  border-radius: 15px;
  outline: none;
}
.query {
  display: inline-block;
  text-align: center;
  width: 160px;
  height: 28px;
  border: 1px solid rgb(156, 106, 66);
  border-radius: 15px;
}
.city {
  color: rgb(111, 42, 11);
  font-weight: bold;
  margin-top: 20px;
}
.city a {
  margin-left: 30px;
}
.restaurant {
  color: rgb(111, 42, 11);
  font-weight: bold;
}
img {
  position: absolute;
  top: 0;
  left: 600px;
}
.textBox {
  /* background: purple; */
  color: black;
  font-size: 20px;
  width: 200px;
  height: 40px;
  overflow: hidden;
  line-height: 40px;
  text-align: center;
  position: absolute;
  top: 55px;
  left: 800px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s linear;
}
.fade-enter {
  opacity: 0;
  transform: translateY(20px) scale(1);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.7);
}
.abc{
    width: 80px;
    /* text-align: center; */
}
</style>