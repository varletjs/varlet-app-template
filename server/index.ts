const fs = require('fs')
const path = require('path')

const Koa = require('koa')

;(async () => {
  const app = new Koa()

  app.use(async (ctx) => {
    ctx.body = 'hello data'
  })

  const port = 3000
  app.listen(port, () => {
    console.log(`server is listening in ${port}`)
  })
})()
