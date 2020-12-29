import React from 'react';
import { HeaderContent, BlogArticle } from './pagesContent.js';

function Blog() {

  return (
    <>
    <div id='blogPage'>
      <HeaderContent title='Blog' sub='部落格'/>
      <main>
        <div className='blogBar'>
          <input type='radio' name='category' id='first'/>
          <label htmlFor='first'>最新文章</label>
          <input type='radio' name='category' id='second'/>
          <label htmlFor='second'>全部文章</label>
          <input type='radio' name='category' id='third'/>
          <label htmlFor='third'>珠寶知識</label>
          <input type='radio' name='category' id='forth'/>
          <label htmlFor='forth'>產業趨勢</label>
          <input type='radio' name='category' id='fifth'/>
          <label htmlFor='fifth'>經驗分享</label>
        </div>
        <BlogArticle />
      </main>
    </div>
    </>
  );
}

export default Blog;
