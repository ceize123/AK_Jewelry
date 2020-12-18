import React, { useState } from 'react';
import abstract from '../imgs/RD-landingpage/抽象線條人物1.svg';
import abstract2 from '../imgs/RD-landingpage/抽象線條人物2.svg';

function LandingPage() {
  return (
    <>
      <header>
        <div className='sloganSec'>
          <div>
            <img src={abstract} alt="header"/>
            <div class="glow bar">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className='darkGrayLine'></div>
              <div className='darkGrayLine'></div>
              <div className='darkGrayLine'></div>
              <div className='darkGrayLine'></div>
              <div className='darkGrayLine'></div>
              <div className='darkGrayLine'></div>
              <div className='darkGrayLine'></div>
              <div className='darkGrayLine'></div>
            </div>
          </div>
          <div className='slogan'>
            <p>喚起你心中的藝術家，</p>
            <p>開啟閃亮亮斜槓人生</p>
          </div>
          <div className='getIn'>
            <p><i class="las la-long-arrow-alt-right"></i>進入珠寶世界</p>
          </div>
        </div>
        <div className='aboutSec'>
        <p>About</p>
        <span>ANDREA老師畢業於紐約FIT珠寶設計學系，
        畢業後立即進入了紐約一線的珠寶設計師品牌執業，
        為好萊塢明星提供客製化與紅毯珠寶設計，有多年業界經驗。
        <br/>
        <br/>
        因現居北美洲，ANDREA老師一年只會回來開2次課程...</span>
        </div>
        <button>More</button>
        <div className='lectureInfo'>
          <img src={abstract2} alt="Jewelry"/>
          <p>近期開課資訊</p>
        </div>
        <div className='dateInfo'>
          <div className='digitalDate'><p className='digitalP'>初階數位珠寶設計</p></div>
          <div className='handDate'><p>初階手繪珠寶設計</p></div>
        </div>
        <button className='latsBtn'>更多課程</button>
      </header>
    </>
  );
}


export default LandingPage;
