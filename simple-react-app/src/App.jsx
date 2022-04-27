import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Landing from './components/landing';
import Courses from './components/courses';
import Teachers from './components/teachers'
import About from './components/about';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Header />

        <div className="App">
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/about' element={<About />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/teachers' element={<Teachers />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;
