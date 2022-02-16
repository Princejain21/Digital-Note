import React, { useState } from 'react'


export default function Myaccordian(props) {
    const [show,setShow]=useState(false);
    const [val,setVal]=useState('show');
    const [val1,setVal1]=useState('none');
    function hide(){
        setShow(()=>{
            setVal1('none')
            setVal('')
         return false;
        })
    }
    function appear(){
        setVal('none')
        setVal1('')
         setShow(()=>{
             return true
         })
    }
    return (
        <>
            <div className="container pt-4 bg-dark  text-white w-100">
                
                <div className="row justify-content-center w-75 m-auto align-item-center" style={{border:'2px solid red'}}>
                    <div className="col-md-12 pt-3 ">
                    
                    <h1>
                    <span onClick={appear} className="bg-danger mx-2 my-2 px-2 prince  " style={{display:`${val}`,cursor:'pointer',borderRadius:'200px',color:'white'}}>&#43;</span>
                    <span className='bg-danger mx-2 my-2 prince px-2' onClick={hide} style={{display:`${val1}`,cursor:"pointer",borderRadius:'200px',color:'white'}}>&minus;</span> 
                    {props.msg.que}</h1><br/>
                  {show &&  <h3>{props.msg.Ans}</h3>}
                    </div>
                </div>
            </div>
        </>
    )
}
