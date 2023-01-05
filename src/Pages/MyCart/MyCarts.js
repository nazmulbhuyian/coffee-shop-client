import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyCart from './MyCart';

const MyCarts = () => {

    const { user } = useContext(AuthContext)

    const { data: items = [], refetch } = useQuery({
        queryKey: ['/myOrders', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://coffee-shop-server.vercel.app/myCarts?email=${user?.email}`)
            const data = await res.json();
            return data;
        },
    })

    const total = items.reduce((prv, next) => prv + next.price, 0)

    const allItem = (items) => {
        const info = {
            email: user?.email,
            items,
            total,
            payment: 'OK'
        }
        fetch('https://coffee-shop-server.vercel.app/fullOrder', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('Your Payment Successfull')
                }
            })
    }


    return (
        <div className='my-16'>
            <h1 className='text-center text-3xl font-bold underline text-orange-500'>Your Order Is Here</h1>
            <div className="overflow-x-auto">
                <table className="table w-3/5 mx-auto my-16">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Delete</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            items?.map((item, i) => <MyCart key={item._id} i={i} item={item} refetch={refetch}></MyCart>)
                        }


                    </tbody>
                </table>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold text-red-500'>You Also Pay All Item Amount</h1>
                    <h1 className='text-3xl font-bold text-orange-500'>Total Amouunt Is: ${items.reduce((prv, next) => prv + next.price, 0)}</h1>
                    <button onClick={() => allItem(items)} className='btn bg-orange-500 hover:bg-red-500 border-0 mt-3'>Pay For All Item</button>
                </div>
            </div>

        </div>
    );
};

export default MyCarts;