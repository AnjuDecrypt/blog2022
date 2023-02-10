import React from 'react'
import make from '../make.png'
export default function Making () {
  return (
    <div>
      <>
      <section className="making px-5">
        <div className="creat mt-5 pt-5 mb-5 pb-3">
            <div className="img-box">
                <img src={make} alt="make" width="980px"/>

                <div className="box p-5">
                    <div className="color">
                        <div className="family">
                            <h3 className="ps-4">Making the Creation and Management of Retail Price Ticketing Easy.</h3>
                            <p className="ps-4">The value of in store price ticketing can never be 
                                underestimated by retailers. The importance of accurate,
                                meaningful and on-brand price tickets is critical to any sale. 
                                The mantra 'no ticket, no sale' is one of the first things retailers 
                                learn and the silent salesperson, our humble price tag, is always 
                                the most efficient and effective communicator to convert a sale.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </>
    </div>
  )
}
