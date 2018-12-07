<template>
  <div>
    <van-tabs v-model="active" swipeable color="#1989fa">
      <van-tab title="普通任务">
        <div class="task-main">
          <div v-if= "list1.length == 0 ">
            <h2>{{ emptyTitle }}</h2>
            <p>{{ emptyText }}</p>
          </div>
          <ul>
            <li v-for="index1 in list1" :key="index1.value" @click="listChange(list1)">
              <van-row>
                <van-col span="8"><van-checkbox v-model="index1.isOk" checked-color="#4b0">{{ index1.text }}</van-checkbox></van-col>
                <van-col span="8"> 0 / {{ index1.second }}</van-col>
                <van-col span="8"> + {{ index1.value }}</van-col>
              </van-row>
            </li>
          </ul>
        </div>
        <van-row class="mian-footer" v-if="list1.length !== 0">
          <van-col span='12'>
            <van-checkbox v-model="AllElection" class="ml20">
              <div v-on:click="allChange(AllElection)">全选</div>
            </van-checkbox>
          </van-col>
          <van-col span='12' to="/add">
            <router-link class="addA" to="/add" >
               <van-icon class="addIcon" :name="addIconName" :style="tranform"/>
            </router-link>
          </van-col>
        </van-row>
    </van-tab>
      <van-tab title="每日任务">
        <div class="task-main">
          <div v-if="true">
            <h2>{{ emptyTitle }}</h2>
            <p>{{ emptyText }}</p>
          </div>
        </div>
        </van-tab>
      <van-tab title="每周任务">
        <div class="task-main">
          <div v-if="true">
            <h2>{{ emptyTitle }}</h2>
            <p>{{ emptyText }}</p>
          </div>
        </div>
        </van-tab>
      <van-tab title="每月任务">
        <div class="task-main">
          <div v-if="true">
            <h2>{{ emptyTitle }}</h2>
            <p>{{ emptyText }}</p>
          </div>
        </div>
        </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'Task',
  data () {
    return {
      active:0,
      msg: 'Hello Task',
      emptyTitle: '无任务',
      emptyText: 'Yesterday,you said tomorrow.',
      addText:'点击右上角的“+”号，添加任务',
      list1:[
        {isOk:false, text: '跑步', value: 2, tag: '运动', second: 1},
        {isOk:false, text: '打篮球', value: 5, tag: '运动', second: 1},
        {isOk:false, text: '跳高', value: 3, tag: '运动', second: 1},
        {isOk:false, text: '踢足球', value: 4, tag: '运动', second: 1},
        {isOk:false, text: '骑马', value: 6, tag: '运动', second: 1}
      ],
      total: 30,
      AllElection: false,
      addIconName: "cross",
      tranform: "transform: rotate(-45deg);"
    }
  },
  methods:{
    allChange (AllElection){
      if(AllElection){
        for(var i=0;i<this.list1.length;i++){
          this.list1[i].isOk= false;
        }
      }else{
        for(var i=0;i<this.list1.length;i++){
          this.list1[i].isOk= true;
        }
      }
    },
    listChange(list){
      for(var i=0;i<list.length;i++){
        if(list[i].isOk === true){
           this.addIconName = "success";
           this.tranform = '';
        }
      };
      

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
  display: block;
  padding: 10px 0;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.ml20{
  margin-left: 20px;
}
.task-main{
  height: 79vh;
  margin: 0 10px 0 10px;
}
.list-value{
  display: inline-block;
}
.van-checkbox{
  text-align: left;
}
van-tab{
  position: relative;
}

.mian-footer{
  position:absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
} 
.addA{
  display: block;
  margin: auto;
  width: 70px;
  height: 50px;
}



</style>
