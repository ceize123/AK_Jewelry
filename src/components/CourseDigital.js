import React from 'react';
import {
  HeaderContent,
  ListsWithDiamond,
  ParallaxCricle,
  YouCanLearn,
  SignUp,
  TellMeTime
} from './pagesContent.js';
import {digitalSuit, advancedLearnWhat, whyChose} from './diamondListAndArticleContent.js';

function CourseDigital() {
  return (
    <>
      <div id='courseDigitalPage'>
        <HeaderContent title='Digital' sub='數位珠寶設計'/>
        <main>
        <ListsWithDiamond className='digitalSuitFor' title='適合對象...' listName={digitalSuit} />
        <ParallaxCricle text={['歡迎你!', <br/>, 'Andrea 將手把手的帶你一步一步進入珠寶的世界！']}/>
        <ListsWithDiamond className='advancedLearnWhat' title='你可以學到...' listName={advancedLearnWhat} />
        <ParallaxCricle text={['手繪珠寶不能不會！', <br/>, '數位珠寶必須上手！']}/>
        <ListsWithDiamond className='whyChose' title='為什麼選Andrea Ko珠寶教室?' listName={whyChose} />
        <ParallaxCricle text='我們重視與產業接軌以及學生的設計發想能力，打好基礎，才能走得更長遠。'/>
        <YouCanLearn />
        <ParallaxCricle text='與手繪珠寶的感覺不同，不管是哪種都是表達設計很重要的媒介喔！'/>
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
            建議自備平板(iPad)與觸控筆(Apple Pencil)，
            若無平板及觸控筆請於第一堂課前提前告知，可借用課堂的平板及觸控筆。
          </span>
          <h4>課上軟體可使用於下列iPad機型：</h4>
          <ul>
            <li>12.9 英寸iPad Pro （第一、二、三和四代）</li>
            <li>11 英寸iPad Pro（第一、二代）</li>
            <li>10.5 英寸iPad Pro</li>
            <li>9.7 英寸iPad Pro</li>
            <li>iPad (第八代)</li>
            <li>iPad（第七代)</li>
            <li>iPad（第六代）</li>
            <li>iPad （第五代）</li>
            <li>iPad mini（第五代）</li>
            <li>iPad mini 4</li>
            <li>iPad Air（第4 代）</li>
            <li>iPad Air（第三代)</li>
            <li>iPad Air 2</li>
          </ul>
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

export default CourseDigital;
