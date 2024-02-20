import React from 'react';
import Chief from '../../images/committee/C1.jpg';


import Cochief_1 from "../../images/committee/C2.png"
import Cochief_2 from "../../images/committee/C3.jpg";
import Cochief_3 from "../../images/committee/C4.jpg";
import Patrons_1 from "../../images/committee/C5.jpg";
import Patrons_2 from "../../images/committee/C6.jpg";
import Patrons_3 from '../../images/committee/C7.jpg';




const Committee = () => {
    return (
      <>
      <div className="flex flex-col items-center text-center">
        {/* Chief Patron */}
        <div className="mt-8 p-10">
          <p className="font-bold text-[30px] underline p-10">Advisory Committee</p>
          <img
            src={Chief}
            alt="Chief Patron"
            className="w-60 h-60 rounded-full border-4 border-gray-500 ml-20"
          />
          <p className="mt-2 font-semibold text-[20px] ">Dr. Balachandran A.</p>
          <p className="mt-2 font-medium text-[12px] text-center text-blue-700  ">Director of VIT-TechnologyBusiness IncubatorDr.</p>
        </div>
  
      {/* Co-Chief Patrons */}
      <div className="flex flex-col items-center mt-8">
          
          <div className="flex flex-wrap justify-center">
            {/* Co-Chief Patron 1 */}
            <div className="mx-4 mb-4 px-20">
              <img
                src={Cochief_1}
                alt="Co-Chief Patron 1"
                className="w-60 h-60 rounded-full border-2 border-gray-500 ml-20"
              />
              <p className="mt-2 font-semibold text-[20px]">Dr. R. Sujatha
Principal </p>
              <p className="font-medium text-[12px] text-blue-700  text-center">Entrepreneur
Education at Wadhwani
Foundation</p>
            </div>
            {/* Co-Chief Patron 2 */}
            <div className="mx-4 mb-4 px-20">
              <img
                src={Cochief_2}
                alt="Co-Chief Patron 2"
                className="w-60 h-60 rounded-full border-2 border-gray-500 ml-20"
              />
              <p className="mt-2 font-semibold text-[20px]">Dr. Bhanu Prakash
Reddy Varla
</p>
              <p className="font-medium text-[12px]  text-blue-700 text-center">Partner & Director, Plural Tech
Angel Investor and IIT-IIM
Startup Mentor</p>
            </div>
            {/* Co-Chief Patron 3 */}
            <div className="mx-4 mb-4 px-20">
              <img
                src={Cochief_3}
                alt="Co-Chief Patron 3"
                className="w-60 h-60 rounded-full border-2 border-gray-500 ml-10"
              />
              <p className="mt-2 font-semibold text-[20px]">Aynampudi
Subbarao (ASRao).
</p>
              <p className="font-medium text-[12px] text-blue-700  text-center">Founder President, Indian
Innovators Association</p>
            </div>
          </div>
        </div>
  
        {/* Patrons */}
        <div className="flex flex-col items-center mt-8">
        
          <div className="flex flex-wrap justify-center">
            {/* Patron 1 */}
            <div className="mx-4 mb-4 px-20 ">
              <img
                src={Patrons_1}
                alt="Patron 1"
                className="w-60 h-60 rounded-full border-2 border-gray-500 ml-20"
              />
              <p className="mt-2 font-semibold text-[20px]">Ravi Eswarapu
</p>
              <p className="font-medium text-[12px] text-blue-700  text-center">CEO of ā hub (Andhra University
Incubation Council) and co-
founder of InterviewBuddy</p>
            </div>
            {/* Patron 2 */}
            <div className="mx-4 mb-4 px-15 ">
              <img
                src={Patrons_2}
                alt="Patron 2"
                className="w-60 h-60 rounded-full border-2 border-gray-500 ml-40 "
              />
              <p className="mt-2 font-semibold text-[20px]">Dr. Vidya Sripad Desai
</p>
              <p className="font-medium text-[12px]  text-blue-700 text-center">Professor & HOD, AIIMS Mangalagiri
Leader in Women's Development, AIIMS</p>
            </div>

            <div className="mx-4 mb-4 px-15 ">
              <img
                src={Patrons_3}
                alt="Patron 2"
                className="w-60 h-60 rounded-full border-2 border-gray-500 ml-40 "
              />
              <p className="mt-2 font-semibold text-[20px]">Yogesh Brahmankar
</p>
              <p className="font-medium text-[12px] text-blue-700  text-center">CEO, Symbiosis TBI
Entrepreneurship & Innovation,
Symbiosis University</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-b border-dotted border-gray-600 my-10" />
      </>
    );
  };
  
  
  export default Committee;
  