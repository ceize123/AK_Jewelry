import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/RD-landingpage/logo.png';
import textLogo from '../imgs/RD-landingpage/文字logo.svg';

function Navbar() {
  const [click, setClick] = useState(false);
  const [clickInside, setClickInside] = useState(false);
  const [clickDeep, setClickDeep] = useState(false);

  // toggle
  const handleClick = () => {
    setClick(!click);
    if (window.innerWidth <= 1000) {
      document.getElementById('root').style.position = "fixed";
      if ( click === true ) {
        document.getElementById('root').style.position = "static";
      }
    }
  };
  const handleClickInside = () => setClickInside(!clickInside);
  const handleClickDeep = () => setClickDeep(!clickDeep);
  const handleBoth = () => {
    setClickInside(!clickInside);
    setClickDeep(!clickDeep);
  }

  const closeMobileMenu = () => {
    setClick(false);
    setClickInside(false);
    setClickDeep(false);
    document.getElementById('root').style.position = "static";
  }

  useEffect(() => {
    let lastScrollTop = 0;
    window.onscroll = function() {
      if ( document.getElementById('nav') ) {
        if (window.innerWidth > 1000) {
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          if (scrollTop > lastScrollTop && scrollTop > 81) {
            document.getElementById('nav').style.top = '-81px';
          } else {
            document.getElementById('nav').style.top = '0';
          }
          lastScrollTop = scrollTop;
        } else {
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          if (scrollTop > lastScrollTop && scrollTop > 56) {
            document.getElementById('nav').style.top = '-56px';
          } else {
            document.getElementById('nav').style.top = '0';
          }
          lastScrollTop = scrollTop;
          }
        }
    }
  }, []);

  return (
    <>
      <nav id='nav'>
        <Link to='/'>
          <img className='logo' src={logo} alt='logo'/>
          <img className='textLogo' src={textLogo} alt='logo'/>
        </Link>
        <div className='hamburger' onClick={handleClick}>
          <div className="lines line-top"></div>
          <div className="lines line-mid"></div>
          <div className="lines line-bottom"></div>
        </div>
        <div className={`full-menu ${click ? 'menu-actcive close-hamburger': null}`}>
        <div className={`hamburger ${click ? 'close-hamburger' : null}`} onClick={handleClick}>
          <div className="lines line-top"></div>
          <div className="lines line-mid"></div>
          <div className="lines line-bottom"></div>
        </div>
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
                  <li className={clickInside ? 'active': null}>
                    <div className='insideSelectDiv' onClick={handleClickDeep}>
                      <p className='insideEng' >Jewelry Design
                        <span className='insideTri mobileTri upperTri'></span>
                      </p>
                      <span>手繪珠寶設計</span>
                    </div>
                    <div className='insideTri'></div>
                    <div className={`deepMenu ${clickDeep ? 'deepMenu-active': null}`}>
                      <div id='deepIcon'>
                        <i className="las la-angle-left" onClick={handleClickDeep}></i>
                        <span onClick={handleBoth}>X</span>
                      </div>
                      <div className='insideTransparent' onClick={handleBoth}></div>
                      <ul className='deepUl'>
                        <i className="fas fa-chevron-left"></i>
                        <li className={clickDeep ? 'active': null}>
                          <Link to='/CourseBeginner' onClick={closeMobileMenu}>
                            <div className='insideSelectDiv'>
                              <p className='insideEng deepEng'>Beginner</p>
                              <span>初階手繪珠寶</span>
                            </div>
                          </Link>
                        </li>
                        <li className={clickDeep ? 'active': null}>
                          <Link to='/CourseAdvance' onClick={closeMobileMenu}>
                            <div className='insideSelectDiv'>
                              <p className='insideEng deepEng'>Advanced</p>
                              <span id='deepUlAdvanced'>進階手繪珠寶</span>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className={clickInside ? 'active': null}>
                    <Link to='/CourseDigital' onClick={closeMobileMenu}>
                      <div className='insideSelectDiv'>
                        <p className='insideEng'>Digital Jewelry Design</p>
                        <span>數位珠寶設計</span>
                      </div>
                    </Link>
                  </li>
                  <li className={clickInside ? 'active': null}>
                    <Link to='/Course3D' onClick={closeMobileMenu}>
                      <div className='insideSelectDiv'>
                        <p className='insideEng'>3D Cad</p>
                        <span>3D珠寶建模</span>
                      </div>
                    </Link>
                  </li>
                  <li className={clickInside ? 'active': null}>
                    <Link to='/CourseReview' onClick={closeMobileMenu}>
                      <div className='insideSelectDiv'>
                        <p className='insideEng'>Review For Free</p>
                        <span>免費複習課程</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={click ? 'active': null}>
              <Link to='/portfolio' onClick={handleClick}>
                <div className='selectDiv'>
                  <p>Portfolio</p>
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
            <li id='FaqList' className={click ? 'active': null}>
              <Link to='/FAQ' onClick={handleClick}>
                <div className='selectDiv'>
                  <p>FAQ</p>
                  <span>問與答</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
