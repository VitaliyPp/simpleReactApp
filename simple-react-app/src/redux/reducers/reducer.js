import { GET_COURSES_DATA, GET_TEACHERS_DATA } from "../actions/actions";

const initialState = {
  courses: [],
  teachers: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_COURSES_DATA:
      return {
        ...state, 
        courses: action.payload,
      };

    case GET_TEACHERS_DATA:
      return {
        ...state,
        teachers: action.payload,
      };

    default:
      return {...state};

  }
}