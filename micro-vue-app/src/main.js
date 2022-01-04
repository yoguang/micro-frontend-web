import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


let instance = null

function render (props = {}) {
  const { container } = props

  instance = new Vue({
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap (props) {
  console.log('[vue] vue app bootstrap: ', props)
}
export async function mount (props) {
  console.log('[vue] vue app mount: ', props)
  props.setLoading(false);
  props.onGlobalStateChange((state, prv) => {
    console.log('onGlobalStateChange---->', state, prv);
  });
  render(props)
}
export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
