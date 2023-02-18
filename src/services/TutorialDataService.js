import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/tugas");
  }

  get(id) {
    return http.get(`/tugas/${id}`);
  }

  create(data) {
    return http.post("/tugas", data);
  }

  update(id, data) {
    return http.patch(`/tugas/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tugas/${id}`);
  }
  
  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();
