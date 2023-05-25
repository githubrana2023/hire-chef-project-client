import React from 'react';

const TraditionalRecipe = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row mt-10 items-center md:items-center justify-around'>
            <div className='max-w-[500px] flex flex-col items-center md:items-start gap-4'>
                <h1 className='font-bold text-3xl text-center md:text-start'>We Cooked Traditional and Family Recipes</h1>
                <p className='text-purple-600 text-justify md:text-start'>Our team of chefs and cooks have perfected their skills over years of practice and experimentation, using only the freshest ingredients to create dishes that are bursting with flavor. Whether it's our grandma's secret recipe for spaghetti carbonara, our dad's famous roasted chicken, or our mom's delicious apple pie, we take pride in every dish we serve.</p>
                <button className='font-semibold text-white bg-purple-500 px-5 py-3 rounded-md'>See More</button>
            </div>
            <div className='h-full'>
            <img src="https://bit.ly/417jRQz" alt="" />
            </div>
        </div>
    );
};

export default TraditionalRecipe;