import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const BagsDetails = () => {

    const { user } = useContext(AuthContext)

    const { about } = useLoaderData()
    const details = about


    const handleBuy = (details) => {
        const info = {
            email: user?.email,
            customer: user?.displayName,
            productName: details.name,
            img: details.img,
            price: details.price,
            ratting: details.ratting
        }
        console.log(info);
        fetch('https://coffee-shop-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success(`${details.name} Added Successfully`)
                }
            })
    }

    return (
        <div className='lg:w-4/5 mx-auto'>
            <Link to='/' className='btn bg-orange-300 border-0 hover:bg-rose-400 mt-10'>Go Back</Link>
            <h1 className='text-3xl font-bold text-orange-500 py-10 text-center'>Here See Product And Buy Your Favourite Product.</h1>
            {
                details &&
                <div className="card w-full">
                    <figure><img src={details.img} alt="Shoes" width='250px' /></figure>
                    <div className="card-body">
                        <h2 className="card-title lg:text-2xl text-xl">
                            Product-Name: <strong>{details.name}</strong>
                            {/* <div className="badge badge-secondary">NEW</div> */}
                        </h2>
                        <p className='font-bold'>{details.about}</p>
                        <div className="card-actions justify-between my-3">
                            <div className="text-xl font-bold">Price: <strong className='text-orange-500'>{details.price}</strong></div>
                            <div className="text-xl font-bold">Ratting: <strong className='text-orange-500'>{details.ratting}</strong></div>
                        </div>
                        <button onClick={() => handleBuy(details)} className='btn bg-orange-300 border-0 hover:bg-rose-400 mb-2'>Buy Now</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default BagsDetails;