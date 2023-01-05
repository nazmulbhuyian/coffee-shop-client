import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
import Option from './Option';

const CoffeeName = () => {

    const { user } = useContext(AuthContext);

    const [categories, setCotegories] = useState([])

    useEffect(() => {
        fetch('https://coffee-shop-server.vercel.app/allCoffee')
            .then(res => res.json())
            .then(data => setCotegories(data))
    }, [])



    const { register, handleSubmit, errors } = useForm();

    const imageBBHostKey = '14f1e107e329b44a04c4481b2e76451e'

    const onSubmit = data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageBBHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.status === 200) {
                    const image = imgData.data.url;
                    const name = data.coffee_name;
                    const price = data.price;
                    const category_name = data.catagory_id;
                    const ratting = data.ratting;
                    const info = {
                        img: image,
                        name: name,
                        price: price,
                        category_name: category_name,
                        ratting: ratting,
                        email: user?.email
                    }
                    fetch('https://coffee-shop-server.vercel.app/addNewCoffee', {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(info)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged === true) {
                                toast.success(`${category_name} Added Successfully`)
                            }
                        })
                }
                else {
                    toast.error('Please Add A Photo')
                }
            })
    };
    return (
        <div className='mt-16'>
            <h3 className='text-4xl text-center text-orange-500'>You  Added A Name Of Coffee Product</h3>

            <form onSubmit={handleSubmit(onSubmit)} className='w-96 p-7 mx-auto'>


                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Coffee Name</span></label>
                    <input {...register('coffee_name')} type="text" placeholder="Coffee Name" className="input input-bordered input-error w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Coffee Price</span></label>
                    <input {...register('price')} type="text" placeholder="Coffee Price" className="input input-bordered input-error w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Coffee Brand</span></label>
                    <select {...register('catagory_id')} className="select input-bordered w-full max-w-xs">
                        {
                            categories?.map(categorie => <Option categorie={categorie} key={categorie._id}></Option>)
                        }

                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Ratting</span></label>
                    <select {...register('ratting')} className="select input-bordered w-full max-w-xs">
                        <option disabled selected>Select Ratting</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Photo</span>
                    </label>
                    <input {...register("img", { required: 'Name is required' })} type="file" className="file-input file-input-bordered  w-full max-w-xs" />
                </div>

                <input className='btn bg-orange-300 hover:bg-red-500 border-0 w-full mt-5' value='Add Product' type="submit" />
            </form>
        </div>
    );
};

export default CoffeeName;