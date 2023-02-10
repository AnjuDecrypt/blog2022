import React from 'react'
import { Link } from "react-router-dom";
import image from '../banner2.png'

export default function Header() {
  return (
    <div>
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
              <div className="navbar-nav my-3">

                <Link className='mx-3' to="/">Home</Link>
                <Link className='mx-3' to="/Deliver">Why Ticket-IT</Link>
                <Link className='mx-3' to="/">Features</Link>
                <Link className='mx-3' to="/">Resources</Link>
                <Link className='mx-3' to="/">Contact Us</Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
}
