import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Menu'; // هذا الملف يحتوي على Header والمسارات
import Menu from './components/Main'; // هذا الملف يحتوي على قائمة الطعام
import Customer from './components/Customer';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Main />
      <Menu />
      <Customer />
      <About/>
      <Footer />
    </>
  );
}

export default App;
