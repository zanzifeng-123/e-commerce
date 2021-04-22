import Vue from 'vue'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import {CH} from '../lang/ch'
import {EG} from '../lang/eg'
import getters from './getters'

Vue.use(VueI18n);
Vue.use(Vuex);

const mod = require.context('./modules',true,/\.js$/)
const modules= mod.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')// set './app.js' => 'app'
  const value = mod(modulePath)
  modules[moduleName] = value.default//{'app':文件内容}
  return modules
}, {})

export const store =new Vuex.Store({
  modules,
  getters,
})

const messages={
  eg:EG,
  ch:CH
}
export const i18n = new VueI18n({
  locale: store.getters.getLange, // 设置语言环境
  messages,
})
