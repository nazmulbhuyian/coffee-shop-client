import React from 'react';
import image from './pexels-suzy-hazelwood-3352765.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="w-full bg-base-100 shadow-xl image-full card">
            <div className='carousel-img'>
            <figure><img src={image} alt="Shoes" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title lg:text-7xl text-3xl lg:mt-24 lg:font-bold">Rosted Coffee <br /> For You</h2>
                <div className='lg:flex mt-3 lg:mt-16'>
                    <button className="btn hover:bg-rose-400 bg-orange-300 border-0 w-32 mr-5 flex mb-3">Buy Coffee</button>
                    <button className="btn hover:bg-rose-400 bg-orange-300 border-0 w-32">About Us</button>
                </div>
                <p className='text-gray-300 mt-3 text-xl lg:mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, placeat porro. Voluptatum <br /> quis maxime, nulla molestias nemo facilis odit nihil delectus vero sapiente!</p>
            </div>
        </div>
    );
};
export default Banner;