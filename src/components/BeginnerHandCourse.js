import React, { useEffect } from 'react';
import {HeaderContent, ListsWithDiamond} from './pagesContent.js';
import {beginnerHandSuit, learnWhat, whyChose} from './diamondContent.js';
import circle from '../imgs/RD-初階手繪珠寶設計/圈圈.svg';
import student1 from '../imgs/RD-初階手繪珠寶設計/學生作品1.svg';
import student2 from '../imgs/RD-初階手繪珠寶設計/學生作品2.svg';
import Rellax from "rellax";
import Aos from 'aos';
import 'aos/dist/aos.css';

function BeginnerHandCourse() {
  // easy parallax scroll
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);
  //
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [])

  useEffect(() => {
    new Rellax(".rellax", {
      speed: 0.75,
      center: 0.4,
    });
  })


  return (
    <>
      <div id='BeginnerHandCoursePage'>
        <HeaderContent title='Beginner' sub='初階手繪珠寶設計'/>
        <main>
          <ListsWithDiamond className='suitFor' title='適合對象...' listName={beginnerHandSuit} />
          <div className='parallax'>
            <img src={circle} alt="circle"/>
            <div>
              <p className='rellax'>
              歡迎你！<br/>Andrea 將手把手的帶你一步一步進入珠寶的世界！
              </p>
            </div>
          </div>
          <ListsWithDiamond className='learnWhat' title='你可以學到...' listName={learnWhat} />
          <div className='parallax'>
            <img src={circle} alt="circle"/>
            <div>
              <p className='rellax'>
              Andrea老師精心編排，<br/>讓沒有美術設計經驗的同學也能快速上手喔！
              </p>
            </div>
          </div>
          <ListsWithDiamond className='whyChose' title='為什麼選Andrea Ko珠寶教室?' listName={whyChose} />
          <div className='parallax'>
            <img src={circle} alt="circle"/>
            <div>
              <p className='rellax'>
              我們非常重視與產業接軌以及學生的設計發想能力，打好軟實力基礎，才能走得更長遠。
              </p>
            </div>
          </div>
          <p>上完課你可以做到...</p>
          <div className='student'>
            <div><span>學生作品-By Feng</span><img src={student1} alt="Feng"/></div>
            <div><span>學生作品-By Ivy</span><img src={student2} alt="Ivy"/></div>
            <div><span>學生作品-By Lillian</span><img src={student1} alt="Feng"/></div>
          </div>
        </main>
      </div>
    </>
  );
}


export default BeginnerHandCourse;
