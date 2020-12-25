import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/RD-landingpage/logo.png';
import Footer from '../components/Footer.js';

function Navbar() {
  const [click, setClick] = useState(false);
  const [clickInside, setClickInside] = useState(false);
  const [clickDeep, setClickDeep] = useState(false);
  const [clickDeep2, setClickDeep2] = useState(false);

  // toggle
  const handleClick = () => setClick(!click);
  const handleClickInside = () => setClickInside(!clickInside);
  const handleClickDeep = () => setClickDeep(!clickDeep);
  const handleClickDeep2 = () => setClickDeep2(!clickDeep2);
  const handleBoth = () => {
    setClickInside(!clickInside);
    setClickDeep(!clickDeep);
  }

  const handleBoth2 = () => {
    setClickInside(!clickInside);
    setClickDeep2(!clickDeep2);
  }

  const closeMobileMenu = () => {
    setClick(false);
    setClickInside(false);
    setClickDeep(false);
    setClickDeep2(false);
  }

  return (
    <>
      <nav>
        <Link to='/'>
          <img src={logo} alt='logo'/>
        </Link>
        <div className={`hamburger ${click ? 'close-hamburger' : null}`} onClick={handleClick}>
          <div className="lines line-top"></div>
          <div className="lines line-mid"></div>
          <div className="lines line-bottom"></div>
        </div>
        <div className={`full-menu ${click ? 'menu-actcive': null}`}>
          <ul>
            <li className={click ? 'active': null}>
              <Link to='/about' onClick={closeMobileMenu}>
                <div className='selectDiv'>
                  <p>About</p>
                  <span>師資介紹</span>
                </div>
              </Link>
            </li>
            <li className={click ? 'active': null}>
              <div className='selectDiv' onClick={handleClickInside}>
                <p>Courses<span className='tri'></span></p>
                <span>課程</span>
              </div>
              <div className={`insideMenu ${clickInside ? 'insideMenu-active': null}`}>
                <div className='transparent' onClick={handleClickInside}></div>
                <ul className='insideUl'>
                  <p className='insideEng' onClick={handleClickDeep}>Jewelry Design
                    <span className='insideTri mobileTri upperTri'></span>
                  </p>
                  <li>手繪珠寶設計<div className='insideTri'></div>
                    <div className={`deepMenu ${clickDeep ? 'deepMenu-active': null}`}>
                      <div className='insideTransparent' onClick={handleBoth}></div>
                      <ul className='deepUl'>
                        <Link to='/BeginnerHandCourse' onClick={closeMobileMenu}>
                          <p className='insideEng deepEng'>Beginner</p>
                          <li>初階手繪珠寶</li>
                        </Link>
                        <p className='insideEng deepEng'>Advanced</p>
                        <li>進階手繪珠寶</li>
                      </ul>
                    </div>
                  </li>
                  <p className='insideEng' onClick={handleClickDeep2}>Digital Jewelry Design
                    <span className='insideTri mobileTri'></span>
                  </p>
                  <li>數位珠寶設計<div className='insideTri'></div>
                    <div className={`deepMenu2 ${clickDeep2 ? 'deepMenu2-active': null}`}>
                      <div className='insideTransparent' onClick={handleBoth2}></div>
                      <ul className='deepUl'>
                        <p className='insideEng deepEng'>Beginner</p>
                        <li>初階數位珠寶</li>
                        <p className='insideEng deepEng'>Advanced</p>
                        <li>進階數位珠寶</li>
                      </ul>
                    </div>
                  </li>
                  <p className='insideEng'>3D Cad</p>
                  <li>3D珠寶建模</li>
                  <p className='insideEng'>Review For Free</p>
                  <li>免費複習課程</li>
                </ul>
              </div>
            </li>
            <li className={click ? 'active': null}>
              <Link to='/porfolio' onClick={handleClick}>
                <div className='selectDiv'>
                  <p>Porfolio</p>
                  <span>作品集</span>
                </div>
              </Link>
            </li>
            <li className={click ? 'active': null}>
              <Link to='/freelance' onClick={handleClick}>
                <div className='selectDiv'>
                  <p>Freelance</p>
                  <span>企業合作/個人訂製</span>
                </div>
              </Link>
            </li>
            <li className={click ? 'active': null}>
              <Link to='/blog' onClick={handleClick}>
                <div className='selectDiv'>
                  <p>Blog</p>
                  <span>部落格</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <Footer className={`hamburger-footer ${click ? 'full-hamburger-footer-actcive': null}`}/>
      </nav>
    </>
  );
}

export default Navbar;
