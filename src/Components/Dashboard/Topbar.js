import React from 'react';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import { Language, NotificationsTwoTone, Settings } from '@mui/icons-material';

const Topbar = () => {
    return (
        <div className='topbar  w-full h-14 bg-blend-lighten sticky top-0 z-50'>
            <div className="topbarWrapper h-full px-5 py-0 flex items-center justify-between">
                <div className="topLeft">
                    <span className=' font-bold text-3xl text-blue-900 cursor-pointer'>
                        AdminPanel
                    </span>
                </div>
                <div className="topRight flex items-center gap-1">
                    <div>
                        <NotificationsTwoTone></NotificationsTwoTone>
                    </div>
                    <div>
                        <Language></Language>
                    </div>
                    <div>
                        <Settings></Settings>
                    </div>
                    <div class="avatar">
                        <div class=" w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;