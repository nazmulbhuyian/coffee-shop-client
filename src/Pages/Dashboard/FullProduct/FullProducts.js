import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const FullProducts = () => {

    const { isLoading, refetch, data: products = [] } = useQuery({
        queryKey: ['/fullProducts'],
        queryFn: async () => {
            const res = await fetch('https://coffee-shop-server.vercel.app/fullProducts')
            const data = await res.json()
            return data
        }
    })


    return (
        <div className='my-16'>
            <h1 className='text-center text-3xl font-bold underline text-orange-500'>All User In Your Website Is Here</h1>
            <div className="overflow-x-auto">
                <table className="table w-full my-16">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Email</th>
                            <th>User Name</th>
                            <th>Products Price</th>
                            <th>Payment</th>
                            <th>Details</th>
                            <th>Delivery</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products?.map((product, i) => <tr>
                                <th>{i + 1}</th>

                                <td>{product.email}</td>
                                <td>{product.items[0].customer}</td>
                                <td>$ {product.total}</td>
                                <td>{product.payment}</td>

                                <td><Link to={`/dashboard/${product._id}`} className="btn border-0 bg-green-500 hover:bg-red-500 text-white">Details</Link></td>

                                <td><button className="btn border-0 bg-orange-500 hover:bg-red-500 text-white">Delivery</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default FullProducts;