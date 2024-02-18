import Reward from  "../../images/Info/reward.png"

function Prizes() {
  
    return (
      <>
        <section className="prizes">

        
        <section id="featured" className="page-padding py-[12.5rem] bg-slate-100">
          <div className="container">
            {/* title */}
            <div className="flex flex-col text-center items-center relative ">
              <p className="font-semibold text-black text-[30px] relative uppercase z-10 underline p-10 ">
              VLaunchPad 2024: Exciting Cash Prizes & Rewards
              </p>

            

            <img
                src={Reward}
                alt="date"
                className=""
              />

              <h2 className="text-[3.6rem] text-blue-400 font-bold my-10">
              Ignite your competitive spirit at VLaunchPad 2024 with our rewarding cash prize lineup!
              </h2>
              <p className="font-semibold text-red-600 text-[20px] relative uppercase z-10  p-10">
              ☆ First Place – INR 50,000/-
                ☆ Second Place – INR 30,000/-
                ☆ Third Place – INR 20,000/-
               <span className="font-semibold text-black text-[20px] relative uppercase z-10 underline p-10">
               Plus, a special category for VIT-AP students:
                ☆ Ten Additional Winners:INR 2,500 each for standout internal projects. </span>
              </p>

              <h2 className="text-[2.6rem] text-black font-bold my-10 underline">
              Unlock Your Potential: Incubation and Internship Opportunities
              </h2>
              <p className="font-semibold text-blue-700 text-[15px] relative uppercase z-10  p-10">
              Incubation Opportunities: Dive into a world of innovation with access to mentoring and funding from angel investors, venture capitalists, and industry leaders through the VIT-AP Technology Business Incubation Foundation (VTBIF).
             Internship Opportunities: Gain real-world experience and guidance through internships and mentoring provided by VTBIF, alongside opportunities to work with entrepreneurs, startups, and industry giants.
              </p>
            </div>
  
          </div>
        </section>
        </section>
        {/* featured cta */}
  
      </>
    );
  }
  
  export default Prizes;