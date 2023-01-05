import React, { useEffect, useState } from 'react';
import BagsCategori from './BagsCategori';

const BagsCategories = () => {

    const [bags, setBags] = useState([]);

    useEffect(() => {
        fetch('https://coffee-shop-server.vercel.app/allPacket')
            .then(res => res.json())
            .then(data => setBags(data))
    }, [])

    return (
        <div className='bg-black'>
            <div className='w-4/5 mx-auto py-16'>
                <h1 className='text-3xl font-bold text-center mb-5 text-orange-400'>See Our All Coffee Bags Category</h1>
                <div className='grid lg:grid-cols-4 grid-cols-2 gap-8'>
                    {
                        bags?.map(bag => <BagsCategori key={bag._id} bag={bag}></BagsCategori>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BagsCategories;