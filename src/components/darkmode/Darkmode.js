import React from 'react'

export default function Darkmode() {
    function ram() {
        document.body.style.cssText = 'background-color:black;color:white;'
    }
    function ram1() {
        document.body.style.cssText = 'background-color:white;color:black;'
    }
    return (
            <>
        <div className='container sticky-top '>
            <div className='row float-right'>
                <button className='btn btn-secondary text-white' onClick={ram}>darkmode</button>
                <button className='btn btn-success text-white' onClick={ram1}>lightmode</button>
            </div>
        </div>
        <br/>
    </>
        )
}
