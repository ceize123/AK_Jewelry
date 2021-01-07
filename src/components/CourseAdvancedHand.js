import React, { useEffect } from 'react';
import {
  HeaderContent,
  ListsWithDiamond,
  ParallaxCricle,
  YouCanLearn,
  SignUp,
  TellMeTime
} from './pagesContent.js';
import {advancedHandSuit, advancedLearnWhat, whyChose} from './diamondListAndArticleContent.js';

function CourseAdvancedHand() {
  return (
    <>
      <div id='courseAdvancedHandPage'>
        <HeaderContent title='Advanced' sub='進階手繪珠寶設計'/>
        <main>
        <ListsWithDiamond className='advancedSuitFor' title='適合對象...' listName={advancedHandSuit} />
        <ParallaxCricle text={['歡迎你!', <br/>, 'Andrea 將手把手的帶你一步一步進入珠寶的世界！']}/>
        <ListsWithDiamond className='advancedLearnWhat' title='你可以學到...' listName={advancedLearnWhat} />
        <ParallaxCricle text={['持續精進自己，', <br/>, '任何寶石畫法都難不倒你！']}/>
        <ListsWithDiamond className='whyChose' title='為什麼選Andrea Ko珠寶教室?' listName={whyChose} />
        <ParallaxCricle text='我們重視與產業接軌以及學生的設計發想能力，打好基礎，才能走得更長遠。'/>
        <YouCanLearn />
        <ParallaxCricle text='一步一腳印，上完課後你可以看到自己的成長！'/>
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
  )
}

export default CourseAdvancedHand;
