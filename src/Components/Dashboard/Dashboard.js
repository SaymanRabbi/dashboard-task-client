import React from 'react';
// import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Topbar from './Topbar';
import Sidebar from './Sidebar/Sidebar';
import Home from '../../Pages/home/Home';
ChartJS.register(ArcElement, Tooltip, Legend);
const Dashboard = ({ dashboarddata }) => {

    return <div>
        <Topbar />
        <div className="flex">
            <div style={{ flex: '1' }}>
                <Sidebar></Sidebar>
            </div>
            <div className='' style={{ flex: '4' }}>
                <Home />
            </div>
        </div>
    </div>;
};

export default Dashboard;