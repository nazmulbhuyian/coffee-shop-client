import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import SingleCoffeePacketDetails from './SingleCoffeePacketDetails';

const SingleCoffeePacket = () => {
    const { user } = useContext(AuthContext)

    const { isLoading, refetch, data: products = [] } = useQuery({
        queryKey: ['/personPacket', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://coffee-shop-server.vercel.app/personPacket?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })


    return (
        <div>
            <div className='mt-16'>
                <h1 className='text-center text-3xl font-bold text-orange-500'>This is your Coffee Packet Category you have Add</h1>
                <div className='mx-32 mt-16'>
                    {
                        products?.map(product => <SingleCoffeePacketDetails refetch={refetch} key={product._id} product={product}></SingleCoffeePacketDetails>)
                    }
                </div>
            </div>

        </div>
    );
};

export default SingleCoffeePacket;