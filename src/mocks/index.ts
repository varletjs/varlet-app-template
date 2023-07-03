import Mock from 'mockjs'

import.meta.glob('./apis/*.ts', {
  eager: true
})

Mock.setup({
  timeout: 300
})
