import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SingleCoffeeBrand = () => {

    const { user } = useContext(AuthContext)

    const { isLoading, refetch, data: products = [] } = useQuery({
        queryKey: ['/personPacket', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://coffee-shop-server.vercel.app/personCoffee?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })

    const handleDelete = (id) => {
        fetch(`https://coffee-shop-server.vercel.app/brandDelete/${id}`, {
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

            <div className='mb-8'>
                <h1 className='text-center text-3xl font-bold text-orange-500'>This is your Brand Category you have Add</h1>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mx-auto w-4/5 mt-8'>
                    {
                        products?.map(categorie => <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={categorie.img} alt="Shoes" width='350px' /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">{categorie.category_name}</h2>
                                <p>Ratting: {categorie.ratting}</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handleDelete(categorie._id)} className="btn bg-orange-300 hover:bg-red-500 border-0">Delete</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleCoffeeBrand;