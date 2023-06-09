import Mock from 'mockjs'

Mock.setup({
  timeout: 3000
})

const Random = Mock.Random

const userList = () => {
  const arr = []
  for (let i = 0; i < 20; i++) {
    const obj = {
      id: i + 1,
      name: Random.cname(),
      age: Random.integer(1, 99),
      address: Random.county(true),
      birthday: Random.date() + ' ' + Random.time(),
      photo: Random.dataImage('300x250', 'mock的图片')
    }
    arr.push(obj)
  }
  return {
    code: 200,
    data: arr,
    total: 20
  }
}

Mock.mock('/api/user/list', 'post', userList)
