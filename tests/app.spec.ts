import App from '@/App.vue'
import { mount } from './utils'
import { expect, it } from 'vitest'

it('test App.vue mount', () => {
  const wrapper = mount(App)

  expect(wrapper.html()).toMatchSnapshot()
})
