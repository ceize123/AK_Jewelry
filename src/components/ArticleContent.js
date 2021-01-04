import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { article } from './diamondListAndArticleContent.js';
import { useParams } from 'react-router-dom';
import { RandomBlogArticle } from './pagesContent.js';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Articles() {
  const { title } = useParams();
  let [currentImg, setCurrentImg] = useState(0);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  function handleTouchEnd() {
    if (touchStart - touchEnd > 5 & currentImg < 2) {
        // do your stuff here for left swipe
        setCurrentImg( currentImg + 1 );
    }
    if (touchStart - touchEnd < -5 & currentImg > 0 ) {
        // do your stuff here for right swipe
        setCurrentImg( currentImg - 1 );
    }
  }

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
    <div id='Articles'>
      <main>
      {/* 讓內容可以藉由title做篩選 */}
        {article.filter(content => content.title === title).map((content, key) =>(
          <div key={key}>
            <div className='imgsSecWithRadio'
                onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
                onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
                onTouchEnd={handleTouchEnd}
                >
              <div id='articleImgs' style={{left: currentImg * -100 + 'vw' }}>
                <img src={content.img} alt="img1"/>
                <img src={content.img2} alt="img2"/>
                <img src={content.img3} alt="img3"/>
              </div>
              <div className='carouselInput'>
                <ul>
                  <li className={currentImg === 0 ? 'selected' : ''} onClick={() => {
                    setCurrentImg(currentImg = 0);
                    }}></li>
                  <li className={currentImg === 1 ? 'selected' : ''} onClick={() => {
                    setCurrentImg(currentImg = 1);
                    }}></li>
                  <li className={currentImg === 2 ? 'selected' : ''} onClick={() => {
                    setCurrentImg(currentImg = 2);
                    }}></li>
                </ul>
              </div>
            </div>
            <h5 data-aos='fade-up' data-aos-delay='500'>{content.title}</h5>
            <p data-aos='fade-up'>{content.content}</p>
          </div>
        ))}
        <div className='articleBtn' data-aos='fade-up'>
        <Link to='/'>
          <button className='longBtn'>近期課程資訊</button>
        </Link>
        <Link to='/porfolio'>
          <button className='longBtn'>作品集</button>
        </Link>
        </div>
        <h5 data-aos='fade-up'>其他人也看過</h5>
        <RandomBlogArticle />
      </main>
    </div>
    </>
  );
}

export default Articles;
