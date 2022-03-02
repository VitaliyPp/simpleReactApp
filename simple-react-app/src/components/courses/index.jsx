import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import './style.css';

export default function Courses() {

  // const dispatch = useDispatch()

  const [course, getCourse] = useState([]);

  useEffect(() => {
      fetch("http://localhost:8000/courses/")
        .then((response) => response.json())
        .then((data) => getCourse(data))
  }, []);

  console.log(course);
  
  return(
    <div className="courses">
      {course.map(el => 
        <div key={el.id} className="course">
          <img src={el.thumbnail_img_url} alt={el.name} />

          <div className='info'>
            <p>{el.name} <span>{el.price}</span></p>
            <p>Level <span>{el.level}</span></p>

            <div>
              <p>Duration <span>{el.duration}<br/>{el.periodicity}</span></p>
              <p>{el.description_short}</p>
            </div>
          </div>

          <button>Apply</button>
        </div>
      )}
    </div>
  )
  
}