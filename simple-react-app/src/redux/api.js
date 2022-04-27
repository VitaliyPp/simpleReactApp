import { GET_COURSES_DATA, GET_TEACHERS_DATA } from "./actions/actions";

export const data = {
  getCourses: () => (dispatch) => {
    fetch("http://localhost:8000/courses/")
    .then((res) => res.json())
    .then(res => {
      dispatch({
        type: GET_COURSES_DATA,
        payload: res
      })
    })
  },

  getTeachers: () => (dispatch) => {
    fetch("http://localhost:8000/teachers/")
    .then((res) => res.json())
    .then(res => {
      dispatch({
        type: GET_TEACHERS_DATA,
        payload: res
      })
    })

  }
}
