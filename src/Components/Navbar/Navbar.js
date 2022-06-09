import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-slate-800">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl text-white">DynamicUser</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 gap-3">
                    <li> <NavLink to='/' className='text-base font-semibold text-white'>User</NavLink></li>

                    <li><NavLink to='/aduser' className='text-base font-semibold text-white'>Add User</NavLink></li>
                    <li><NavLink to='/dashboard' className='text-base font-semibold text-white'>DashBoard</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;