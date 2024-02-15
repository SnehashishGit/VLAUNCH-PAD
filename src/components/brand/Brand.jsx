import React from 'react';
import { item1, item10, item11, item12, item13, item2, item3, item4, item5, item6, item7, item8, item9, } from './imports';
import './brand.css';

const Brand = () => (
    <>
    <div className='brand-section'>
    <div className="flex flex-col text-center items-center relative ">
        <p className="font-semibold text-black text-[30px] relative uppercase z-10 underline ">
            Ecosystem Partners
        </p>

        <h2 className="text-[3.6rem] text-black font-bold my-10">

        </h2>
    </div><div className="gpt3__brand section__padding">
            <div>
                <img src={item1} />
            </div>
            <div>
                <img src={item2} />
            </div>
            <div>
                <img src={item3} />
            </div>
            <div>
                <img src={item4} />
            </div>
            <div>
                <img src={item5} />
            </div>
            <div>
                <img src={item6} />
            </div>
            <div>
                <img src={item7} />
            </div>
            <div>
                <img src={item8} />
            </div>
            <div>
                <img src={item9} />
            </div>
            <div>
                <img src={item10} />
            </div>
            <div>
                <img src={item11} />
            </div>
            <div>
                <img src={item12} />
            </div>
            <div>
                <img src={item13} />
            </div>

        </div>
        </div></>
);

export default Brand;