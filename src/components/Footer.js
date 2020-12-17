import React from 'react';

function Footer(props) {
  return (
    <>
      <footer className={props.className}>
        <div className='leftFooter'>
          <h2>Any Question?</h2>
          <p>聯絡我們！</p>
        </div>
        <div className='rightFooter'>
          <div className='icons'>
            <i class="lab la-line"></i>
            <i class="lab la-facebook"></i>
            <i class="lab la-instagram"></i>
          </div>
          <span className='koDesign'>Andrea Ko Design</span>
          <span>Jewelry Design and Illustration Courses</span>
        </div>
      </footer>
    </>
  )
}

export default Footer;
