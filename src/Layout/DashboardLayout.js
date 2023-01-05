import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer-side">
                <div className="dropdown lg:hidden ">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadowrounded-box w-52 bg-base-100">
                        <li className='text-3xl font-bold text-orange-500 mb-8'><Link to='/dashboard'>Single Item Product</Link></li>
                        <li className='text-3xl font-bold text-orange-500 mb-8'><Link to='/dashboard/fullItem'>Full Item Product</Link></li>
                        <li className='text-3xl font-bold text-orange-500 mb-8'><Link to='/dashboard/allUsers'>All User</Link></li>
                        <li className='text-3xl font-bold text-orange-500'><Link to='/dashboard/addProduct'>Add Product</Link></li>

                    </ul>
                </div>

            </div>

            <div className="drawer drawer-mobile">
                <input id="dashboard-layout" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>
                    <label htmlFor="dashboard-layout" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-layout" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-70 bg-base-100 text-base-content mt-24">
                        <li className='text-3xl font-bold text-orange-500 mb-8'><Link to='/dashboard'>Single Item Product</Link></li>
                        <li className='text-3xl font-bold text-orange-500 mb-8'><Link to='/dashboard/fullItem'>Full Item Product</Link></li>
                        <li className='text-3xl font-bold text-orange-500 mb-8'><Link to='/dashboard/allUsers'>All User</Link></li>
                        <li className='text-3xl font-bold text-orange-500'><Link to='/dashboard/addProduct'>Add Product</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;