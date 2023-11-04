import { defineComponent } from 'vue'

export default defineComponent(() => {
  return () => {
    return (
      <div>
        <div>Test</div>
        <button>
          测试
          <p>撒旦撒</p>
          <a href="/">asds</a>
        </button>
      </div>
    )
  }
})

export const Comp = defineComponent(() => {
  return () => {
    return (
      <div>
        测试
      </div>
    )
  }
})
