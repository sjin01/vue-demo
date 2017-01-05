import Vue from 'vue'
import routes from './routes'

Vue.use(require('vue-resource'));

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})


window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
