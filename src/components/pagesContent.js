import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import diamond from '../imgs/RD-landingpage/圓小鑽石.png';
import circle from '../imgs/RD-初階手繪珠寶設計/圈圈.svg';
import student1 from '../imgs/RD-初階手繪珠寶設計/學生作品1.png';
import student2 from '../imgs/RD-初階手繪珠寶設計/學生作品2.png';
import student3 from '../imgs/RD-初階手繪珠寶設計/學生作品3.png';
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

export function YouCanLearn(props) {

  return (
    <>
    <h3 data-aos='fade-up'>上完課你可以做到...</h3>
    <div className='student'>
      <div data-aos='fade-up'><span>學生作品-By Feng</span><img src={student1} alt="Feng"/></div>
      <div data-aos='fade-up'><span>學生作品-By Ivy</span><img src={student2} alt="Ivy"/></div>
      <div data-aos='fade-up'><span>學生作品-By Lillian</span><img src={student3} alt="Lillian"/></div>
    </div>
    </>
  )
}

export function SignUp() {
  const emailRule = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    document.getElementById('firstSentInfo').style.display = 'block'
  }

  const handleSentBtn2 = () => {
    document.getElementById('secondSentInfo').style.display = 'block'
    document.getElementById('firstSentInfo').style.display = 'none'
  };

  return (
    <>
    <div className='signUp'>
      <p>我要報名！</p>
      <div className='inputSection'>
        <form id='form' onSubmit={handleSubmit(onSubmit)}>
          <div className='select star'>
            <select name='course' ref={register({ required: true })}>
              <option id='firstOpt' value=''>請選擇課程</option>
              <option value='beginner'>初階手繪珠寶設計</option>
              <option value='advanced'>進階手繪珠寶設計</option>
              <option value='digital'>數位珠寶設計</option>
              <option value='3D'>3D珠寶建模</option>
            </select>
            {errors.course && <span id='errorD'>請選擇課程</span>}
            <div className='signUpTri'></div>
          </div>
          <div className='star'>
            <input type='text' placeholder='姓名' name='name' ref={register({ required: true })}/>
            {errors.name && <span id='errorN'>請輸入姓名</span>}
          </div>
          <div>
            <input type='text' placeholder='聯絡電話' name='tel' ref={register}/>
          </div>
          <div className='star'>
            <input type='text' placeholder='電子信箱' name='email' ref={register({ required: true, pattern: emailRule })}/>
            {errors.email && <span id='errorE'>信箱格式錯誤</span>}
          </div>
          <div>
            <input type='text' placeholder='Line/社交軟體' name='app' ref={register}/>
          </div>
          <div className='star'>
            <input type='text' placeholder='從何得知課程訊息' name='where' ref={register({ required: true })}/>
            {errors.where && <span id='errorW'>請輸入從何得知課程訊息</span>}
          </div>
          <div>
            <input type='text' placeholder='是否有珠寶、設計背景' name='learned' ref={register}/>
          </div>
          <div>
            <textarea cols='10' rows='5' placeholder='對課程的期望？' name='expectation' ref={register}></textarea>
          </div>
          <button className='shortBtn' type='submit' id='submit'>送出</button>
        </form>
        <div id='firstSentInfo' className='sentInfo'>
          <p className='x' onClick={() => document.getElementById('firstSentInfo').style.display = 'none'}>X</p>
          <p>感謝您的填寫！<br/>已將匯款資訊傳送至您填寫的信箱，請確認。</p>
          <span onClick={handleSentBtn2}>未收到信件，請重新傳送</span>
        </div>
        <div id='secondSentInfo' className='sentInfo'>
          <p className='x' onClick={() => document.getElementById('secondSentInfo').style.display = 'none'}>X</p>
          <p>已再次發送匯款資訊信件，請確認。</p>
          <span>若還是未收到，請聯絡Facebook粉專或Line，我們會盡快與您聯絡，不好意思造成您的不便。</span>
          <div className='icons'>
            <i className="lab la-line"></i>
            <i className="lab la-facebook"></i>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export function TellMeTime() {
  return (
    <>
    <div className='tellMeTime'  data-aos='fade-up' data-aos-delay='500'>
      <p>目前開課時間都無法配合<span id='comma'>，</span><span>怎麼辦？</span></p>
      <p>別擔心！<span>告訴我們你可以的時間</span></p>
      <button className='shortBtn'>填寫</button>
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
