import React from 'react';
import { useEffect } from 'react';
import { connect } from "react-redux";
import { data } from '../../redux/api';
import './style.css';

function Teachers({ getTeachers, getTeachersAction }) {

  useEffect(() => {
    getTeachersAction();
  }, []);

  return(
    <div className="Teachers">
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    getTeachers: state.getTeachers,
  };
};

const mapDispatchToProps = {
  getTeachersAction: data.getTeachers,
};
export default connect(mapStateToProps, mapDispatchToProps)(Teachers);