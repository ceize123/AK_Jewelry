import React, { useState, useEffect } from 'react';
import { article } from './diamondListAndArticleContent.js';
import { useParams } from 'react-router-dom';
import { RandomBlogArticle } from './pagesContent.js';

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

  return (
    <>
    <div id='Articles'>
      <main>
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
            <h5>{content.title}</h5>
            <p>{content.content}</p>
          </div>
        ))}
        <div className='articleBtn'>
          <button>近期課程資訊</button>
          <button>作品集</button>
        </div>
        <h5>其他人也看過</h5>
        <RandomBlogArticle />
      </main>
    </div>
    </>
  );
}

export default Articles;
