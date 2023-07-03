import Mock, { MockjsRequestOptions } from 'mockjs'
import { getQuery } from '../utils'

const { Random } = Mock

function mockCard({ url }: MockjsRequestOptions) {
  const { current = '1' } = getQuery(url)

  if (current === '3') {
    // mock data end
    return {
      code: 200,
      data: [],
      message: 'success'
    }
  }

  const data = Array.from({ length: 10 }, () => {
    return {
      id: Random.id()
    }
  })

  return {
    code: 200,
    data,
    message: 'success'
  }
}

Mock.mock(/\/api\/card.*/, 'get', mockCard)
Mock.mock(/\/api\/row-card.*/, 'get', mockCard)
Mock.mock(/\/api\/plain-card.*/, 'get', mockCard)
