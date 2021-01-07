import React from 'react';
import {
  HeaderContent,
  ListsWithDiamond,
  ParallaxCricle,
  YouCanLearn,
  SignUp,
  TellMeTime
} from './pagesContent.js';
import { reviewSuit, reviewLearnWhat } from './diamondListAndArticleContent.js';

function CourseReview() {
  return (
    <>
      <div id='CourseReviewPage'>
        <HeaderContent title='Rreview For Free' sub='免費複習課程'/>
        <main>
          <ListsWithDiamond className='ReviewSuitFor' title='適合對象...' listName={reviewSuit} />
          <ParallaxCricle text={['歡迎大家回來畫畫珠寶，', <br/>, '談天說地！']}/>
          <ListsWithDiamond className='ReviewLearnWhat' title='你可以學到...' listName={reviewLearnWhat} />
          <ParallaxCricle text='任何珠寶相關問題不怕你問！'/>
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
            <span>免費，無需準備材料</span>
            <h4>上課地點</h4>
            <span>台北市，近西門捷運站 (走路約5分鐘)</span>
            <h4>其他注意事項</h4>
            <span>如繳費完畢，臨時有事無法前來參加課程，不提供退費，但同學可以自行轉讓給其他同學。</span>
          </div>
          <ParallaxCricle text='免費資源！要把握機會唷！'/>
          <SignUp />
          <TellMeTime />
        </main>
      </div>
    </>
  )
}

export default CourseReview;
