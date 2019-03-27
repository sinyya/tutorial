import Vue from 'vue'
import App from './App.vue'
import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.use( CKEditor );

new Vue({
  el: '#app',
  render: h => h(App)
})
