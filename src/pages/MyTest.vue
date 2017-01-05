<template>
  <main-layout>
    <p>my test...</p>
    <h1>商品列表</h1>
    <table class="car-table">
      <tr v-for="(car, index) in cars">
        <td>{{car.id}}</td>
        <td>{{car.trademark}}</td>
        <td>{{car.name}}</td>
        <td>{{car.price}}</td>
        <td>
          <button type="button" @click="delBook(index)">删除</button>
        </td>

      </tr>
    </table>
    <h2>添加商品</h2>
    <div>
      <div>
        <label>品牌</label>
        <input type="text" v-model="addcar.trademark">
      </div>
      <div>
        <label>型号</label>
        <input type="text" v-model="addcar.name">
      </div>
      <div>
        <label>价格</label>
        <input type="text" v-model="addcar.price">
      </div>
      <button type="button" @click="addCar">保存</button>
      <button type="button" @click="getCustomers">从远程取</button>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
    ready() {
        console.log(1);
    },
    data(){
      return {
        addcar:{},
        cars:[]
      }
    },
    methods:{
      addCar (){
        this.addcar.id = this.cars.length + 1;
        this.cars.push(this.addcar);
        this.addcar = {};
      },
      delBook(index){
        this.cars.splice(index, 1);
      },
      loadData (){
        this.$http.jsonp('cars.json').then( function(response) {
          console.log(response);
        }).catch(function(response) {
          console.log(response);
        })
      },
      getCustomers: function() {
        var resource = this.$resource('cars.json');
        var vm = this;

        resource.get()
          .then((response) => {
            console.log(response.data);
          })
          .catch(function(response) {
            console.log(response)
          })
      }
    },
    components: {
      MainLayout
    }
  }


</script>
<style>
  .car-table{
    width:100%
  }

</style>
