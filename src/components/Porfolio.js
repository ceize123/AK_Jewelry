import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {HeaderContent} from './pagesContent.js';
import porfolio1 from '../imgs/RD-作品集/設計作品1.png';
import porfolio2 from '../imgs/RD-作品集/設計作品2.png';
import porfolio3 from '../imgs/RD-作品集/設計作品3.png';
import porfolio4 from '../imgs/RD-作品集/設計作品4.png';
import porfolio5 from '../imgs/RD-作品集/設計作品5.png';
import porfolio6 from '../imgs/RD-作品集/設計作品6.png';
import porfolio7 from '../imgs/RD-作品集/設計作品7.png';
import porfolio8 from '../imgs/RD-作品集/設計作品8.png';
import porfolio9 from '../imgs/RD-作品集/設計作品9.png';
import porfolio10 from '../imgs/RD-作品集/設計作品10.png';
import porfolio11 from '../imgs/RD-作品集/設計作品11.png';
import porfolio12 from '../imgs/RD-作品集/設計作品12.png';
import porfolio13 from '../imgs/RD-作品集/設計作品13.png';
import porfolio14 from '../imgs/RD-作品集/設計作品14.png';
import porfolio15 from '../imgs/RD-作品集/設計作品15.png';
import porfolio16 from '../imgs/RD-作品集/設計作品16.png';
import porfolio17 from '../imgs/RD-作品集/設計作品17.png';
import porfolio18 from '../imgs/RD-作品集/設計作品18.png';
import porfolio19 from '../imgs/RD-作品集/設計作品19.png';
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
            <img src={porfolio2} alt="porfolio2" data-aos='fade-up' />
            <img src={porfolio3} alt="porfolio3" data-aos='fade-up' />
            <img src={porfolio4} alt="porfolio4" data-aos='fade-up' />
            <img src={porfolio5} alt="porfolio5" data-aos='fade-up' />
            <img src={porfolio6} alt="porfolio6" data-aos='fade-up' />
            <img src={porfolio7} alt="porfolio7" data-aos='fade-up' />
            <img src={porfolio8} alt="porfolio8" data-aos='fade-up' />
            <img src={porfolio9} alt="porfolio9" data-aos='fade-up' />
            <img src={porfolio10} alt="porfolio10" data-aos='fade-up' />
            <img src={porfolio11} alt="porfolio11" data-aos='fade-up' />
            <img src={porfolio12} alt="porfolio12" data-aos='fade-up' />
            <img src={porfolio13} alt="porfolio13" data-aos='fade-up' />
            <img src={porfolio14} alt="porfolio14" data-aos='fade-up' />
            <img src={porfolio15} alt="porfolio15" data-aos='fade-up' />
            <img src={porfolio16} alt="porfolio16" data-aos='fade-up' />
            <img src={porfolio17} alt="porfolio17" data-aos='fade-up' />
            <img src={porfolio18} alt="porfolio18" data-aos='fade-up' />
            <img src={porfolio19} alt="porfolio19" data-aos='fade-up' />
            <div>
            <Link to='/#lectureInfoSection'>
              <button className='longBtn'>近期課程資訊</button>
            </Link>
            <Link to='freelance'>
              <button className='longBtn'>企業合作/個人訂製</button>
            </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}


export default Porfolio;
