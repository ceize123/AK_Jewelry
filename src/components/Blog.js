import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeaderContent } from './pagesContent.js';
import {article} from './diamondListAndArticleContent.js';

function Blog() {
  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => setDropDown(!dropDown);

  useEffect(() => {
    window.onscroll = function() {
      if ( document.getElementById('blogBar') ) {
        if (window.innerWidth > 850) {
          if ( window.pageYOffset > 836 ) {
            document.getElementById('blogBar').style.position = 'fixed';
            document.getElementById('blogBar').style.top = 0;

          } else {
            document.getElementById('blogBar').style.position = 'absolute';
            document.getElementById('blogBar').style.top = `836px`;
          }
        } else if ( window.innerWidth < 850 && window.innerWidth > 480) {
            if ( window.pageYOffset > 681 ) {
              document.getElementById('blogBar').style.position = 'fixed';
              document.getElementById('blogBar').style.top = 0;
            } else {
              document.getElementById('blogBar').style.position = 'absolute';
              document.getElementById('blogBar').style.top = `681px`;
            }
          } else {
            if ( window.pageYOffset > 615 ) {
              document.getElementById('blogBar').style.position = 'fixed';
              document.getElementById('blogBar').style.top = 0;
            } else {
              document.getElementById('blogBar').style.position = 'absolute';
              document.getElementById('blogBar').style.top = `615px`;
            }
          }
        }
    }
  }, []);


  const [windowWidth, setwindowWidth] = useState(window.innerWidth)
  const handleResize = () => {
    setwindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.addEventListener('resize', handleResize);
    }
  }, [])

  const wholeArticles = article.map((content, key) =>
    <Link className='articles' key={key} to={`/blog/${content.title}`}>
      <div><img src={`${windowWidth > 675 ? content.img : content.img_mobile}`} alt="articleImgs"/></div>
      <div>
        <h5>{content.title}</h5>
        <p>{content.content[0].substring(0, `${windowWidth > 675 ? 50 : 20}`)}...</p>
      </div>
    </Link>
  )


  const [articleFilter, setArticleFilter] = useState(wholeArticles);
  let [category, setCategory] = useState();
  const allArticles = () => setArticleFilter(wholeArticles);

  const filters = article.filter(key => key.category === category).map((content, key) =>
    <Link className='articles' key={key} to={`/blog/${content.title}`}>
      <div><img src={`${windowWidth > 675 ? content.img : content.img_mobile}`} alt='articleImgs'/></div>
      <div>
        <h5>{content.title}</h5>
        <p>{content.content[0].substring(0, `${windowWidth > 675 ? 50 : 20}`)}...</p>
      </div>
    </Link>
  );

  useEffect(() =>{
    if (category ) {
      setArticleFilter(filters);
    }
  }, [category])



  return (
    <>
    <div id='blogPage'>
      <HeaderContent title='Blog' sub='部落格'/>
      <main>
        <div className='blogBar' id='blogBar'>
          <input type='radio' name='category' id='first' onClick={allArticles}/>
          <label htmlFor='first' style={{display: dropDown ? 'block' : null}}>全部文章</label>
          <input type='radio' name='category' id='second' onClick={ () => setCategory( category = '珠寶知識')}/>
          <label htmlFor='second'>珠寶知識</label>
          <input type='radio' name='category' id='third' onClick={ () => setCategory( category = '產業趨勢')}/>
          <label htmlFor='third' >產業趨勢</label>
          <input type='radio' name='category' id='fourth' onClick={ () => setCategory( category = '經驗分享')}/>
          <label htmlFor='fourth' >經驗分享</label>
          <div>
            <span className={`inputTri ${dropDown ? 'reverse' : null}`} onClick={handleDropDown}></span>
          </div>
        </div>
        <div>
         {articleFilter}
         </div>
      </main>
    </div>
    </>
  );
}

export default Blog;
