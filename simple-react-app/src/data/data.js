// export const Courses = () => {
//   return fetch("http://localhost:8000/courses/")
//         .then((response) => response.json())
//         .then((data) => data)
// };

export const Teachers = () => {
  return fetch("http://localhost:8000/teachers/")
  .then((response) => response.json())
  .then((data) => data)
};

