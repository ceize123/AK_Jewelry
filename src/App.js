import React, { useEffect } from 'react';
import './App.min.css';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import LandingPage from './components/LandingPage.js';
import About from './components/About.js';
import BeginnerHandCourse from './components/BeginnerHandCourse.js';
import Porfolio from './components/Porfolio.js';
import Freelance from './components/Freelance.js';
import Blog from './components/Blog.js';
import Articles from './components/ArticleContent.js';
import Faq from './components/FAQ.js';
import Footer from './components/Footer.js';

// basename={ process.env.PUBLIC_URL } 建立router需要的

function ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return props.children
}

function App() {
  return (
    <>
    <Router basename={ process.env.PUBLIC_URL }>
      <ScrollToTop>
        <Navbar />
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/about' component={About} />
          <Route path='/beginnerHandCourse' component={BeginnerHandCourse} />
          <Route path='/porfolio' component={Porfolio} />
          <Route path='/freelance' component={Freelance} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/FAQ' exact component={Faq} />
          {/* 下面是useParams用法，參考ArticleContent.js */}
          <Route path='/blog/:title' exact component={Articles} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
    </>
  );
}

export default App;
