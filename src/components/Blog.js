import React, { useState, useEffect } from 'react';
import { HeaderContent, BlogArticle } from './pagesContent.js';

function Blog() {
  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => setDropDown(!dropDown);


  return (
    <>
    <div id='blogPage'>
      <HeaderContent title='Blog' sub='部落格'/>
      <main>
        <div className='blogBar' style={{marginBottom: dropDown ? '152px' : null}}>
          <input type='radio' name='category' id='first'/>
          <label htmlFor='second' style={{display: dropDown ? 'block' : null}}>全部文章</label>
          <input type='radio' name='category' id='second'/>
          <label htmlFor='third'>珠寶知識</label>
          <input type='radio' name='category' id='third'/>
          <label htmlFor='forth'>產業趨勢</label>
          <input type='radio' name='category' id='fourth'/>
          <label htmlFor='fifth'>經驗分享</label>
          <div>
            <span className={`inputTri ${dropDown ? 'reverse' : null}`} onClick={handleDropDown}></span>
          </div>
        </div>
        <BlogArticle />
      </main>
    </div>
    </>
  );
}

export default Blog;
