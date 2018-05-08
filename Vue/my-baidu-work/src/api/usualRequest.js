import service from '@/utils/request'

export function usualReq(config) {
  return service({
    url: config.url
      ? config.url
      : 'http://rap2api.taobao.org/app/mock/data/61279',
    method: config.method ? config.method : 'get',
  })
}
