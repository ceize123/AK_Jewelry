import React, { useEffect } from 'react';
import {
  HeaderContent,
  ListsWithDiamond,
  ParallaxCricle,
  YouCanLearn,
  SignUp,
  TellMeTime} from './pagesContent.js';
import {beginnerHandSuit, beginnerLearnWhat, whyChose} from './diamondListAndArticleContent.js';
import Aos from 'aos';
import 'aos/dist/aos.css';

function CourseBeginnerHand() {


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
      <div id='courseBeginnerHandPage'>
        <HeaderContent title='Beginner' sub='初階手繪珠寶設計'/>
        <main>
          <ListsWithDiamond className='beginnerSuitFor' title='適合對象...' listName={beginnerHandSuit} />
          <ParallaxCricle text={['歡迎你!', <br/>, 'Andrea 將手把手的帶你一步一步進入珠寶的世界！']}/>
          <ListsWithDiamond className='beginnerLearnWhat' title='你可以學到...' listName={beginnerLearnWhat} />
          <ParallaxCricle text={['Andrea老師精心編排，', <br/>, '讓沒有美術設計經驗的同學也能快速上手喔！']}/>
          <ListsWithDiamond className='whyChose' title='為什麼選Andrea Ko珠寶教室?' listName={whyChose} />
          <ParallaxCricle text='我們非常重視與產業接軌以及學生的設計發想能力，打好軟實力基礎，才能走得更長遠。'/>
          <YouCanLearn />
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
          <SignUp />
          <TellMeTime />
        </main>
      </div>
    </>
  );
}


export default CourseBeginnerHand;
