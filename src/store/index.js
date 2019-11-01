import Vue from "vue";
import Vuex from "vuex";
import story from "./story";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    story
  }
});
