import { useIntersectionObserver } from '@vueuse/core'

export const imgLazyPlugin = {
  install(app) {
    app.directive('img-lazy', (el, binding) => {
      const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
        if (isIntersecting) {
          el.src = binding.value
          stop()
        }
      })
    })
  }
}
