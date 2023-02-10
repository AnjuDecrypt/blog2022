import { useState } from 'react';
import image1 from '../banner2.png'
import Work from '../sections/Work';
import Making from '../sections/Making ';
import Improve from '../sections/Improve';
import SimpleSlider from '../sections/SimpleSlide';
import Book from '../sections/Book';
import PhoneNumberInput from '../PhoneNumberInput';
export default function Home() {
  
  return (
    <div>
      <>
        <section className="slider px-5 pt-5 pb-5 ">
          <div className="row">
            <div className="col-md-6">
              <div className="ticket mt-5 pt-2 d-flex justify-content-between align-items-center">
                <div className="family">
                  <div className="color">
                    <h2 className="mb-4">In-store price ticketing has never been easier.</h2>
                    <h4 className="mb-4 pb-2">“The delivery of Ticket-IT into our 121 stores was recognised
                      as a highlight at our Annual Franchisee Conference. The
                      branding consistency and the accuracy of promo tickets
                      has never been so high in our stores. It has been a total
                      success.”</h4>
                    <p className="mb-5"> - Marketing Manager, Liquorland</p>
                    <PhoneNumberInput/>   
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={image1} alt="image1"></img>
            </div>
          </div>
        </section>
        <Work />
        <Making />
        <Improve />
        <SimpleSlider />
        <Book />
      </>
    </div>
  );
}
