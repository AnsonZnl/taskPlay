// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { 
  Button, 
  Cell,
  NavBar, 
  Tabbar, 
  TabbarItem, 
  Toast, 
  Tab, 
  Tabs,
  Checkbox, 
  CheckboxGroup,
  Row, 
  Col,
  Field,
  RadioGroup, 
  Radio,
  Popup,
  Icon
} from 'vant';

Vue.use(Button);
Vue.use(Cell);
Vue.use(NavBar);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Toast);
Vue.use(Tab).use(Tabs);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(Row).use(Col);
Vue.use(Field);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Popup);
Vue.use(Icon);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
