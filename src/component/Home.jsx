import React from 'react'
import Products from './Products'
import bgimage from'../bg.jpg';
function Home() {
    return (
        <div className='hero'>
            <div className="card text-bg-dark border-0">
                <img src= {bgimage} className="card-img" alt="background" height="550px"/>
                    <div className="card-img-overlay d-flex flex-column justify-content-center ">
                        <div className="container ">
                        <h5 className="card-title display-2 fw-bolder mb-0 text-black-50 ">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2 text-black-50">CHECK OUT ALL THE TRENDS</p>
                        </div>
                        
                    </div>
            </div>
            <Products />
        </div>
    )
}

export default Home