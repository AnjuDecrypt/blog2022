import { useState, useEffect } from 'react'
export default function PhoneNumberInput() {
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
            <button  className="me-2 mt-2" onClick={closePopup} type='btn'>X</button>
            </div>
         
          <div className='m-5'>
          <div className='text-center'>
            <h2 className='mb-4'>Book a Presentation of Ticket-IT</h2>
            <p>If you have one store or multiple stores we have lots to show you, just select the type of demonstration you need.</p>
             </div>
          </div>
          <div className='mx-3'>
            <button onClick={closePopup} type='btn'>Close</button>
          </div>
        </div> : ""}
        <div className='demo'>
        <button onClick={handleClickOpen} className="btn btn py-3 px-4 button">Book a Demo</button>
        </div>
      
    </>
  )
}
