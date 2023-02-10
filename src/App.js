import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Topbar from './Components/Commom/Topbar';
import Header from './Components/Commom/Header';
import Footer from './Components/Commom/Footer';
import Home from './Components/Pages/Home';
import Work from './Components/sections/Work';
import Making from './Components/sections/Making ';
import Improve from './Components/sections/Improve';
import SimpleSlider from './Components/sections/SimpleSlide';
import Book from './Components/sections/Book';
import Deliver from './Components/Whyticket/Deliver';
import Price from './Components/Whyticket/Price';
import Shelf from './Components/Whyticket/Shelf';
import Complex from './Components/Whyticket/Complex';
import Quickly from './Components/Whyticket/Quickly';
import Feature from './Components/Whyticket/Feature';
import Awesome from './Components/Whyticket/Awesome';
import Category from './Components/Whyticket/Category';
import Form from './Components/Form';
import Test from './Components/Test';
import PhoneNumberInput from './Components/PhoneNumberInput';
import Popup from './Components/Popup';


import { Link, BrowserRouter, Routes, Route, } from "react-router-dom";





function App() {
  return (
    <div className="App">
    <BrowserRouter>
     
      <Topbar />
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} /> 
        <Route path="/making" element={<Making/>} />
        <Route path="/improve" element={<Improve/>} />
        <Route path="/slider" element={<SimpleSlider/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/deliver" element={<Deliver/>} />
        <Route path="/price" element={<Price/>} />
        <Route path="/shelf" element={<Shelf/>} />
        <Route path="/complex" element={<Complex/>} />
        <Route path="/quickly" element={<Quickly/>} />
        <Route path="/feature" element={<Feature/>} />
        <Route path="/awesome" element={<Awesome/>} />
        <Route path="/category" element={<Category/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/form" element={<Form/>} />
        <Route path="/PhoneNumberInput" element={<PhoneNumberInput/>}/>
        <Route path="/popup" element={<Popup/>} />
       
      </Routes>
  
       <Footer />
      
    </BrowserRouter>
   
    </div>
  );
}

export default App;
