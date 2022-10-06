import React from 'react';

const Product = (props) => {
    // const divStyles = {
    //     boxShadow: '1px 2px 9px #F4AAB9',
    //     margin: '20px',
    //     padding: '10px',
    // };
    const { picture } = props.product
    return (
        <div className=''>
            <img className='w-6/12 mx-auto' src={picture} alt="" />
            {/* <p><span className='font-bold text-xl'>Minimum Quantity:</span><span className='font-bold'> {minimum_quantity}</span></p>
            <p><span className='font-bold text-xl'>Quantity:</span><span className='font-bold'> {available_quantity}</span></p>
            <p><span className='font-bold text-xl'>Price: </span><span className='font-bold'> ${price}</span></p>
            <h1 className='font-bold text-xl'>Name:{name}</h1>
            <p>{description.slice(0, 100)}</p> */}

        </div>

    );
};

export default Product;