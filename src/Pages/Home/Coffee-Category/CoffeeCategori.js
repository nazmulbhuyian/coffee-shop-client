import React from 'react';
import { Link } from 'react-router-dom';

const CoffeeCategori = ({ categori }) => {
    const { img, category_name, ratting, _id } = categori;
    return (
        <div className="card bg-orange-100 shadow-xl">
            <figure><img src={img} alt="Shoes" width='350px' /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{category_name}</h2>
                <p>Ratting: <strong>{ratting}</strong></p>
                <div className="card-actions justify-end">
                    <Link to={`/coffeeDetails/${_id}`}><button className="btn bg-orange-300 border-0 hover:bg-rose-400">See Coffee</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCategori;