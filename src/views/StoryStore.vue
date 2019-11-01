<!-- 故事杂货铺 -->
<template>
  <div id="story-store" ref="wrapper">
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima amet, natus nulla culpa quibusdam architecto velit commodi neque necessitatibus. Natus praesentium odio omnis? Commodi veritatis facere libero suscipit quia illo.</h1>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    setTimeout(() => {
      this._initScroll();
    }, 20);
  },
  computed: {},
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      // better-scroll的初始化
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        scrollX: false,
        scrollY: true,
        eventPassthrough: "vertical"
      });
    }
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>