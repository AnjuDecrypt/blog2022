import React from 'react'
import Priceimg  from '../img/3+backgrounds.png';
import End  from '../img/3+backgrounds+2.png';
import Any from '../img/3+backgrounds+3.png';

export default function Price() {
  return (
    <>
       <section className="price py-5">
        <div className="container">
            <div className="family weight color my-5 pt-3 pb-5">
                <h2 className="text-center"> Price Tickets, Created Simply.</h2>
            </div>
            <div className="row gx-5">
                <div className="col-lg-7 col-md-12">
                    <div className="store my-5">
                        <div className="family weight">
                            <h3 className="color mb-4 pb-3">In store Consistency</h3>
                            <p>The shopper craves consistency and repeatability, primarily to ensure
                                they can get in and out of the store as quickly and effectively as possible. The
                                consistency
                                Ticket-IT offers enables them to review the offer quickly and purchase their required
                                goods
                                effortlessly.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12">
                    <div className="img-box text-center">
                        <img src={Priceimg} width="350px" alt="Price"></img>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12">
                    <div className="img-box text-center">
                        <img src={End} alt="End" width="320px"/>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="store my-5">
                        <div className="family weight">
                            <h3 className="color mb-4 pb-3">Endless Options</h3>
                            <p>TTicket-IT offers a range of standard tickets 1UP, 2UP, 4UP, 8UP or 16UP (A4, A5, A6, A7
                                and A8), horizontal or vertical, as well as SEL 20UP or 32UP, Large format
                                (A3, A2, A1 and larger) and shelf talker 4UP or 6UP. If you need custom sizes or shapes
                                just ask…</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="store my-5">
                        <div className="family weight">
                            <h3 className="color mb-4 pb-3">Any Format</h3>
                            <p>TTicket-IT can facilitate printing large format
                                promotions at your request. Our large format options include A3, A2, A1, A0 and larger.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12">
                    <div className="any img-box text-center">
                        <img src={Any} alt="Any" width="500px"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
