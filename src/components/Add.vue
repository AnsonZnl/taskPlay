<template>
  <div class="addMian">
    <h3>{{ msg }}</h3>
    <p><input v-model="list.text" placeholder="名称" /></p>
    <p><input type="number" v-model="list.value" placeholder="成就点数"></p>
    <p><input type="number" v-model="list.second" placeholder="完成次数"></p>
    <p @click="showBox">选择类型 :{{ list.taskClass }}</p>
    <van-popup v-model="show" position="" :overlay="true">
      <h3>选择类型</h3>
      <van-radio-group class="showBox" v-model="radio">
        <van-radio @click="showList(item.text)" v-for="item in taskClass" :name="item.name" :key="item.name">{{ item.text }}</van-radio>
      </van-radio-group>
    </van-popup>
    <br>
    <van-button @click="submit" type="primary" size="large">完成</van-button>
  </div>
</template>

<script>
export default {
  name: 'Add',
  data () {
    return {
      msg: '编辑任务',
      selected: '',
      radio: '1',
      show: false,
      taskClass:[
        {name: 1,text: '当天任务'},
        {name: 2,text: '每日任务'},
        {name: 3,text: '每周任务'},
        {name: 4,text: '每月任务'},
        {name: 5,text: '一次任务'},
        {name: 6,text: '重复任务'},
      ],
      list: {isOk:false, text: '', value: '', tag: '', second: '', taskClass:'请选择',},
    }
  },
  methods:{
    showBox(){
      this.show= !this.show;
    },
    showList(text){
      this.list.taskClass= text;
      this.show= !this.show
    },
    submit(){
      console.log(this.list)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.showBox{
  padding: 0;
}
.addMian{
  padding: 0 10px;
}
.addMian input{
  width: 100%;
}
.addMian p{
  text-align: left;
}
.van-radio{
  height: 30px;
  padding: 5px 30px;
  font-size: 17px;
  border-bottom: rgb(37, 68, 134) solid 1px;
}
.van-radio__label{
  margin-left: 40px;
}
</style>
