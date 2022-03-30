import React from 'react';
import PricingOPtion from '../PricingOption/PricingOPtion';

const Pricing = () => {
    const pricingOption =[
        {id: 1, name: 'free', price: 0, benefits: [
            'live time free',
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ]},
        {id: 2, name: 'Regular', price: 9.99, benefits: [
            'everything on free',
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ]},
        {id: 3, name: 'premium', price: 19.99, benefits: [
            'everything on regular',
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ]},
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best Deals of The Town</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit similique alias quaerat dolor sint, exercitationem sequi consequuntur quas ratione odit.</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                 pricingOption.map(option => <PricingOPtion
                 key={option.id}
                 option= {option}
                 ></PricingOPtion>)   
                }
            </div>
        </div>
    );
};

export default Pricing;