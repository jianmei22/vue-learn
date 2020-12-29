<template>
  <div>
    <!--    头部区域-->
    <header-top/>
    <!--    菜单部分-->
    <side-nav-bar class="left-bar"/>
    <!--    动态组件切换部分-->
    <component :is="currentPage"/>
  </div>
</template>

<script>
import SideNavBar from "./components/SideNavBar";
import HeaderTop from "./components/HeaderTop";

export default {
  name: "Dashboard",
  components: {HeaderTop, SideNavBar},
  data() {
    return {
      currentPage: ''
    }
  }
}
</script>

<style scoped lang="scss">
.body-container {
  display: flex;
  flex-direction: row;

  .left-bar {
    height: 200px;
    padding: 10px;
  }

  .main-container {
    flex: 1;
    padding: 10px;
  }
}

</style>
