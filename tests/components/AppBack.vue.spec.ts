import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import AppBack from '@/components/AppBack.vue'

it('test AppBack mount', () => {
  const wrapper = mount(AppBack)

  expect(wrapper.html()).toMatchSnapshot()
})
