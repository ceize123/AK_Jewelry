import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import diamond from '../imgs/RD-landingpage/圓小鑽石.png';
import circle from '../imgs/RD-初階手繪珠寶設計/圈圈.svg';
import {article} from './diamondListAndArticleContent.js';
import Aos from 'aos';
import 'aos/dist/aos.css';

export function HeaderContent(props) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offsetTop: 80,
      delay: 500,
    });
  }, []);

  return (
    <>
      <header data-aos='fade-up'>
        <h1>{props.title}</h1>
        <p>{props.sub}</p>
      </header>
    </>
  )
}

export function ListsWithDiamond(props) {
  // map method
  const listName = props.listName;
  const listsContent = listName.map((content, key) =>
  <li key={key}><img src={diamond}
      className='diamond'
      alt="diamond"/>{content}</li> )


  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offsetTop: 80,
      delay: 500,
    });
  }, []);

  return (
    <>
      <div className={`listBlock ${props.className}`}>
        <h3 data-aos='fade-up'>{props.title}</h3>
        <ul data-aos='fade-up'>{listsContent}</ul>
      </div>
    </>
  )
}

// Parallax Effect
export function ParallaxCricle(props) {
  // easy parallax scroll
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <>
      <div className='parallax'>
        <img src={circle} alt="circle"/>
        <div>
          <p style={{ transform: `translateY(${offsetY * -0.2}px)` }} className='rellax'>{props.text}</p>
        </div>
      </div>
    </>
  )
}


// Blog page
export function BlogArticle(props) {

  // // 設定手機的內文字數（blog頁面）
  // const [resize, setResize] = useState(50);
  // // 設定手機的尺寸｜
  // const [mobileImg, setMobileImg] = useState(false);
  // const size = () => {
  //   if (window.innerWidth <= 675) {
  //     setResize(20);
  //     setMobileImg(true);
  //
  //   } else {
  //     setResize(50);
  //     setMobileImg(false);
  //   }
  // }
  // window.addEventListener('resize', size);
  //
  // const wholeArticles = article.map((content, key) =>
  //   <Link className='articles' key={key} to={`/blog/${content.title}`}>
  //     <div><img src={`${mobileImg === false ? content.img : content.img_mobile}`} alt="articleImgs"/></div>
  //     <div>
  //       <h5>{content.title}</h5>
  //       <p>{content.content[0].substring(0, resize)}...</p>
  //     </div>
  //   </Link>
  // )

  // const abc = article.filter(key => key.category === '珠寶知識').map((content, key) =>
  //   <Link className='articles' key={key} to={`/blog/${content.title}`}>
  //     <div><img src={`${mobileImg === false ? content.img : content.img_mobile}`} alt="articleImgs"/></div>
  //     <div>
  //       <h5>{content.title}</h5>
  //       <p>{content.content[0].substring(0, resize)}...</p>
  //     </div>
  //   </Link>
  // );

  return (
    <>
      <div>
        {props.articles}
      </div>
    </>
  )
}


export function RandomBlogArticle() {
  const [resize, setResize] = useState(50);
  const [mobileImg, setMobileImg] = useState(false);
  const size = () => {
    if (window.innerWidth <= 675) {
      setResize(20);
      setMobileImg(true);

    } else {
      setResize(50);
      setMobileImg(false);
    }
  }
  window.addEventListener('resize', size);

  const articles = article.map((content, key) =>
    <Link key={key} className='articles' to={`/blog/${content.title}`}>
      <div><img src={`${mobileImg === false ? content.img : content.img_mobile}`} alt="articleImgs"/></div>
      <div >
        <h5>{content.title}</h5>
        <p>{content.content[0].substring(0, resize)}...</p>
      </div>
    </Link>
  )

  let randoms = [];

  for ( let len = 0; len < 2;) {
    let random = articles[Math.floor(Math.random() * articles.length)];
    if ( randoms.indexOf(random) === -1 ) {
      randoms.push(random);
      len++;
    }
  }


  return (
    <>
      <div>
        {randoms}
      </div>
    </>
  )
}
