import React, { useEffect } from 'react';
import './App.min.css';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import LandingPage from './components/LandingPage.js';
import About from './components/About.js';
import Courses from './components/Courses.js';
import Porfolio from './components/Porfolio.js';
import Freelance from './components/Freelance.js';
import Blog from './components/Blog.js';
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
          <Route path='/courses' component={Courses} />
          <Route path='/porfolio' component={Porfolio} />
          <Route path='/freelance' component={Freelance} />
          <Route path='/blog' component={Blog} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
    </>
  );
}

export default App;
