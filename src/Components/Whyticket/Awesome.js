import React from 'react'
import Staff from '../img/Artwork+Automation.png'
import Staff1 from '../img/images+and+iconsTickets.png'
import Staff3 from '../img/Features+and+Icons+Tickets.png'

export default function Awesome() {
  return (
    <>
      <section className="shelf text-center py-5">
        <div className="container">
            <div className="family weight">
                <h2 className="color my-5 py-3">Awesome Flexibility in Ticketing</h2>
                <div className="row mb-5">
                    <div className="col-lg-4  col-md-12">
                        <div className="sel p-4 pb-5 my-3">
                            <div className="mb-4 black">
                                <img src={Staff} alt="" width="350px"/>
                            </div>
                            <h3 className="comp color mb-4 pb-2">Complex Product Tickets</h3>
                            <p>Ticket-IT empowers retailers to action efficient and effective artwork automation processes, enabling the 
                                production of sophisticated tickets which can link multiple products or variations by merging multiple
                                 diagrams, specifications and colours.</p>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-12">
                        <div className="product p-4 pb-5 my-3">
                            <div className="mb-4 black">
                                <img src={Staff1} alt="" width="350px"/>
                            </div>
                            <h3 className=" comp color mb-4 pb-2">Staff Pick Tickets</h3>
                            <p className="">Ticket-IT can simplify the creation of “staff pick” messaging. Carefully designed tickets can be used to capture staff 
                                thoughts and preferences, engaging the shopper with relevant information and highlighting the products qualities.</p>
                        </div>

                    </div>
                    <div className="col-lg-4  col-md-12">
                        <div className="roll p-4 pb-5 my-3">
                            <div className="mb-4 black">
                                <img src={Staff3} alt="" width="350px"/>
                            </div>
                            <h3 className=" comp color mb-4 pb-2">Product Comparison Tickets</h3>
                            <p>Ticket-IT ensures repeatability and consistency in price ticketing as it takes time for a shopper to understand the layout and various messages contained within a ticket type. Once the
                                 understood.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
