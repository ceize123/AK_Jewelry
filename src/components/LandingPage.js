import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import abstract2 from '../imgs/RD-landingpage/抽象線條人物2.svg';
import bling from '../imgs/RD-landingpage/抽象人物線條亮晶晶.gif';
import diamond from '../imgs/RD-landingpage/圓小鑽石.svg';
import diamond2x from '../imgs/RD-landingpage/圓小鑽石2x.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {lpHand, lpDigital} from './diamondContent.js';

function LessonSection(props) {
  const { handText, digitalText } = props;
  const [text1, setText1] = useState(digitalText);
  const [text2, setText2] = useState(handText);


  // list with array
  const handContent = lpHand.map( content => <li><img src={diamond2x} alt="diamond"/>{content}</li> )
  const digitalContent = lpDigital.map( content => <li><img src={diamond} srcset={`${diamond} 400w, ${diamond2x} 800w`} alt="diamond"/>{content}</li> )

  return (
    <>
      <div className='handBlock'>
        <div className='handBar'
        onMouseOver={()=>setText2('Beginner')}
        onMouseLeave={()=>setText2('初階手繪珠寶設計')}
        >
          <p className='handP'>
            {text2}
          </p>
        </div>
        <div className='date'>
          <span data-aos='fade-up' data-aos-anchor-placement='top-center'>日期：2021<br/>籌備中，敬請期待！</span>
          <ul data-aos='fade-up' data-aos-anchor-placement='top-center'>
            {handContent}
          </ul>
          <button data-aos='fade-up' data-aos-anchor-placement='top-center'>開課通知我</button>
        </div>
      </div>
      <div className='digitalBlock'>
        <div className='digitalBar'
        onMouseOver={()=>setText1('Digital Beginner')}
        onMouseLeave={()=>setText1('數位珠寶設計')}
        >
          <p className='digitalP'>
            {text1}
          </p>
        </div>
        <div className='date digitalDate'>
          <span id='digitalSpan' data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-duration='0'>日期：2021<br/>1/01, 1/07, 1/14, 1/21, 1/28</span>
          <ul data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-duration='0'>
            {digitalContent}
          </ul>
          <button data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-duration='0'>詳細資訊</button>
        </div>
      </div>
    </>
  )
}

function LandingPage() {

// scoll to element
  const aboutSection = useRef(null);

  const gotoAboutSection = () =>
    window.scrollTo({
      top: aboutSection.current.offsetTop,
      behavior: 'smooth'
    });

// aos
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offsetTop: 0,
      delay: 500,
    });
  }, []);

  return (
    <>
      <header>
        <div className='sloganSec'>
          <div>
            <img src={bling} alt="header"/>
            {/* <div className='glow'>
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
            </div> */}
          </div>
          <div data-aos='fade-up' className='slogan'>
            <p>喚起你心中的藝術家，</p>
            <p>開啟閃亮亮斜槓人生</p>
          </div>
          <div data-aos='fade-up' data-aos-delay='800' className='getIn' onClick={gotoAboutSection}>
            <p><i class="las la-long-arrow-alt-right"></i>進入珠寶世界</p>
          </div>
        </div>
      </header>
      <main>
        <div className='aboutSec' ref={aboutSection}>
          <p data-aos='fade-up' data-aos-offset='120' data-aos-delay='0'>About</p>
          <span data-aos='fade-up' data-aos-offset='120' data-aos-delay='0'>ANDREA老師畢業於紐約FIT珠寶設計學系，
          畢業後立即進入了紐約一線的珠寶設計師品牌執業，
          為好萊塢明星提供客製化與紅毯珠寶設計，有多年業界經驗。
          <br/>
          <br/>
          因現居北美洲，ANDREA老師一年只會回來開2次課程...</span>
          <button data-aos='fade-up' id='moreBtn' data-aos-offset='0' data-aos-delay='0'>More</button>
        </div>
        <div className='lectureInfo'>
          <img src={abstract2} alt="Jewelry"/>
          <p data-aos='fade-up'>近期開課資訊</p>
        </div>
        <div className='dateInfo'>
          <LessonSection handText='初階手繪珠寶設計' digitalText='數位珠寶設計'/>
        </div>
        <div className='tellMeTime'>
          <p data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-duration='0'>目前開課時間都無法配合<span id='comma'>，</span><span>怎麼辦？</span></p>
          <p data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-duration='0'>別擔心！<span>告訴我們你可以的時間</span></p>
          <button data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-duration='0'>填寫</button>
        </div>
      </main>
    </>
  );
}


export default LandingPage;
