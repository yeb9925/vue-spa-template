import Vue from 'vue'
import router from './router'

new Vue({
	el: '#app',
	router,
	render: h => h(require('./App.vue').default)
})
