import React from 'react'
import Cate from '../img/Events+Tickets.png'
import Cate1 from '../img/Single+DS+Tickets.png'
import Cate2 from '../img/2Degrees.png'
export default function Feature() {
  return (
    <>
      <section className="price py-5">
        <div className="container">
            <div className="family weight color my-5 pt-3 pb-5">
                <h2 className="text-center"> Feature, Category and Offer Tickets</h2>
            </div>
            <div className="row gx-5">
                <div className="col-lg-5  col-md-12">
                    <div className="img-box text-center">
                        <img src={Cate} alt="" width="400px"/>
                    </div>
                </div>
                <div className="col-lg-7  col-md-12">
                    <div className="store my-5">
                        <div className="family weight">
                            <h3 className="color mb-4 pb-3">Category Tickets</h3>
                            <p>An Offer, Campaign or Promotional Event ticket is typically high contrast with bright colours as a background. 
                                They clearly highlight to the shopper the difference between standard tickets and the promotional offer tickets.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7  col-md-12">
                    <div className="store my-5">
                        <div className="family weight">
                            <h3 className="color mb-4 pb-3">No Limitations </h3>
                            <p>Technically, within Ticket-IT there are very few limitations to the templates we can create for you. All the tickets on this page can be created and distributed in seconds.
                                 Including barcodes, double sided printing, crop marks & bleed, informational icons, and so much more.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5  col-md-12">
                    <div className="img-box text-center">
                        <img src={Cate1} alt="" width="320px"/>
                    </div>
                </div>
                <div className="col-lg-5  col-md-12">
                    <div className="img-box text-center">
                        <img src={Cate2} alt="" width="350px"/>
                    </div>
                </div>
                <div className="col-lg-7  col-md-12">
                    <div className="store my-5">
                        <div className="family weight">
                            <h3 className="color mb-4 pb-3">Price, Term and Deal </h3>
                            <p>Ticket-IT has the capability to communicate complex information and still focus on drawing in your customer. The shopper will look for a promotion before they look for a product.
                                 The largest element on a promotional ticket should be the savings or the discounted price.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
