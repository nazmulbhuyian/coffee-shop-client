import React from 'react';

const Detail = ({ item, setName }) => {
    setName(item.customer)
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img src={item.img} alt="Shoes" width='250px' /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {item.productName}</h2>
                <h1 className='text-xl'>price: <strong>{item.price}</strong></h1>
            </div>
        </div>
    );
};

export default Detail;