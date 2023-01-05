import React, { useEffect, useState } from 'react';
import CoffeeCategori from './CoffeeCategori';

const CoffeeCategories = () => {

    const [categories, setCotegories] = useState([])

    useEffect(() => {
        fetch('https://coffee-shop-server.vercel.app/allCoffee')
            .then(res => res.json())
            .then(data => setCotegories(data))
    }, [])

    return (
        <div className='bg-black'>
            <div className='w-4/5 mx-auto py-16'>
                <h1 className='text-3xl font-bold text-center mb-5 text-orange-400'>See Our All Coffee Category</h1>
                <div className='grid lg:grid-cols-4 grid-cols-2 gap-8'>
                    {
                        categories?.map(categori => <CoffeeCategori key={categori._id} categori={categori}></CoffeeCategori>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CoffeeCategories;