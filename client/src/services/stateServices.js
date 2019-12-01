import axios from "axios"

export default {
  getAll() {
    //calls upon the get all function in routes\states.js
    return axios.get("/api/states/").then(response => {
      return response.data
    })
  },
  //tells routes\states.js that vistited status changed so it can notify the database.
  setVisited(stateName, visited) {
    return axios.patch("/api/state/" + stateName, { visited: visited }).then(response => {return response.data})
  },
  //calls upon the get statename function in routes\states.js
  getOne(stateName) {
    return axios.get("/api/states/" + stateName).then(response => {
      return response.data
    })
  }
}