import React from 'react'
import Sel from '../img/SEL+Tickets+blank.png';
import Sel2 from '../img/SEL+Tickets+Populated.png';
import Sel3 from '../img/Printer+image.png';
export default function Shelf() {
  return (
    <>
      <section className="shelf text-center py-5">
        <div className="container">
            <div className="family weight">
                <h2 className="color my-5 py-3">Shelf Edge Labels (SEL’s)</h2>
                <div className="row mb-5">
                    <div className="col-lg-4 col-md-12">
                        <div className="sel p-4 pb-5 my-3">
                            <div className="sel-img mb-4">
                                <img src={Sel} alt="" width="350px"/>
                            </div>
                            <h3 className="color mb-4 pb-2">SEL Ticket Shells</h3>
                            <p>Our standard SEL tickets come in two sizes 20up =
                                74.25 x 40, or a 32up = 74.25 x 25. We readily provide
                                custom sizes, our team is more than happy to help.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="product p-4 pb-3 my-3">
                            <div className="sel-img mb-4">
                                <img src={Sel2} alt="" width="350px"/>
                            </div>
                            <h3 className="color mb-4 pb-2">1, 2 or 3 Products </h3>
                            <p>The SEL tickets can be setup to display multiple products or variations in any
                                combination.
                                You can quickly
                                generate SEL’s en masse by uploading a Ticket-IT batch spreadsheet. View PDF’s of SEL
                                tickets here. </p>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="roll p-4 pb-5 my-3">
                            <div className=" sel-img mb-4 ">
                                <img src={Sel3} alt="" width="350px"/>
                            </div>
                            <h3 className="color mb-4 pb-2">A4 or Roll Fed</h3>
                            <p>For printing, Ticket-IT creates a standard PDF file which can be
                                printed to any standard desktop printer. We can also configure Ticket-IT
                                to print on to roll fed devices. </p>
                        </div>
                    </div>
                    <hr className="color"/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
