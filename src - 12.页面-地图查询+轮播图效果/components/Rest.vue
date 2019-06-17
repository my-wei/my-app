<template>
    <div class="container">
       <div id="container1"></div>
       <div id="panel"></div>
       <p>
           <input type="text" v-model="info">
           <button @click="search">搜索</button>   
       </p>
    </div>
</template>

<script>
    export default {
      name:'Rest',
      data(){
        return{
          info:''  
        }  
      },
      mounted() {
        this.getMap()
      },
      methods:{
        getMap(){
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
        var placeSearch = new AMap.PlaceSearch({ 
            pageSize: 5, // 单页显示结果条数
            pageIndex: 1, // 页码
            city: "010", // 兴趣点城市
            citylimit: true,  //是否强制限制在设置的城市内搜索
            map: map, // 展现结果的地图实例
            panel: "panel", // 结果列表将在此容器中进行展示。
            autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        });
        //关键字查询
        placeSearch.search('必胜客')
        })
        },
        search(){
           var that = this
           var map = new AMap.Map('container1', {
            zoom:13,//级别
            center: [116.397428, 39.90923],//中心点坐标
            viewMode:'3D'//使用3D视图
           });
            AMap.service(["AMap.PlaceSearch"], function() {
        //构造地点查询类
           var placeSearch = new AMap.PlaceSearch({ 
                pageSize: 5, // 单页显示结果条数
                pageIndex: 1, // 页码
                city: "010", // 兴趣点城市
                citylimit: true,  //是否强制限制在设置的城市内搜索
                map: map, // 展现结果的地图实例
                panel: "panel", // 结果列表将在此容器中进行展示。
                autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
            });
            //关键字查询
            placeSearch.search(that.info)
            })  
         }   
      },
    }
</script>

<style scoped>
   #container1 {width:800px; height: 500px;position: absolute;left: 400px;top:200px; }
   #panel {
            position: absolute;
            background-color: white;
            max-height: 80%;
            overflow-y: auto;
            top: 200px;
            left: 120px;
            width: 280px;
    }  
</style>