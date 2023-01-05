import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleItems from './SingleItems';

const CoffeeDetails = () => {

    const { products } = useLoaderData()

    return (
        <div className='lg:w-4/5 mx-auto'>
            <Link to='/' className='btn bg-orange-300 border-0 hover:bg-rose-400 mt-10'>Go Back</Link>
            <h1 className='text-3xl font-bold text-orange-500 py-10 text-center'>Here See Product And Buy Your Favourite Product.</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                {
                    products?.map(product => <SingleItems key={product.name} product={product}></SingleItems>)
                }
            </div>
        </div>
    );
};

export default CoffeeDetails;