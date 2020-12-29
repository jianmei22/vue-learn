<template>
  <el-menu class="main-menu layout-wrap" style="border: none" >
    <el-menu-item v-for="(item,index) in menuData" :key="index" class="item-menu" @click="itemTouch(item.name)">
      {{item.name}}
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "SideNavBar",
  data() {
    return {
      selectItem:'',
      menuData:[
        {name:'dashboard'},
        {name:'charts'},
        {name:'tables'},
      ]
    }
  },
  mounted() {
    this.itemTouch()
  },
  methods: {
    itemTouch(param){
      this.selectItem = param
    }
  }
}
</script>

<style scoped lang="scss">
.main-menu{
  display: flex;
  .item-menu{
    padding: 10px;
    margin: 10px;
    color:aliceblue;
  }
  .item-menu:focus,.item-menu:hover,.item-menu:visited,.item-menu:active{
    background: #308eb3;
  }
}
/deep/.el-menu-item:focus{
  border: none !important;
}
</style>
