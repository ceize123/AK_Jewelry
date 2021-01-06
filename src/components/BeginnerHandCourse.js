import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import {HeaderContent, ListsWithDiamond, ParallaxCricle} from './pagesContent.js';
import {beginnerHandSuit, learnWhat, whyChose} from './diamondListAndArticleContent.js';
import student1 from '../imgs/RD-初階手繪珠寶設計/學生作品1.png';
import student2 from '../imgs/RD-初階手繪珠寶設計/學生作品2.png';
import student3 from '../imgs/RD-初階手繪珠寶設計/學生作品3.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

function BeginnerHandCourse() {
  const emailRule = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    document.getElementById('firstSentInfo').style.display = 'block'
  }

  const handleSentBtn2 = () => {
    document.getElementById('secondSentInfo').style.display = 'block'
    document.getElementById('firstSentInfo').style.display = 'none'
  };

  // use useEffect to set rellax
  // useEffect(() => {
  //   new Rellax(".animate", { // <---- Via class name
  //     speed: -10,
  //     center: false,
  //     wrapper: null,
  //     round: true,
  //     vertical: true,
  //     horizontal: false
  //   });
  // })

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
      <div id='BeginnerHandCoursePage'>
        <HeaderContent title='Beginner' sub='初階手繪珠寶設計'/>
        <main>
          <ul>
            <ListsWithDiamond className='suitFor' title='適合對象...' listName={beginnerHandSuit} />
          </ul>
          <ParallaxCricle text={['歡迎你!', <br/>, 'Andrea 將手把手的帶你一步一步進入珠寶的世界！']}/>
          <ul>
            <ListsWithDiamond className='learnWhat' title='你可以學到...' listName={learnWhat} />
          </ul>
          <ParallaxCricle text={['Andrea老師精心編排，', <br/>, '讓沒有美術設計經驗的同學也能快速上手喔！']}/>
          <ul>
            <ListsWithDiamond className='whyChose' title='為什麼選Andrea Ko珠寶教室?' listName={whyChose} />
          </ul>
          <ParallaxCricle text='我們非常重視與產業接軌以及學生的設計發想能力，打好軟實力基礎，才能走得更長遠。'/>
          <h3 data-aos='fade-up'>上完課你可以做到...</h3>
          <div className='student'>
            <div data-aos='fade-up'><span>學生作品-By Feng</span><img src={student1} alt="Feng"/></div>
            <div data-aos='fade-up'><span>學生作品-By Ivy</span><img src={student2} alt="Ivy"/></div>
            <div data-aos='fade-up'><span>學生作品-By Lillian</span><img src={student3} alt="Lillian"/></div>
          </div>
          <ParallaxCricle text='沒有設計美術的背景，也能完成像這樣的作品，是不是真的很厲害呢！'/>
          <div className='classInfo' data-aos='fade-up' data-aos-delay='600'>
            <h3>課程資訊</h3>
            <h4>上課日期 &lt;2021&gt;</h4>
            <span>
            籌備中，敬請期待！<br/>
            Andrea 老師一年回台灣開課兩次，
            等確立回台開課時間會再通知同學，
            歡迎留下聯絡資訊，才不會漏接開課重要通知喔！
            </span>
            <button className='shortBtn'>開課通知我</button>
            <h4>費用 ＆ 工具</h4>
            <span>NT$26000<br/>
              課上提供上課用具，毋須自備材料。
              另贈兩組珠寶製圖規版。
            </span>
            <h4>上課地點</h4>
            <span>台北市，近西門捷運站 (走路約5分鐘)</span>
            <h4>其他注意事項</h4>
            <span>如繳費完畢，臨時有事無法前來參加課程，不提供退費，但同學可以自行轉讓給其他同學。</span>
          </div>
          <ParallaxCricle text='坐而言不如起而行！現在開始你的斜槓人生！'/>
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
        </main>
      </div>
    </>
  );
}


export default BeginnerHandCourse;
