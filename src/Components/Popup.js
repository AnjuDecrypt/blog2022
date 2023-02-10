import { useState, useEffect } from 'react'
export default function Popup() {
  const [popup, setPopup] = useState(false)
  const handleClickOpen = () => {                          
    setPopup(!popup);
  }
  const closePopup = () => {
    setPopup(false)
  }
  useEffect(() => {
    let handlerClose = () => {
      setPopup(false);
    };
    document.addEventListener("mousedown", handlerClose)
  });
  return (                                                                   
    <>

      {popup ?
        <div className='box'>
        <div className='close'>
          <button className="mt-2 me-2" onClick={closePopup} type='btn'>X</button>
          </div>
          <div className='box2 my-3 mx-3 p-5'>
          <div className='text-center'>
            <h2 className='mb-3'>Delivering Tickets Which Communicate, Engage and Inform. </h2>
            <p>In store price tickets come in many forms, from a simple price ticket, to a complex Features and Benefits ticket with 
            multiple levels of pricing and corresponding discounts.
             With over eight years of development, Ticket-IT can build and distribute thousands of tickets to thousands of stores in seconds.</p>
              </div>
            <button onClick={closePopup} type='btn'>Close</button>
          </div>
        </div> : ""}
      <div className='demo'>
        <button onClick={handleClickOpen} className="btn btn py-3 px-4 button">Book a Demo</button>
      </div>
    </>
  )
}
