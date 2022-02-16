import React from 'react'
import {message} from './api'
import Myaccordian from './Myaccordian';
export default function Accordian(){
    return (
        <>
        <div className='container pl-5'>

        <h1 className='text-center pl-5 text-danger'>Interview ques and their ans</h1>
        </div>
        {message.map((elem)=>{
          return  <Myaccordian  key={elem.id} msg={elem}/>
        })}
        </>
    )
}