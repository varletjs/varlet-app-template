import Mock from 'mockjs'

import.meta.glob('./apis/*.ts', {
  eager: true
})

Mock.setup({
  timeout: 300
})

// uploadProgress and downloadProgress cannot mock real values
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const xhr = new window._XMLHttpRequest()
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.XMLHttpRequest.prototype.upload = xhr.upload
