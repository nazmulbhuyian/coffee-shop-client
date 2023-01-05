import React from 'react';
import image1 from './pexels-andrea-piacquadio-837358.jpg'
import image2 from './pexels-andrea-piacquadio-845457.jpg'
import image3 from './pexels-pixabay-39866.jpg'

const Review = () => {
    return (
        <div className='bg-black text-white'>
            <h1 className='text-center text-3xl font-bold pt-16'>OUR CUSTOMER REVIEW</h1>
            <div className="carousel mt-16 mx-auto lg:w-3/5 w-full">
                <div id="slide1" className="carousel-item relative w-full">

                    <div>
                        <p className='lg:ml-32 ml-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore aperiam accusamus sint, <br /> quod neque blanditiis architecto id rerum, quam aut soluta cum eligendi quia sequi, <br /> pariatur mollitia doloribus quas.</p>
                        <div className="avatar lg:ml-96 ml-32 mt-8">
                            <div className="w-24 rounded-full">
                                <img src={image1} alt='' />
                            </div>
                        </div>
                        <div className=' lg:ml-96 ml-32 mt-8'>
                            <h3 className='text-xl'>Nazmul Bhuyian Nobel</h3>
                            <p>Noakhali, Bangladesh</p>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">

                    <div>
                        <p className='lg:ml-32 ml-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore aperiam accusamus sint, <br /> quod neque blanditiis architecto id rerum, quam aut soluta cum eligendi quia sequi, <br /> pariatur mollitia doloribus quas.</p>
                        <div className="avatar lg:ml-96 ml-32 mt-8">
                            <div className="w-24 rounded-full">
                                <img src={image2} alt='' />
                            </div>
                        </div>
                        <div className=' lg:ml-96 ml-32 mt-8'>
                            <h3 className='text-xl'>MD Zabad Hossain</h3>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">

                    <div>
                        <p className='lg:ml-32 ml-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore aperiam accusamus sint, <br /> quod neque blanditiis architecto id rerum, quam aut soluta cum eligendi quia sequi, <br /> pariatur mollitia doloribus quas.</p>
                        <div className="avatar lg:ml-96 ml-32 mt-8">
                            <div className="w-24 rounded-full">
                                <img src={image3} alt='' />
                            </div>
                        </div>
                        <div className=' lg:ml-96 ml-32 mt-8'>
                            <h3 className='text-xl'>Nozrul Bhuyian Nafiz</h3>
                            <p>Cumilla, Bangladesh</p>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;