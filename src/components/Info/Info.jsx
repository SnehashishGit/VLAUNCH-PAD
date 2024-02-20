

import Dates from "../../images/Info/dates.png";
import Reward from  "../../images/Info/reward.png"

function Info() {
  
    return (
      <>
        <section id="featured" className="page-padding py-[12.5rem] bg-white">
          <div className="container">
            {/* title */}
            <div className="flex flex-col text-center items-center relative ">
              <p className="font-semibold text-black text-[30px] relative uppercase z-10 underline p-10">
                Important Dates
              </p>

            <div className="p-20">              
            <img
                src={Dates}
                alt="date"
                className=""
              />
            </div>


              <p className="font-semibold text-blue-400 text-[30px] relative uppercase z-10  p-10">
              Embark on your journey through the qualifying rounds of VLaunchPad 2024. Here are the important dates:
              </p>
              <p className="font-semibold text-rose-900 text-[20px] relative  z-10 underline p-5">
              • First Round of Selection: 4<sup>th</sup> to 10 <sup>th</sup> March 2024
              
              </p>
              <p className="font-semibold text-rose-900 text-[20px] relative  z-10 underline p-2">

              • Second Short list: 11<sup>th</sup> to 15<sup>th</sup> March 2024

              </p>

              <p className="font-semibold text-rose-900 text-[20px] relative  z-10 underline p-4">

              • Shortlisted Teams’ Announcement: 16<sup>th</sup> March 2024

              </p>

              <p className="font-semibold text-rose-900 text-[20px] relative  z-10 underline p-4">

              • Grand Finale at VIT-AP University: Selected Teams’ Presentations on 23<sup>rd</sup> March 2024
              </p>
            </div>
  
          </div>
        </section>
        {/* featured cta */}
        <hr className="border-b border-dotted border-gray-400 my-6" />
      </>
    );
  }
  
  export default Info;