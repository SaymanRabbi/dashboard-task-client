import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ userData }) => {
    const { avatar, email, first_name, last_name, _id } = userData
    return (
        <div className="card max-w-lg bg-base-100 shadow-xl mx-auto">
            <figure><img src={avatar} className=' w-28 h-28' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{first_name + last_name}</h2>
                <p>{email}</p>
                <div className='text-center mt-3'>
                    <Link to={`update/${_id}`}><button className='btn btn-sm'>Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default User;