import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Users = () => {

    const { removeUser } = useContext(AuthContext);

    const { isLoading, refetch, data: users = [] } = useQuery({
        queryKey: ['/allUser'],
        queryFn: async () => {
            const res = await fetch('https://coffee-shop-server.vercel.app/allUser')
            const data = await res.json()
            return data
        }
    })

    const handleDelete = (id) => {
        // removeUser()
        fetch(`https://coffee-shop-server.vercel.app/userDelete/${id}`, {
            method: 'DELETE',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('User Deleted Successfully')
                    refetch()
                }
            })
    }

    const handleAdmin = (id) => {
        fetch(`https://coffee-shop-server.vercel.app/makeAdmin/${id}`, {
            method: 'PUT',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('User Make Admin Successfully')
                    refetch()
                }
            })
    }


    const removeAdmin = (id) => {
        fetch(`https://coffee-shop-server.vercel.app/removeAdmin/${id}`, {
            method: 'PUT',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('User Remove Admin Successfully')
                    refetch()
                }
            })
    }

    return (
        <div className='my-16'>
            <h1 className='text-center text-3xl font-bold underline text-orange-500'>All User In Your Website Is Here</h1>
            <div className="overflow-x-auto">
                <table className="table w-4/5 mx-auto my-16">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Email</th>
                            <th>User Name</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map((user, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.name}</td>
                                {
                                    user.role === 'Admin' ?
                                        <td><button onClick={() => removeAdmin(user._id)} className="btn bg-red-500 hover:bg-orange-500 border-0">Remove Admin</button></td>
                                        :
                                        <td><button onClick={() => handleAdmin(user._id)} className="btn bg-orange-500 hover:bg-red-500 border-0">Make Admin</button></td>
                                }
                                <td><button onClick={() => handleDelete(user._id)} className="btn btn-error hover:bg-orange-500 text-white">Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;