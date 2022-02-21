import React from 'react';
import './style.css';

export default class Footer extends React.Component {

  render() {

    return(
      <div className="footer">

        <div>
          <p>Ⓒ Simple Art, 2021<br/>All rights reserved</p>
        </div>

        <div className='links'>
        <p>Terms</p>
        <p>Privacy policy</p>
        <p>Help &amp; Support</p>
        </div>

      </div>
    )
  }
}