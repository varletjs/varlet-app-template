import { mount as _mount, MountingOptions } from '@vue/test-utils'

export function mount(originalComponent: any, options?: MountingOptions<any> & Record<string, any>) {
  options = {
    global: {
      mocks: {
        $t: () => 'mock i18n text'
      }
    },
    ...(options ?? {})
  }

  return _mount(originalComponent, options)
}
