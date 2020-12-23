import React, { useState } from 'react';
import {HeaderContent, ListsWithDiamond} from './pagesContent.js';
import {beginnerHandSuit, learnWhat, whyChose} from './diamondContent.js';
import circle from '../imgs/RD-初階手繪珠寶設計/圈圈.svg';

function BeginnerHandCourse() {
  return (
    <>
      <div id='BeginnerHandCoursePage'>
        <HeaderContent title='Beginner' sub='初階手繪珠寶設計'/>
        <main>
          <ListsWithDiamond className='suitFor' title='適合對象...' listName={beginnerHandSuit} />
          <div className='parallax'><img src={circle} alt="circle"/></div>
          <ListsWithDiamond className='learnWhat' title='你可以學到...' listName={learnWhat} />
          <ListsWithDiamond className='whyChose' title='為什麼選Andrea Ko珠寶教室?' listName={whyChose} />

        </main>
      </div>
    </>
  );
}


export default BeginnerHandCourse;
