import React from 'react'
import sale from '../sale3.png'
import laptop from '../laptop.png'
import desktop from '../desktop.png'
import girl from '../girl.png'

export default function Work() {
  return (
   
      <>
      <section className="works px-5 py-5">
        <div className="how">
            <div className="img-box d-flex justify-content-center">
                <img src={sale} alt="sale"></img>
            </div>
            <div className="p-3">
                <div className="text-center">
                    <div className="family">
                        <h2 className="mb-4 pb-2">See How Ticket-IT Works</h2>
                        <p>The complexity of point of sale ticketing processes can be simplified quickly and easily with
                        Ticket-IT.
                        With an automated<br></br>
                        and streamlined ticketing process, all you need to do is focus on the promotion and the
                        conversion
                        of
                        your sale.</p>
                    </div>
                </div>
            </div>
            <div className="section-img text-center d-flex">

                <div className="img-1">
                <img src={laptop} alt="laptop" width="380px"></img>
                </div>
                <img src={desktop} alt="desktop" width="730px"></img>
                <div className="img-1">
                <img src={girl} alt="girl" width="210px" height="300px"/>
                </div>
            </div>
        </div>
    </section>
      </>
  
  )
}
