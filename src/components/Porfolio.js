import React, { useEffect } from 'react';
import {HeaderContent} from './pagesContent.js';
import porfolio1 from '../imgs/RD-作品集/設計作品1.svg';
import porfolio2 from '../imgs/RD-作品集/設計作品2.svg';
import porfolio3 from '../imgs/RD-作品集/設計作品3.svg';
import porfolio4 from '../imgs/RD-作品集/設計作品4.svg';
import porfolio5 from '../imgs/RD-作品集/設計作品5.svg';
import porfolio6 from '../imgs/RD-作品集/設計作品6.svg';
import porfolio7 from '../imgs/RD-作品集/設計作品7.svg';
import porfolio8 from '../imgs/RD-作品集/設計作品8.svg';
import porfolio9 from '../imgs/RD-作品集/設計作品9.svg';
import porfolio10 from '../imgs/RD-作品集/設計作品10.svg';
import porfolio11 from '../imgs/RD-作品集/設計作品11.svg';
import porfolio12 from '../imgs/RD-作品集/設計作品12.svg';
import porfolio13 from '../imgs/RD-作品集/設計作品13.svg';
import porfolio14 from '../imgs/RD-作品集/設計作品14.svg';
import porfolio15 from '../imgs/RD-作品集/設計作品15.svg';
import porfolio16 from '../imgs/RD-作品集/設計作品16.svg';
import porfolio17 from '../imgs/RD-作品集/設計作品17.svg';
import porfolio18 from '../imgs/RD-作品集/設計作品18.svg';
import porfolio19 from '../imgs/RD-作品集/設計作品19.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Porfolio() {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offsetTop: 60,
    });
  }, []);

  return (
    <>
      <div id='porfolioPage'>
        <HeaderContent title='Porfolio' sub='作品集'/>
        <main>
          <h2 data-aos='fade-up'>Andrea Ko</h2>
          <section className='porfolioSec'>
            <img src={porfolio1} alt="porfolio1" data-aos='fade-up'/>
            <img src={porfolio2} alt="porfolio2" data-aos='fade-up' data-aos-delay='200'/>
            <img src={porfolio3} alt="porfolio3" data-aos='fade-up' data-aos-delay='400'/>
            <img src={porfolio4} alt="porfolio4" data-aos='fade-up' data-aos-delay='600'/>
            <img src={porfolio5} alt="porfolio5" data-aos='fade-up' data-aos-delay='800'/>
            <img src={porfolio6} alt="porfolio6" data-aos='fade-up' data-aos-delay='1000'/>
            <img src={porfolio7} alt="porfolio7" data-aos='fade-up' data-aos-delay='1200'/>
            <img src={porfolio8} alt="porfolio8" data-aos='fade-up' data-aos-delay='1400'/>
            <img src={porfolio9} alt="porfolio9" data-aos='fade-up' data-aos-delay='1600'/>
            <img src={porfolio10} alt="porfolio10" data-aos='fade-up' data-aos-delay='1800'/>
            <img src={porfolio11} alt="porfolio11" data-aos='fade-up' data-aos-delay='2000'/>
            <img src={porfolio12} alt="porfolio12" data-aos='fade-up' data-aos-delay='2200'/>
            <img src={porfolio13} alt="porfolio13" data-aos='fade-up' data-aos-delay='2400'/>
            <img src={porfolio14} alt="porfolio14" data-aos='fade-up' data-aos-delay='2600'/>
            <img src={porfolio15} alt="porfolio15" data-aos='fade-up' data-aos-delay='2800'/>
            <img src={porfolio16} alt="porfolio16" data-aos='fade-up' data-aos-delay='3000'/>
            <img src={porfolio17} alt="porfolio17" data-aos='fade-up' data-aos-delay='3000'/>
            <img src={porfolio18} alt="porfolio18" data-aos='fade-up' data-aos-delay='3000'/>
            <img src={porfolio19} alt="porfolio19" data-aos='fade-up' data-aos-delay='3000'/>
            <div>
              <button className='longBtn'>近期課程資訊</button>
              <button className='longBtn'>企業合作/個人訂製</button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}


export default Porfolio;
