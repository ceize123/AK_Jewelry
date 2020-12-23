import React, { useState } from 'react';
import {HeaderContent} from './pagesContent.js';

function Courses() {
  return (
    <>
      <div id='coursePage'>
        <HeaderContent title='Beginner' sub='初階手繪珠寶設計'/>
        <main>
        <span>
          ANDREA KO 定居多倫多後成立自有工作室，轉型專案設計師，
          除了教課之外Andrea也提供客製化珠寶訂製服務，無論是婚戒、各種紀念日、
          節慶禮物或者企業品牌的合作項目，都歡迎來訊洽談。
          <br/>
          <br/>
          近期開始籌劃銀飾珠寶系列DRIFTSILVER。DRIFTSILVER 由兩個字組成，
          其中SILVER意指該系列以銀飾為主打， DRIFT則象徵了設計師珠寶應該自由奔放，
          不受框架拘束的精神。
        </span>
        <span>
          ANDREA KO 定居多倫多後成立自有工作室，轉型專案設計師，
          除了教課之外Andrea也提供客製化珠寶訂製服務，無論是婚戒、各種紀念日、
          節慶禮物或者企業品牌的合作項目，都歡迎來訊洽談。
          <br/>
          <br/>
          近期開始籌劃銀飾珠寶系列DRIFTSILVER。DRIFTSILVER 由兩個字組成，
          其中SILVER意指該系列以銀飾為主打， DRIFT則象徵了設計師珠寶應該自由奔放，
          不受框架拘束的精神。
        </span>
        <span>
          ANDREA KO 定居多倫多後成立自有工作室，轉型專案設計師，
          除了教課之外Andrea也提供客製化珠寶訂製服務，無論是婚戒、各種紀念日、
          節慶禮物或者企業品牌的合作項目，都歡迎來訊洽談。
          <br/>
          <br/>
          近期開始籌劃銀飾珠寶系列DRIFTSILVER。DRIFTSILVER 由兩個字組成，
          其中SILVER意指該系列以銀飾為主打， DRIFT則象徵了設計師珠寶應該自由奔放，
          不受框架拘束的精神。
        </span>
        <div className='aboutPageLastBtn' data-aos='fade-up' data-aos-delay='1000'>
          <button>近期課程資訊</button>
          <button>作品集</button>
        </div>
        </main>
      </div>
    </>
  );
}


export default Courses;
