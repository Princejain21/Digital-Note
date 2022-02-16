import React, { useState, useEffect } from 'react';
import './Covid.css'

export default function Covid() {
    const [data, setData] = useState([]);
    const covidRun = async () => {
        try {
            const getData = await fetch('https://data.covid19india.org/data.json');
            const result = await getData.json();
            setData(result.statewise[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        // to run the covid structure
        covidRun();
    }, [])

    return (
        <>
            <div className="container bg-dark mt-3 py-5">
                <div className="row justify-content-center">
                    <h1 className="text-center text-white"> COVID VIRUS LiveTracker</h1>
                </div><br /><br />
                <div className="row justify-content-center">
                    <div className=" prince bg-danger col-lg-3 text-center py-5 mx-1  col-md-6 my-2 col-md-4 bg-primary">
                        <h1 className='text-center text-white    pt-auto' >Our India</h1>
                    </div>
                    <div className="  prince col-lg-3 text-center py-5 mx-1  col-md-6 my-2 col-md-4 bg-primary">
                        <h1>Total Active Cases</h1>
                        <h2 className='text-warning'>{data.active}</h2><br />
                    </div>
                    <div className=" prince bg-danger text-white col-lg-3 text-center py-5 mx-1  col-md-6 my-2 col-md-4 bg-primary">
                        <h1>Total Death</h1>
                        <h2 className='text-warning'>{data.deaths} </h2><br />
                    </div>
                    <div className=" prince  col-lg-3 text-center py-5 mx-1  col-md-6 my-2 col-md-4 bg-primary">
                        <h1>Confirmed Cases</h1>
                        <h2 className='text-warning'>{data.confirmed}</h2><br />
                    </div>
                    <div className=" prince bg-danger text-white col-lg-3 text-center py-5 mx-1  col-md-6 my-2 col-md-4 bg-primary">
                        <h1>Recovered cases</h1>
                        <h2 className='text-warning'>{data.recovered}</h2><br />
                    </div>
                    <div className=" prince  col-lg-3 text-center py-5 mx-2 col-md-6 my-2 col-md-4 bg-primary">
                        <h1>last Update</h1>
                        <h2 className='text-warning'>{data.lastupdatedtime} </h2><br />
                    </div>

                </div>
            </div>
            
        </>
    )
}
