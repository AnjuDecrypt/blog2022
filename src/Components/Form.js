import { useState } from 'react';


export default function Form() {
    const [number, setNumber] = useState();

    const handleContact = (event) => {
        // console.log(event.target.value)
        if(event.target.value < 9) { 
            console.log(0) 
            setNumber("");
        } else { 
            setNumber(event.target.value);
            return event.target.value
        }   
    }
    return (
        <div>
            <input
                type="number"
                id="number"
                onChange={handleContact}
                // value={number}
            />
            {<h2>Number: {number}</h2>}


        </div>
    );
}
