import React, { useEffect } from 'react';
import {HeaderContent, ListsWithDiamond} from './pagesContent.js';
import {aboutPageAndrea, whyChose} from './diamondListAndArticleContent.js';
import aboutImg1 from '../imgs/RD-about師資介紹/明星穿戴照1.svg';
import aboutImg2 from '../imgs/RD-about師資介紹/明星穿戴照2.svg';
import aboutImg3 from '../imgs/RD-about師資介紹/明星穿戴照3.svg';
import aboutImg4 from '../imgs/RD-about師資介紹/明星穿戴照4.svg';
import aboutImg5 from '../imgs/RD-about師資介紹/明星穿戴照5.svg';
import aboutImg6 from '../imgs/RD-about師資介紹/明星穿戴照6.svg';
import aboutImg7 from '../imgs/RD-about師資介紹/明星穿戴照7.svg';
import aboutImg8 from '../imgs/RD-about師資介紹/明星穿戴照8.svg';
import getCase from '../imgs/RD-about師資介紹/獨立接案設計image.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offsetTop: 100,
      delay: 200,
    });
  }, []);

  return (
    <>
      <div id='aboutPage'>
        <HeaderContent title='About' sub='師資介紹'/>
        <main>
          <ListsWithDiamond className='andrea' title='Andrea Ko' listName={aboutPageAndrea} />
          <ListsWithDiamond className='whyChose' title='為什麼選Andrea Ko珠寶教室?' listName={whyChose} />
          <div className='designSec'>
            <h3 data-aos='fade-up'><span>Andrea</span>的設計</h3>
            <span className='designSecSpan' data-aos='fade-up'>手飾和耳環為ANDREA設計 (版權所有洛琳·施華滋)</span>
            <div>
              <img src={aboutImg1} alt="明星穿戴照1" data-aos='fade-up' />
              <img src={aboutImg2} alt="明星穿戴照2" data-aos='fade-up' data-aos-delay='500'/>
              <img src={aboutImg3} alt="明星穿戴照3" data-aos='fade-up' data-aos-delay='800'/>
              <img src={aboutImg4} alt="明星穿戴照4" data-aos='fade-up' data-aos-delay='1100'/>
              <img src={aboutImg5} alt="明星穿戴照5" data-aos='fade-up' data-aos-delay='1400'/>
              <img src={aboutImg6} alt="明星穿戴照6" data-aos='fade-up' data-aos-delay='1700'/>
              <img src={aboutImg7} alt="明星穿戴照7" data-aos='fade-up' data-aos-delay='2000'/>
              <img src={aboutImg8} alt="明星穿戴照8" data-aos='fade-up' data-aos-delay='2300'/>
            </div>
          </div>
          <div className='getCase'>
            <h3 data-aos='fade-up' data-aos-delay='900'>獨立接案設計師<span>Freelance</span></h3>
            <div className='freelanceImg'>
              <img src={getCase} alt="Freelance"/>
              <div className='fadeIn' data-aos='fade-up' data-aos-anchor-placement='center-center' data-aos-offset='0' data-aos-duration='1500' data-aos-delay='1000'>
                <span>
                  ANDREA KO 定居多倫多後成立自有工作室，轉型專案設計師，
                  除了教課之外Andrea也提供客製化珠寶訂製服務，無論是婚戒、各種紀念日、
                  節慶禮物或者企業品牌的合作項目，都歡迎來訊洽談。
                  <br/>
                  <br/>
                  近期開始籌劃銀飾珠寶系列DRIFTSILVER。DRIFTSILVER 由兩個字組成，
                  其中SILVER意指該系列以銀飾為主打， DRIFT則象徵了設計師珠寶應該自由奔放，
                  不受框架拘束的精神。
                </span>
                <button id='cooperateBtn'>企業合作/個人訂製</button>
              </div>
            </div>
          </div>
          <div className='aboutPageLastBtn' data-aos='fade-up' data-aos-delay='400'>
            <button>近期課程資訊</button>
            <button>作品集</button>
          </div>
        </main>
      </div>
    </>
  );
}


export default About;
