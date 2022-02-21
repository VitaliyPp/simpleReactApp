import React from 'react';
import './style.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

  render() {

    return(
      <div className="header">
        <Link to='/'><img src={logo} alt='' /></Link>
        
        <div className="header-link">
          <Link to='/courses'><p>Courses</p></Link>
          <Link to='/teachers'><p>Teachers</p></Link>
          <Link to='/about'><p>About us</p></Link>
          <Link to='apply'><button>Apply</button></Link>
        </div>
      </div>
    )
  }
}