import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const { register, reset, formState: { errors } } = useForm();

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_g66z9h5', 'template_w4dlvjt', form.current, "WdRjephW6B8q1428b")
            .then((result) => {
                console.log(result.text);
                reset()
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-orange-500 text-center'>Contract Me</h2>

                <form ref={form} onSubmit={handleSubmit}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="user_name" {...register("name", { required: 'Name is required' })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs mb-5">
                        <label className="label">
                            <span className="label-text">E-mail</span>
                        </label>
                        <input type="email" name="user_email" {...register("email", { required: 'Email Address is required' })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <textarea type="message" name="user_name" {...register("message")} className="textarea textarea-bordered w-full max-w-xs" placeholder="Your Message"></textarea>
                    </div>

                    <input className='btn border-0 w-full mt-5 bg-orange-300 hover:bg-red-500' value='Submit' type="submit" />
                </form>

            </div>


        </div>
    );
};

export default Contact;