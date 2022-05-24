// import http from "../common_axios";
// class CityService{
//     getAll(){
//         return http.get("/get");
//     }
//     getById(id){
//         return http.get(`/get/${id}`);
//     }
//     create(data) {
//         return http.post("/add", data);
//     }
//
// }
// export default new CityService();
import http from './common_axios'

class BookService {
  query(req) {
    return http.get('/book/get', { params: req })
  }

  queryByCata(req, id) {
    return http.get(`/book/catalogue/${id}`, { params: req })
  }

  update(book) {
    return http.put('/book/put', book)
  }

  add(book) {
    return http.post('/book/post', book)
  }

  delete(id) {
    return http.delete(`/book/delete/${id}`)
  }
}

export default new BookService()
