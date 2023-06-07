import Mock from 'mockjs'

const { Random } = Mock

Mock.mock('/api/user', 'get', () => {
  const data = Array.from({ length: 20 }, (_, index) => {
    return {
      id: index + 1,
      name: Random.cname()
    }
  })

  return {
    code: 200,
    data,
    message: 'success'
  }
})
