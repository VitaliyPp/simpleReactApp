import React from 'react';
import './style.css';
import img4 from '../../assets/img4.png';
import img2 from '../../assets/img2.png';

// import { useSelector } from 'react-redux';

export default function Landing() {

  // const count = useSelector((state) => state.value);

  
  // count.teacher.then(res => console.log(res));

  return (
    <div className="landing">

      <div className='wrapper'>
        <div>
          <h1>Desperate to learn drawing? We'll teach you!</h1>
          <p className='text'>Our school has more than 20 years of experience in teaching people who always thought that they don't have even a slightest hint of a talent. Some other descriptive stuff that I'm too lazy to make up. </p>
          <p className='list'>With us you will get:</p>

          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Vestibulum commodo id amet non facilisis in.</li>
            <li>Est eros, vestibulum cursus luctus luctus aenean molestie. </li>
            <li>Augue ultricies non tristique malesuada justo neque mi, pellentesque lacus.</li>
          </ul>

          <button className='apply'>Apply now</button>
        </div>

        <img src={img2} alt='' />
        <span></span>
      </div>

      <div className='wrapper'>
        <img src={img4} alt='' />

        <div>
          <h1>Interested but currently have other plans?</h1>
          <p>Subscribe to our newsletter to stay tuned and get hottest updates and deals</p>

          <button className='subscribe'>Subscribe</button>
        </div>
      </div>

    </div>
  )
}
