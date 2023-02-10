import React from 'react'

export default function What() {
  return (
    <div>
      <>
      <section className="what text-center">
        <div className="our  pt-5 pb-5 px-5 ">
            <div className="family">
                <div id="carouselExampleControls" className="carousel slide mt-5 mb-5 pt-4 pb-5" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <h1>What Our Clients Say</h1>
                        <div className="carousel-item active">
                            <div className="m-2">
                            <h4>India @ Home Head Of Operations</h4>
                            <p>“Ticket-IT has greatly improved our in-store processes, and allows us to spend time on
                                other,
                                more important<br></br> aspects of running the brand.”
                            </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <h4>Production Manager - Parallel Imported</h4>
                            <p>“Ticket-IT is a very easy product to use; with one 15 minute training I already felt like
                                I
                                knew
                                everything that I was<br></br>geting out of the product.”

                            </p>
                        </div>
                        <div className="carousel-item">
                            <h4>National Operations Manager, Metcash (Australian Liquor Marketing)
                            </h4>
                            <p>“The transition from our previous supplier to Ticket-IT, across our six retail brands of
                                more

                                than 1600 liquor stores <br></br>has been seamless. Their support staff provides excellent
                                service
                                for
                                our head office functions and retailers to<br></br> ensure world className in store merchandising
                                execution.”.

                            </p>
                        </div>
                        <div className="carousel-item">
                            <h4>Manager Operations, Farro Fresh
                            </h4>
                            <p>“Ticket-IT gives us the ability to make tickets when necessary, while still making sure
                                that
                                all
                                of our promotional<br></br>data is the same company wide. This gives us a lot of flexibility
                                and

                                confidence in all of our sales campaigns, <br></br>and in our pricing as a whole.”


                            </p>
                        </div>
                        <div className="carousel-item">
                            <h4>Rhapsody General Manager</h4>
                            <p>“I have been using Ticket-IT for less than three weeks and already I am seeing sales
                                improvements where we<br></br> have tickets in place. Already, our in-store processes have
                                improved, by combining Ticket-IT and Vend, every <br></br>price tag has
                                a product image, as well as
                                accurate information, meaning that both customers, and employees <br></br>have an easier time
                                recognizing and keeping track of our products in-store”


                            </p>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
      </>
    </div>
  )
}
