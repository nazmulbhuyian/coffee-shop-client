import React from 'react';
import { toast } from 'react-hot-toast';

const MyCart = ({ item, refetch, i }) => {

    const { productName, img, price, _id, payment } = item;

    const handleDelete = (id) => {
        fetch(`https://coffee-shop-server.vercel.app/orderDelete/${id}`, {
            method: 'DELETE',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Order Delete Succwssfully')
                    refetch()
                }
            })
    }

    const handlePayment = (id) => {
        fetch(`https://coffee-shop-server.vercel.app/singlePayment/${id}`, {
            method: 'PUT',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('Payment Successfully')
                    refetch()
                }
            })
    }

    return (
        <tr>
            <th>{i + 1}</th>
            <td><div className="avatar">
                <div className="w-24 mask mask-squircle">
                    <img src={img} alt='' />
                </div>
            </div></td>
            <td>{productName}</td>
            <td>${price}</td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-error hover:bg-orange-500 text-white">Delete</button></td>
            {
                payment === 'OK' ?
                    <td><button onClick={() => handlePayment(_id)} className="btn bg-orange-500 hover:bg-red-500 border-0" disabled={true}>Payment Done</button></td>
                    :
                    <td><button onClick={() => handlePayment(_id)} className="btn bg-orange-500 hover:bg-red-500 border-0">Payment</button></td>
            }
        </tr>
    );
};

export default MyCart;