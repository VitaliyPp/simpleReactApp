export const GET_COURSES_DATA = 'GET_COURSES_DATA';
export const GET_TEACHERS_DATA = 'GET_TEACHERS_DATA';

export const coursesData = (courses) => ({
  type: GET_COURSES_DATA,
  payload: courses
});

export const teachersData = (teachers) => ({
  type: GET_COURSES_DATA,
  payload: teachers
});
