import React from 'react'
import Price from './Price'
import Shelf from './Shelf'
import Complex from './Complex'
import Quickly from './Quickly'
import Feature from './Feature'
import Awesome from './Awesome'
import Category from './Category'
import Image from '../img/afsfds.png'
import Popup from '../Popup'
export default function Deliver() {
    return (
        <>
            <section className="deliver p-5">
                <div className="white family weight">
                    <div className="row px-5 pt-4 g-5">
                        <div className="col-lg-6 col-md-12 ">
                            <div className="img-box">
                                <img src={Image} width="600px" alt=" Image"></img>
                            </div>
                        </div>
                        <div className=" col-lg-6 col-md-12">
                            <div className="infrom">
                                <h3 className="mb-5">Delivering Tickets Which Communicate, Engage and Inform.</h3>
                                <p className="mb-4 pb-4">In store price tickets come in many forms, from a simple price ticket, to a
                                    complex Features
                                    and
                                    Benefits ticket with multiple levels of pricing and corresponding discounts. With over eight
                                    years
                                    of development, Ticket-IT can build and distribute thousands of tickets to thousands of
                                    stores in
                                    seconds.</p>


                                    <Popup/>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Price />
            <Shelf />
            <Complex />
            <Quickly />
            <Feature />
            <Awesome />
            <Category />
        </>

    )
}
