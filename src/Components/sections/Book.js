import React from 'react'

export default function book() {
  return (
    <div>
      <>
      <section className="book py-5 text-center">
        <div className="family"></div>
        <h2 className="mt-5 mb-4 pb-3">Book a Demo</h2>
        <p className="mb-4">We’ll prepare a proposal and walk you through every step of the process.</p>

        <a href="/">
        <div className="demo">
        <button type="button" className="btn btn py-3 px-4 mb-4">Book Demo</button>
        </div>
        </a>
    </section>
      </>
    </div>
  )
}
