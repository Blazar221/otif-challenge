import React from 'react';

const Intro = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 w-100">
            <img src="/logo.svg" className="h-25" alt="OTIF" />
            <h1 className='my-4'>Welcome to OTIF Coding Challenge</h1>
            <div className="d-flex w-50 justify-content-center">
                <button className="btn btn-primary w-25 mx-4">Sign In</button>
                <button className="btn btn-primary w-25 mx-4">Check Parcels</button>
            </div>
        </div>
    );
};

export default Intro;