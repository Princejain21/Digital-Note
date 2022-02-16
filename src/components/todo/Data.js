import React from 'react';

export default function Data(props) {

    return <>
    <div className='row text-center my-2 mx-auto '>
         <div className='col-10 text-center'>
             <li className='mx-1 text-justify my-2' ><h5 className='text-justify' style={{color:'#37f308'}}>{props.text}</h5></li>
         </div>
         <div className='col-2 mr-auto'>
         <button onClick={() => {
                    return props.press(props.id)
                }} className="btn btn-warning">Delete note</button>
               
        </div>
    </div>


    </>;
}
