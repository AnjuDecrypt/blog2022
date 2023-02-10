import React, { Component } from 'react'
import Holi from '../img/Black+Friday+Tickets.png'
import Holi2 from '../img/Don+miss+out1.png'
import Holi3 from '../img/Don+miss+out2.png'
export class Quickly extends Component {
  render() {
    return (
      <>
         <section className="shelf text-center py-5">
        <div className="container">
            <div className="family weight">
                <h2 className="color my-5 py-3">Quickly Produce Themed Ticketing</h2>
                <div className="row mb-5">
                    <div className="col-lg-4 col-md-12">
                        <div className="sel p-4 pb-5 my-3">
                            <div className="mb-4 quick">
                                <img src={Holi} alt="" width="350px"/>
                            </div>
                            <h3 className="color mb-4 pb-2">Holiday Artwork</h3>
                            <p>Ticket-IT allows changing of background artwork quickly and easily. The holidays offer a chance to make connections with customers. Showing you can give them added
                                 value gifts during the competition holiday. </p>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-12">
                        <div className="product p-4 pb-5 my-3">
                            <div className="mb-4 quick">
                                <img src={Holi2} alt="" width="350px"/>
                            </div>
                            <h3 className="color mb-4 pb-2">Holiday Promotions </h3>
                            <p className="">Promotional and special offer tickets for the holidays create excitement and a buzz for your customers. Ticket-IT provides the flexibility
                                 to communicate creative  with enticing offers,    competition.</p>
                        </div>

                    </div>
                    <div className="col-lg-4  col-md-12">
                        <div className="roll p-4 pb-5 my-3">
                            <div className="mb-4 quick">
                                <img src={Holi3} alt="" width="350px"/>
                            </div>
                            <h3 className="color mb-4 pb-2">One Off Offers  </h3>
                            <p>Whether you decided to make the event last through most of the holiday shopping season, or it’s just a one day special, you can
                                 turn your store into a must visit location, by creating a shopping event with Ticket-IT
                                  quickly and simply. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </>
    )
  }
}

export default Quickly
