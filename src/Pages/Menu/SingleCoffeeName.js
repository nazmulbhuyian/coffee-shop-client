import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SingleCoffeeName = () => {

    const { user } = useContext(AuthContext)

    const { isLoading, refetch, data: products = [] } = useQuery({
        queryKey: ['/personPacketName', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://coffee-shop-server.vercel.app/packetName?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })

    const handleDelete = (id) => {
        fetch(`https://coffee-shop-server.vercel.app/packetNameDelete/${id}`, {
            method: 'DELETE',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Your Product Delete Succwssfully')
                    refetch()
                }
            })
    }

    return (
        <div className='my-16'>
            <h1 className='text-center text-3xl font-bold text-orange-500'>This is your Coffee Name you have Add</h1>
            <div className='grid lg:grid-cols-3 lg:mx-24 gap-4 my-8'>
                {
                    products?.map(product =>
                        <div className="card w-96 bg-base-100 shadow-xl mb-10">
                            <figure><img src={product.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl">
                                    Name: {product.name}
                                    {/* <div className="badge badge-secondary">NEW</div> */}
                                </h2>
                                <div className="card-actions justify-between">
                                    <div className="text-xl font-bold">Price: <strong className='text-orange-500'>{product.price}</strong></div>
                                    <div className="text-xl font-bold">Ratting: <strong className='text-orange-500'>{product.ratting}</strong></div>
                                </div>
                                <button onClick={() => handleDelete(product._id)} className='btn bg-orange-300 border-0 hover:bg-rose-400'>Delete</button>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default SingleCoffeeName;