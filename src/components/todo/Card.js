import React, { useState } from 'react';
import Data from '../todo/Data'
export default function Card() {
    const [data, setData] = useState('');
    const [item, setItem] = useState([]);

    function DeleteText(id) {
        setItem((val) => {
            return val.filter((val, index) => {
                return index !== id
            })
        })
        // item.splice(id)

    }

    function todoItem(e) {
        setData(e.target.value)

    }
    function press() {
        let a = document.getElementById('note').value;
        setData(a);
        setItem((val) => {
            if (!a) {
                alert('please enter the note')
                return [...val, data];
            } else {
                return [...val, data];
            }
        })
        setData('')
        console.log(item, data);


    }

    return (
        <div className="container mt-5 py-5 text-center bg-secondary text-white" >
            <h1 className='text-center text-warning'>To-Do</h1>
            <div className="row justify-content-center">
                <div className='col-8 text-center'>
                    <input type="text" className='mx-3' id="note" onChange={todoItem} value={data} />
                    <button className='btn btn-primary' onClick={press}>Add</button>
                </div> 
            </div>
            <div className='col-8 text-center'>
            <ol >
                {
                    item.map((value, index) => {
                        return <Data key={index} text={value} press={DeleteText} id={index} />;
                    })
                }
            </ol>
                </div>
        </div>


    );
}
