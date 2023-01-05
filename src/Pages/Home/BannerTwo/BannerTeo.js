import React from 'react';
import image from './pexels-lood-goosen-1235706.jpg'
import './BannerTwo.css'

const BannerTeo = () => {
    return (
        <div className='bg-black'>
            <div className="hero">
                <div className='mt-16'>
                    <div className="hero-content flex-col lg:flex-row background">
                        <img src={image} className="rounded-lg" alt='' width='650px' />
                        <div className='text-white'>
                            <h1 className="text-5xl font-bold">CREATE A NEW STORY WITH US</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni deserunt consequatur cum recusandae officiis sapiente doloribus soluta repellat consequuntur veniam velit optio laboriosam sequi nemo distinctio tempora, enim dignissimos!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerTeo;