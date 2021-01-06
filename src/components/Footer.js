import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <>
      <footer>
        <div className='leftFooter'>
          <Link to='/FAQ'>
            <h2>Any Question?</h2>
            <p>聯絡我們！</p>
          </Link>
          <span className='copyright'>Copyright © Andrea Ko</span>
        </div>
        <div className='rightFooter'>
          <div className='icons'>
            <i className="lab la-line"></i>
            <a href='https://www.facebook.com/andreakojd/' target='_blank' rel="noreferrer noopener">
              <i className="lab la-facebook"></i>
            </a>
            <a href='https://www.instagram.com/andreakodesign/?hl=zh-tw' target='_blank' rel="noreferrer noopener">
              <i className="lab la-instagram"></i>
            </a>
          </div>
          <span className='koDesign'>Andrea Ko Design</span>
          <span>Jewelry Design and Illustration Courses</span>
        </div>
        <span className='copyright'>Copyright © Andrea Ko</span>
      </footer>
    </>
  )
}

export default Footer;
