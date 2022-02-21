import { createSlice } from '@reduxjs/toolkit';

const Courses = () => {
  return fetch("http://localhost:8000/courses/")
        .then((response) => response.json())
        .then((data) => data)
};

const Teachers = () => {
  return fetch("http://localhost:8000/teachers/")
  .then((response) => response.json())
  .then((data) => data);
};

export const data = createSlice({
  name: 'courses',
  initialState: {
    course: Courses(),
    teacher: Teachers(),
  },
})


export default data.reducer
