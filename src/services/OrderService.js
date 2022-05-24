import http from './common_axios'

class OrderService {
  query(req) {
    return http.get('/order/get', { params: req })
  }
  detail(id) {
    return http.get('/order/detail' + `${id}`)
  }
  getLines(id) {
    return http.get('/order/line' + `/${id}`)
  }
}

export default new OrderService()
