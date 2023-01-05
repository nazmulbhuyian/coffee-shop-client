import React, { useContext } from 'react';
import image from './pexels-dylan-hayward-8629117 (1).jpg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
    }

    return (
        <div className="navbar bg-black">
            <div className="navbar-start">

                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadowrounded-box w-52 bg-black">
                        <Link to='/' className='hover:text-orange-300 text-xl mb-2 text-white'>Home</Link>
                        <Link to='/myCart' className='hover:text-orange-300 text-xl mb-2 text-white'>My Cart</Link>
                        <Link to='/menu' className='hover:text-orange-300 text-xl'>My Shop</Link>
                        <Link to='/contact' className='hover:text-orange-300 text-xl text-white'>Contact</Link>
                        {
                            user ?
                                <Link onClick={handleLogOut} className='hover:text-orange-300 text-xl text-white'>Sign Out</Link>
                                :
                                <Link to='/login' className='hover:text-orange-300 text-xl text-white'>Login</Link>
                        }
                    </ul>
                </div>

                <div className="dropdown lg:contents hidden text-white">
                    <Link to='/' className='hover:text-orange-300 text-xl mx-7'>Home</Link>
                    <Link to='/myCart' className='hover:text-orange-300 text-xl mr-7'>My Cart</Link>
                    <Link to='/menu' className='hover:text-orange-300 text-xl'>My Shop</Link>
                    <Link to='/contact' className='hover:text-orange-300 text-xl ml-7'>Contact</Link>
                </div>
            </div>
            <div className="avatar navbar-center">
                <div className="w-24 rounded-full">
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="navbar-end text-white">
                <div className='lg:contents hidden'>
                    {
                        user ?
                            <button onClick={handleLogOut} className='hover:text-orange-300 text-xl ml-5 lg:mr-5'>Sign Out</button>
                            :
                            <Link to='/login' className='hover:text-orange-300 text-xl ml-5 lg:mr-5'>Login</Link>
                    }
                </div>
                <Link to='/dashboard' className='hover:text-orange-300 text-xl mr-5 ml-2'>Dashboard</Link>
            </div>
        </div>
    );
};

export default Navbar;