import Vue from 'vue';
import Vuex from 'vuex';
import { selectedProvider } from '../config/providers.config';
import taskArea from './task-area.module';
import resultArea from './result-area.module';
import scoreArea from './score-area.module';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { selectedProvider },
  mutations: {},
  actions: {},
  getters: {},
  modules: { taskArea, resultArea, scoreArea },
});
