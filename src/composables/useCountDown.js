import { dayjs } from 'element-plus'

export const useCountDown = () => {
  let timer = ref(null)
  const time = ref(0)
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))

  const start = curTime => {
    time.value = curTime
    timer = setInterval(() => {
      time.value--
      if (timer.value <= 0) clearInterval(timer)
    }, 1000)
  }

  onUnmounted(() => timer && clearInterval(timer))

  return { start, formatTime }
}
