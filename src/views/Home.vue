<template>
  <div class="home">
    <div id="nav">
      <img src="../assets/logo.png" width="128" height="128" />
      <h1 id="title">超级课程表活动列表</h1>
      <div v-for="(item,index) in nav" :key="index">
        <br />
        <router-link :to="item.to" class="nav-1">{{item.name}}</router-link>
      </div>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import { nav } from "@/router/menu";

export default {
  name: "home",
  data() {
    return {
      nav
    };
  }
  // components: {
  //   HelloWorld
  // }
};
</script>


<style lang="scss" scoped>
#title {
  color: #11aff1;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #11aff1;
}
.nav-1 {
  display: flex;
  justify-content: center;
}
</style>