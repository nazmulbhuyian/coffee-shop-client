import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllProducts = () => {

    const { isLoading, refetch, data: products = [] } = useQuery({
        queryKey: ['/allProducts'],
        queryFn: async () => {
            const res = await fetch('https://coffee-shop-server.vercel.app/allProducts')
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
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Payment</th>
                            <th>Delivery</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products?.map((product, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{product.email}</td>
                                <th><div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src={product.img} alt='' />
                                    </div>
                                </div></th>
                                <td>{product.productName}</td>
                                <td>{product.price}</td>
                                <td>
                                    {
                                        product.payment === 'OK' ?
                                            product.payment
                                            :
                                            'NOT OK'
                                    }
                                </td>
                                <td><button className="btn btn-error hover:bg-orange-500 text-white">Delivery</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllProducts;