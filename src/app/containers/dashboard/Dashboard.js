import React from 'react';
import logo from '../../assets/images/logo.png';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className='dashboard__content'>
                <img className='dashboard__content__logo' src={logo} alt="snappfood logo" />
            </div>
        </div>
    )
}

export default Dashboard;