import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Main = () => {
    return (
        <div className='content-container relative px-4 md:px-0 md:min-h-[calc(100vh-255px)]'>
            <div className=' top-0 z-50 mb[55px]'>
            <Navbar/>
            </div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;