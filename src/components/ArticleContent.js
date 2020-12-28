import React from 'react';
import { article } from './diamondListAndArticleContent.js';
import { useParams } from 'react-router-dom';
import { RandomBlogArticle } from './pagesContent.js';

function Articles() {
  const { title } = useParams()
  return (
    <>
    <div id='Articles'>
      <main>
        {article.filter(content => content.title === title).map((content, key) =>(
          <div key={key}>
            <div className='articleImgs'>
              <img src={content.img} alt="img1"/>
              <img src={content.img2} alt="img2"/>
              <img src={content.img3} alt="img3"/>
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
