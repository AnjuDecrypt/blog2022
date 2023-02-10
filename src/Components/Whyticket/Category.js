import React from 'react'
import Future from '../img/LED+2.png'
import Future1 from '../img/Large+JPG-20140228_Trade+151_0046.png'
import Future2 from '../img/Digiaal+Signage+Large.png'
export default function Category() {
  return (
    <>
      <section className="price py-5">
        <div className="container">
            <div className="family weight color my-5 pt-3 pb-5">
                <h2 className="text-center">Feature, Category and Offer Tickets </h2>
            </div>
            <div className="row gx-5">
                <div className="col-lg-5  col-md-12">
                    <div className="img-box text-center">
                        <img src={Future} alt="" width="400px"/>
                    </div>
                </div>
                <div className="col-lg-7  col-md-12">
                    <div className="store my-5">
                        <div className="family weight">
                            <h3 className="color mb-4 pb-3">Future Proof Your Ticketing</h3>
                            <p>Profitability and success come from efficient store operations, and Electronic Shelf Labels (ESL’s) are at the core of an effective
                                 store, both today and in the future. Ticket-IT integrates into ESL solutions enabling both a paper and digital solution.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7  col-md-12">
                    <div className="store my-5">
                        <div className="family weight">
                            <h3 className="color mb-4 pb-3">Synchronised Pricing</h3>
                            <p>The real strength of Ticket-IT, and the paper/electronic shelf label solution is the unique ability to synchronize your pricing across multiple
                                 channels, such as physical stores, online, physical catalogue, paper or digital applications across multiple locations.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5  col-md-12">
                    <div className="img-box text-center">
                        <img src={Future1} alt="" width="320px"/>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="img-box text-center">
                        <img src={Future2}alt="" width="350px"/>
                    </div>
                </div>
                <div className="col-lg-7  col-md-12">
                    <div className="store my-5">
                        <div className="family weight">
                            <h3 className="color mb-4 pb-3">Peace of Mind </h3>
                            <p>ESL ticketing provides peace of mind throughout your brand. As long as stores have their ESL’s active, you may automatically react to pricing changes. Have control of content 
                                with the push of a button when it comes to pricing and creating promotions. The retail marketing mix at your fingertips.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
