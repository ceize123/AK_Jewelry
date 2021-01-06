import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import {HeaderContent, ListsWithDiamond} from './pagesContent.js';
import {provide} from './diamondListAndArticleContent.js';
import porfolio17 from '../imgs/RD-作品集/設計作品17.png';
import porfolio18 from '../imgs/RD-作品集/設計作品18.png';
import porfolio19 from '../imgs/RD-作品集/設計作品19.png';

function Freelance() {
  const emailRule = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    document.getElementById('firstSentInfo').style.display = 'block'
  }


  return (
    <>
      <div id='freelancePage'>
        <HeaderContent title='Freelance' sub='企業合作/個人訂製'/>
        <main>
          <ul>
            <ListsWithDiamond className='weProvide' title='我們提供' listName={provide} />
          </ul>
          <p>ANDREA KO 定居多倫多後成立自有工作室，轉型專案設計師，除了教課之外Andrea也提供客製化珠寶訂製服務，無論是婚戒、各種紀念日、節慶禮物或者企業品牌的合作項目，都歡迎來訊洽談。</p>
          <div>
            <img src={porfolio17} alt='Design1'/>
            <img src={porfolio18} alt='Design2'/>
            <img src={porfolio19} alt='Design3'/>
          </div>
          <Link to='/porfolio'>
            <button className='longBtn'>作品集</button>
          </Link>
          <div className='signUp'>
            <p>合作表單</p>
            <div id='coop' className='inputSection'>
              <form id='form' onSubmit={handleSubmit(onSubmit)}>
                <div className='star'>
                  <input type='text' placeholder='姓名' name='name' ref={register({ required: true })}/>
                  {errors.name && <span id='errorN'>請輸入姓名</span>}
                </div>
                <div className='star'>
                  <input type='text' placeholder='聯絡電話' name='tel' ref={register({ required: true })}/>
                  {errors.tel && <span id='errorT'>請輸入聯絡電話</span>}
                </div>
                <div className='star'>
                  <input type='text' placeholder='電子信箱' name='email' ref={register({ required: true, pattern: emailRule })}/>
                  {errors.email && <span id='errorE'>信箱格式錯誤</span>}
                </div>
                <div className='star'>
                  <input type='text' placeholder='商業用途/個人用途' name='purpose' ref={register}/>
                  {errors.purpose && <span id='errorP'>請輸入商業用途/個人用途</span>}
                </div>
                <div>
                  <input type='text' placeholder='公司行號' name='companyTitle' ref={register}/>
                </div>
                <div className='star'>
                  <textarea cols='10' rows='5' placeholder='希望合作項目/產品' name='subject' ref={register({ required: true })}></textarea>
                  {errors.subject && <span id='errorS'>請輸入希望合作項目/產品</span>}
                </div>
                <div>
                  <textarea cols='10' rows='5' placeholder='更多合作細節詢問' name='detail' ref={register}></textarea>
                </div>
                <button className='shortBtn' type='submit' id='submit'>送出</button>
              </form>
              <div id='firstSentInfo' className='sentInfo'>
                <p className='x' onClick={() => document.getElementById('firstSentInfo').style.display = 'none'}>X</p>
                <p>感謝您的填寫！<br/>我們會盡快與您聯絡！</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}


export default Freelance;
