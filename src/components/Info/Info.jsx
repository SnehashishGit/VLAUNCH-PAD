

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

              <h2 className="text-[3.6rem] text-black font-bold my-10">
              Navigating the Qualifying Rounds: Key Dates
              </h2>
              <p className="font-semibold text-black text-[30px] relative uppercase z-10  p-10">
              Embark on your journey through the qualifying rounds of VLaunchPad 2024. Here are the important dates:
              </p>
              <p className="font-semibold text-red-600 text-[20px] relative uppercase z-10 underline p-5">
              • First Round of Selection: 4th to 10th March 2024
              
              </p>
              <p className="font-semibold text-red-600 text-[20px] relative uppercase z-10 underline p-2">

              • Second Short list: 11th to 15th March 2024

              </p>

              <p className="font-semibold text-red-600 text-[20px] relative uppercase z-10 underline p-4">

              • Shortlisted Teams’ Announcement: 16th March 2024

              </p>

              <p className="font-semibold text-red-600 text-[20px] relative uppercase z-10 underline p-4">

              • Grand Finale at VIT-AP University: Selected Teams’ Presentations on 23rd March 2024
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