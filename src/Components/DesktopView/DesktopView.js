import React from 'react';
import SingelDesktopView from '../SingelDesktopView/SingelDesktopView';

const DesktopView = ({ data }) => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-10'>Hello ReqRes users!</h1>
            <div className='grid md:grid-cols-4 gap-10'>
                {
                    data.map(userData => <SingelDesktopView key={userData._id} userData={userData}></SingelDesktopView>)
                }
            </div>
        </div>
    );
};

export default DesktopView;