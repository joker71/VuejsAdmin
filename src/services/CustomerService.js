import http from './common_axios'

class CustomerService {
  query(req) {
    return http.get('/customer/list', { params: req })
  }

  queryOrder(req, id) {
    return http.get(`/order/get/${id}`, { params: req })
  }

  getInfor(id) {
    return http.get(`/customer/${id}`)
  }
}

export default new CustomerService()
