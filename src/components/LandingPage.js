import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import abstract2 from '../imgs/RD-landingpage/抽象線條人物2.svg';
import bling from '../imgs/RD-landingpage/抽象人物線條亮晶晶.gif';
import Aos from 'aos';
import 'aos/dist/aos.css';

function HoverToChangeText(props) {
  const { handText, digitalText } = props;
  const [text1, setText1] = useState(digitalText);
  const [text2, setText2] = useState(handText);

  return (
    <>
      <div className='digitalDate'
      onMouseOver={()=>setText1('Digital Beginner')}
      onMouseLeave={()=>setText1('初階數位珠寶設計')}
      >
        <p className='digitalP'
          >
          {text1}
        </p>
      </div>
      <div className='handDate'
      onMouseOver={()=>setText2('Beginner')}
      onMouseLeave={()=>setText2('初階手繪珠寶設計')}
      >
        <p className='handP'>
          {text2}
        </p>
      </div>
    </>
  )
}

function LandingPage() {

  const aboutSection = useRef(null);

  const gotoAboutSection = () =>
    window.scrollTo({
      top: aboutSection.current.offsetTop,
      behavior: 'smooth'
    });

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
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
          <div data-aos='fade-up' data-aos-delay='500' className='getIn' onClick={gotoAboutSection}>
            <p><i class="las la-long-arrow-alt-right"></i>進入珠寶世界</p>
          </div>
        </div>
        <div ref={aboutSection}></div>
        <div className='aboutSec'>
          <p data-aos='fade-up'>About</p>
          <span data-aos='fade-up'>ANDREA老師畢業於紐約FIT珠寶設計學系，
          畢業後立即進入了紐約一線的珠寶設計師品牌執業，
          為好萊塢明星提供客製化與紅毯珠寶設計，有多年業界經驗。
          <br/>
          <br/>
          因現居北美洲，ANDREA老師一年只會回來開2次課程...</span>
        </div>
        <button data-aos='fade-up'>More</button>
        <div className='lectureInfo'>
          <img src={abstract2} alt="Jewelry"/>
          <p data-aos='fade-up'>近期開課資訊</p>
        </div>
        <div className='dateInfo'>
          <HoverToChangeText handText='初階手繪珠寶設計' digitalText='初階數位珠寶設計'/>
        </div>
        <button data-aos='fade-up' className='latsBtn'>更多課程</button>
      </header>
    </>
  );
}


export default LandingPage;
