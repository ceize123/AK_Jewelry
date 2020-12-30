import React, { useState, useEffect } from 'react';
import { article } from './diamondListAndArticleContent.js';
import { useParams } from 'react-router-dom';
import { RandomBlogArticle } from './pagesContent.js';

function Articles() {
  const { title } = useParams();
  let [currentImg, setCurrentImg] = useState(0);

  var touchstartX = 0;
  var touchendX = 0;

  var gesuredZone = document.getElementById('articleImgs');

  gesuredZone.addEventListener('touchstart', function(event) {
      touchstartX = event.changedTouches[0].screenX;
  }, false);

  gesuredZone.addEventListener('touchend', function(event) {
      touchendX = event.changedTouches[0].screenX;
      handleGesure();
  }, false);

  function handleGesure() {
    if (touchendX - touchstartX > 5) {
      setCurrentImg = (setCurrentImg > 0) ? setCurrentImg - 1 : 0;
    };
    if (touchstartX - touchendX > 5) {
      setCurrentImg = ( setCurrentImg < 2) ? setCurrentImg + 1 : 2;
    };
  };

  return (
    <>
    <div id='Articles'>
      <main>
        {article.filter(content => content.title === title).map((content, key) =>(
          <div key={key}>
            <div className='imgsSecWithRadio'>
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
