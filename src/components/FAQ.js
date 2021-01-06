import React, { useState } from 'react';
import { HeaderContent } from './pagesContent.js';

function Faq() {
  const [open, setOpen] = useState();

  return (
    <>
      <div id='FaqPage'>
        <HeaderContent title='FAQ' sub='問與答'/>
        <main>
        <div onClick={() => setOpen(1)}>
          <h3>Q：沒有相關基礎也可以上課嗎？</h3>
          <p style={{display: open === 1 ? 'block' : 'none'}}>
            A: 參與課程的學生許多都不是藝術相關背景，因此我們特別編製適合初學學員的課程內容，
            沒有基礎也可以上喔。課程結束後，學員能在設計知識與繪畫方面有顯著進步成果，
            也能獨立操作完整設計流程。
          </p>
        </div>
        <div onClick={() => setOpen(2)}>
          <h3>Q：上課地點？人數？課程時間如何計算?</h3>
          <p style={{display: open === 2 ? 'block' : 'none'}}>
            A: 目前只有在台北開課，有邀約的情況才會南下開班，教室距離西門捷運站約五分鐘路程。
            一班的人數控制在3人左右，一堂課是3個小時，以初階班來舉例就是10堂課，
            30小時。如果是開設白天班，則大多會一天上兩堂課10:00~16:30，在5個白天上完十堂課。
          </p>
        </div>
        <div onClick={() => setOpen(3)}>
          <h3>Q：報名流程？</h3>
          <p style={{display: open === 3 ? 'block' : 'none'}}>
            A: 請至課程頁面的最下方填寫報名表，之後會收到郵件通知相關細節與轉帳資訊。
            繳費後才算是完成報名手續喔！匯款完成後也請再與我們聯繫，
            除了確認完成報名程序外我們也會再寄發上課相關訊息給同學。
            請務必確認填寫正確的郵件信箱，已順利進行報名流程。
          </p>
        </div>
        <div onClick={() => setOpen(4)}>
          <h3>Q：學費可以刷卡嗎？需要一次付清？</h3>
          <p style={{display: open === 4 ? 'block' : 'none'}}>
            A: AK珠寶教室現階段只接受轉帳匯款喔！因為是小班教學，約3人滿班，收到匯款後才確定保留名額。
          </p>
        </div>
        <div onClick={() => setOpen(5)}>
          <h3>Q：數位班和手繪班有什麼不同？</h3>
          <p style={{display: open === 5 ? 'block' : 'none'}}>
            A：手繪班我們主要是運用水彩、麥克筆等媒材下去進行創作，
            課堂上除了產業知識外還會示範如何完成鑽石、彩色寶石及金屬跟戒指3D透視圖等等的畫法。
            教你如何從草稿到完整的設計圖。課程結束後，學員就有能力可以獨自完成設計稿。
            電繪班主要是著重在軟體的運用，不會再重複教初階班的上色技法。
            因為數位繪圖比手繪有更多的彈性，所以我們在課堂上會示範另外一套不同的創作方法，
            包括鑽石跟彩寶的不同呈現方式等等。
          </p>
        </div>
        <div onClick={() => setOpen(6)}>
          <h3>Q：初階班上完能學到什麼程度呢？</h3>
          <p style={{display: open === 6 ? 'block' : 'none'}}>
            A: 除了手繪技巧方面，初階課程會帶入寶石與設計相關知識與注意事項。
            初階班將學習鑽石與常見有色寶石的畫法，也會示範金屬的繪製技巧、
            各式鑲嵌表示技法與整個設計的流程。課程結束後，學員可以獨立完成像是項鍊、
            手鍊、耳環與胸針等等的設計稿喔！
          </p>
        </div>
        <div onClick={() => setOpen(7)}>
          <h3>Q：課程結束後有問題可以另外請教老師嗎？</h3>
          <p style={{display: open === 7 ? 'block' : 'none'}}>
            A: 珠寶相關的問題都可以詢問喔！教室也會不定期舉辦舊生不收費的複習課程，
            歡迎同學回來磨練自己的技巧。
          </p>
        </div>
        </main>
      </div>
    </>
  )
}

export default Faq;
