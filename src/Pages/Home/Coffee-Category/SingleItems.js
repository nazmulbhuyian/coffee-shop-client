import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const SingleItems = ({ product }) => {

    const { user } = useContext(AuthContext)

    const { name, img, price, ratting } = product;

    const handleBuy = (product) => {
        const info = {
            email: user?.email,
            customer: user?.displayName,
            productName: product.name,
            img: product.img,
            price: product.price,
            ratting: product.ratting
        }
        fetch('https://coffee-shop-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success(`${product.name} Added Successfully`)
                }
            })
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-10">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl">
                    Name: {name}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <div className="card-actions justify-between">
                    <div className="text-xl font-bold">Price: <strong className='text-orange-500'>{price}</strong></div>
                    <div className="text-xl font-bold">Ratting: <strong className='text-orange-500'>{ratting}</strong></div>
                </div>
                <button onClick={() => handleBuy(product)} className='btn bg-orange-300 border-0 hover:bg-rose-400'>Buy Now</button>
            </div>
        </div>
    );
};

export default SingleItems;