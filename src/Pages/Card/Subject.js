import React from 'react';

const Subject = (props) => {
    const { pic, des, name } = props.subject
    return (
        <div className='shadow-lg p-5 bg-base-100'>
            <img className='w-20 mx-auto' src={pic} alt="" />
            <p className='font-bold mb-1'>{name}</p>
            <p>{des.slice(0, 50)}</p>
            <br />
            <p className='text-red-500 font-bold'>আরও দেখুন </p>
            {/* {des.slice(50)} */}

        </div>
    );
};

export default Subject;