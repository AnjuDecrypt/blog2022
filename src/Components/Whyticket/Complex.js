import React from 'react'
import List from '../img/List+tickets.png';
import List2 from '../img/Complex+Table+Tickets.png';
import List3 from '../img/Complex+Features+Tickets.png';
export default function Complex() {
  return (
    <>
      <section className="price py-5">
        <div className="container">
            <div className="family weight color my-5 pt-3 pb-5">
                <h2 className="text-center"> Complex Features, Tables and List Tickets.</h2>
            </div>
            <div className="row gx-5">
                <div className="col-lg-5 col-md-12">
                    <div className="img-box text-center">
                        <img src={List} alt="" width="400px"/>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="store my-5">
                        <div className="family weight">
                            <h3 className="color mb-4 pb-3">List Tickets</h3>
                            <p>A list ticket is a great way to save space and highlight a promotion on a range of
                                products. They are also ideal
                                for identifying a product and the variations of that product whether it is size, style,
                                colour, or brand.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="store my-5">
                        <div className="family weight">
                            <h3 className="color mb-4 pb-3">Info Table or Matrix </h3>
                            <p>The matrix ticket will often carry a matrix of both pricing and specification.
                                This type of ticket can use icons, images, graphics, and tables to communicate
                                large amounts of information the production of which is all simplified within
                                Ticket-IT.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12">
                    <div className="img-box text-center">
                        <img src={List2} alt="" width="320px"/>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12">
                    <div className="img-box text-center">
                        <img src={List3}alt="" width="350px"/>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="store my-5">
                        <div className="family weight">
                            <h3 className="color mb-4 pb-3">Features & Benefits</h3>
                            <p>The Features & Benefits templates itemize the features and benefits of a product.
                                This type of ticket typically adopts bullet points, highlighting the value of
                                the product. They also display features, benefits, specifications or other
                                relevant information.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
