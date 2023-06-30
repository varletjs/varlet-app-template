import AppBack from '@/components/AppBack.vue'
import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'

it('test AppBack mount', () => {
  const wrapper = mount(AppBack)

  expect(wrapper.html()).toMatchSnapshot()
})
