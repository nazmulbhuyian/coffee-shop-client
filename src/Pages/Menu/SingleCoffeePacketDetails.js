import React from 'react';
import { toast } from 'react-hot-toast';

const SingleCoffeePacketDetails = ({ product, refetch }) => {

    const { about } = product
    const details = about

    const handleDelete = (id) => {
        fetch(`https://coffee-shop-server.vercel.app/packet/${id}`, {
            method: 'DELETE',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Your Product Delete Successfully')
                    refetch()
                }
            })
    }

    return (
        <div className="card w-full my-8 bg-base-300 p-8">
            <figure><img src={details?.img} alt="Shoes" width='250px' /></figure>
            <div className="card-body">
                <h2 className="card-title lg:text-2xl text-xl">
                    Product-Name: <strong>{details?.name}</strong>
                    {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p className='font-bold'>{details?.about}</p>
                <div className="card-actions justify-between my-3">
                    <div className="text-xl font-bold">Price: <strong className='text-orange-500'>{details?.price}</strong></div>
                    <div className="text-xl font-bold">Ratting: <strong className='text-orange-500'>{details?.ratting}</strong></div>
                </div>
                <button onClick={() => handleDelete(product._id)} className='btn bg-orange-300 border-0 hover:bg-rose-400 mb-2'>Delete Now</button>
            </div>
        </div>
    );
};

export default SingleCoffeePacketDetails;