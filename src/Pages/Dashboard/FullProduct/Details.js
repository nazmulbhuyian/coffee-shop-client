import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Detail from './Detail';

const Details = () => {

    const { items, email } = useLoaderData();
    const [name, setName] = useState('')

    return (
        <div className='my-16'>
            <h1 className='text-center mb-8'><Link to='/dashboard/fullItem' className="btn bg-orange-500 border-0">Go Back</Link></h1>
            <h1 className='text-center text-3xl text-orange-500'>You are see <strong>{email}</strong> user, name is <strong>{name}</strong> product details</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-16'>
                {
                    items?.map(item => <Detail item={item} key={item._id} setName={setName}></Detail>)
                }
            </div>
        </div>

    );
};

export default Details;