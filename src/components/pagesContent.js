import React, {useEffect} from 'react';
import diamond from '../imgs/RD-landingpage/圓小鑽石.png';
import circle from '../imgs/RD-初階手繪珠寶設計/圈圈.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

export function HeaderContent(props) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offsetTop: 80,
      delay: 500,
    });
  }, []);

  return (
    <>
      <header data-aos='fade-up'>
        <h1>{props.title}</h1>
        <p>{props.sub}</p>
      </header>
    </>
  )
}

export function ListsWithDiamond(props) {
  // map method
  const listName = props.listName;
  const listsContent = listName.map((content, key) =>
  <li key={key}><img src={diamond}
      className='diamond'
      alt="diamond"/>{content}</li> )


  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offsetTop: 80,
      delay: 500,
    });
  }, []);

  return (
    <>
      <div className={`listBlock ${props.className}`}>
        <h3 data-aos='fade-up'>{props.title}</h3>
        <ul data-aos='fade-up'>{listsContent}</ul>
      </div>
    </>
  )
}

export function ParallaxCricle(props) {

  return (
    <>
    <div className='parallax'>
      <img src={circle} alt="circle"/>
      <div>
        <p className={props.rellax}>{props.text}</p>
      </div>
    </div>
    </>
  )
}
