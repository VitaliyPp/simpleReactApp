import React from 'react';
import { useEffect } from 'react';
import { connect } from "react-redux";
import { data } from '../../redux/api';
import './style.css';

function Courses({ getCourses, getCoursesAction }) {

  useEffect(() => {
    getCoursesAction();
  }, []);

  return(
    <div className="courses">
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    getCourses: state.getCourses,
  };
};

const mapDispatchToProps = {
  getCoursesAction: data.getCourses,
};
export default connect(mapStateToProps, mapDispatchToProps)(Courses);
