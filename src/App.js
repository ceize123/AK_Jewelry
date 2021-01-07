import React, { useEffect } from 'react';
import './App.min.css';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import LandingPage from './components/LandingPage.js';
import About from './components/About.js';
import CourseBeginnerHand from './components/CourseBeginnerHand.js';
import CourseAdvance from './components/CourseAdvancedHand.js';
import CourseDigital from './components/CourseDigital.js';
import Course3D from './components/Course3D.js';
import CourseReview from './components/CourseReview.js';
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

const NoMatch = ({ location }) => (
  <div id='noMatch'>
    <header>
      <h1>No match for '<code>{location.pathname}</code>'</h1>
      <p>無此路徑</p>
    </header>
  </div>
)

function App() {
  return (
    <>
    <Router basename={ process.env.PUBLIC_URL }>
      <ScrollToTop>
        <Navbar />
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/about' component={About} />
          <Route path='/CourseBeginner' component={CourseBeginnerHand} />
          <Route path='/CourseAdvance' component={CourseAdvance} />
          <Route path='/CourseDigital' component={CourseDigital} />
          <Route path='/Course3D' component={Course3D} />
          <Route path='/CourseReview' component={CourseReview} />
          <Route path='/porfolio' component={Porfolio} />
          <Route path='/freelance' component={Freelance} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/FAQ' exact component={Faq} />
          {/* 下面是useParams用法，參考ArticleContent.js */}
          <Route path='/blog/:title' exact component={Articles} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
    </>
  );
}

export default App;
