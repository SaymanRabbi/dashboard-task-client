import React from 'react';
import User from '../User/User';

const Users = ({ data }) => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-10'>Hello ReqRes users!</h1>
            <div className='grid grid-cols-2 gap-10'>
                {
                    data.map(userData => <User key={userData._id} userData={userData}></User>)
                }
            </div>
        </div>
    );
};

export default Users;