import React from 'react';
import { HeaderContent, BlogArticle } from './pagesContent.js';

function Blog() {
  return (
    <>
    <div id='blogPage'>
      <HeaderContent title='Blog' sub='部落格'/>
      <main>
        <div className='blogBar'>
          <p>最新文章</p>
          <p>全部文章</p>
          <p>珠寶知識</p>
          <p>產業趨勢</p>
          <p>經驗分享</p>
        </div>
        <BlogArticle />
      </main>
    </div>
    </>
  );
}

export default Blog;
