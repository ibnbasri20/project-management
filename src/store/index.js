import Vue from "vue";
import Vuex from "vuex";
import quran from './Quran/index'
Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
	 quran,
  }
});
