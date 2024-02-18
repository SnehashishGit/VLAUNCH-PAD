import React from 'react';
import Chief from '../../images/patrons/chief.jpg';
import Cochief_1 from "../../images/patrons/Cochief_1.jpg";
import Cochief_2 from "../../images/patrons/Cochief_2.jpg";
import Cochief_3 from "../../images/patrons/Cochief_3.jpg";
import Patrons_1 from "../../images/patrons/Patrons_1.jpg";
import Patrons_2 from "../../images/patrons/Patrons_2.jpg";



const Patrons = () => { 
  return (
    <>
    <div className="flex flex-col items-center">
      {/* Chief Patron */}
      <div className="mt-8 p-10">
        <p className="font-bold text-[30px] underline p-10">Chief Patron</p>
        <img
          src={Chief}
          alt="Chief Patron"
          className="w-60 h-60 rounded-full border-4 border-gray-500 ml-20"
        />
        <p className="mt-2 font-semibold text-[20px] ml-20">Dr. G. Viswanathan</p>
        <p className="mt-2 font-medium text-[12px] text-blue-700 text-center ml-20">Founder & Chancellor, VIT</p>
      </div>

    {/* Co-Chief Patrons */}
    <div className="flex flex-col items-center mt-8">
        <p className="font-bold  text-[30px] mb-4 underline p-10">Co-Chief Patrons</p>
        <div className="flex flex-wrap justify-center">
          {/* Co-Chief Patron 1 */}
          <div className="mx-4 mb-4 px-20">
            <img
              src={Cochief_1}
              alt="Co-Chief Patron 1"
              className="w-60 h-60 rounded-full border-2 border-gray-500 ml-20"
            />
            <p className="mt-2 font-semibold text-[20px]">Shri. Sankar Viswanathan</p>
            <p className="font-medium text-[12px]  text-blue-700 text-center">Vice President, VIT</p>
          </div>
          {/* Co-Chief Patron 2 */}
          <div className="mx-4 mb-4 px-20">
            <img
              src={Cochief_2}
              alt="Co-Chief Patron 2"
              className="w-60 h-60 rounded-full border-2 border-gray-500 ml-20"
            />
            <p className="mt-2 font-semibold text-[20px]">Dr. Sekar Viswanathan</p>
            <p className="font-medium text-[12px] text-blue-700 text-center">Vice President, VIT</p>
          </div>
          {/* Co-Chief Patron 3 */}
          <div className="mx-4 mb-4 px-20">
            <img
              src={Cochief_3}
              alt="Co-Chief Patron 3"
              className="w-60 h-60 rounded-full border-2 border-gray-500 ml-10"
            />
            <p className="mt-2 font-semibold text-[20px]">Shri. G.V. Selvam</p>
            <p className="font-medium text-[12px]  text-blue-700 text-center">Vice President, VIT</p>
          </div>
        </div>
      </div>

      {/* Patrons */}
      <div className="flex flex-col items-center mt-8">
        <p className="font-bold mb-4 underline text-[30px] p-10">Patrons</p>
        <div className="flex flex-wrap justify-center">
          {/* Patron 1 */}
          <div className="mx-4 mb-4 px-20 ">
            <img
              src={Patrons_1}
              alt="Patron 1"
              className="w-60 h-60 rounded-full border-2 border-gray-500 ml-10"
            />
            <p className="mt-2 font-semibold text-[20px]">Dr. S.V. Kota Reddy</p>
            <p className="font-medium text-[12px] text-blue-700 text-center">Vice-Chancellor</p>
          </div>
          {/* Patron 2 */}
          <div className="mx-4 mb-4 px-15 ">
            <img
              src={Patrons_2}
              alt="Patron 2"
              className="w-60 h-60 rounded-full border-2 border-gray-500 ml-40 "
            />
            <p className="mt-2 font-semibold text-[20px]">Dr. Jagadish Chandra Mudiganti</p>
            <p className="font-medium text-[12px]  text-blue-700 text-center">Registrar</p>
          </div>
        </div>
      </div>
    </div>
    <hr className="border-b border-dotted border-gray-600 my-10" />
    </>
  );
};


export default Patrons;
