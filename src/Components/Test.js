import { useState } from 'react';
import Icon from 'react-icons-kit';
import {basic_eye} from 'react-icons-kit/linea/basic_eye'
import {basic_eye_closed} from 'react-icons-kit/linea/basic_eye_closed'

export default function Test() {
    const [type, setType] = useState("password");

   
    return (
        <div className='from m-5'>
            <input type={type}
                className="custom-input"/>
           {type==="password"?(
            <span className='icon-span'
            onClick={()=>setType("text")}>
            <Icon icon={basic_eye_closed} size={18}/>
            </span>
           ):(
            <span className='icon-span'
            onClick={()=>setType("password")}>
            <Icon icon={basic_eye} size={18}/>
            </span>
           )}
        </div>
    );
}
