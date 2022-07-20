import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main';
import ScrollToTop from './utils/ScrollToTop';
import BackToTop from './Components/BackToTop/BackToTop'
import Projects from './pages/ProjectPage/Projects';
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path='/' exact element={<Main/>}/>
          <Route path='/projects' exact element={<Projects/>}/>
        </Routes>
      </Router>
      <BackToTop/>
      </div>
  );
}

export default App;
