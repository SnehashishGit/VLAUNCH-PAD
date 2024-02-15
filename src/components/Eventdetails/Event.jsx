
import MainButton from "../MainButton";

import Img3 from "../../images/gallery/VIT-AP NEW LOGO with Tag Line.png";
import Img4 from "../../images/gallery/VSB.png";



function Event() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <>
      <section id="featured" className="page-padding py-[12.5rem] bg-white">
        <div className="container">
          {/* title */}
          <div className="flex flex-col text-center items-center relative ">
            <p className="font-semibold text-black text-[30px] relative uppercase z-10 underline ">
            Our Events
            </p>

           
          </div>
          {/* grid */}
                      {/*  */}
          <div className="mt-[10rem]">
            <div className="grid grid-cols-2 grid-rows-2 w-full min620:grid-cols-1">
              <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
                
                <h2 className="text-[36px] font-bold mt-3">VLaunchPad 2024 </h2>
                <p className="text-[16px] font-medium text-[#646464] mt-5">
                Dive into VLaunchPad 2024, a beacon of innovation under the &quot;Vikasit Bharat@2047&quot;
                initiative at VIT-AP University. We invite thinkers and innovators to bring forward their ideas
            in Technology, Healthcare, Agriculture, Digital, and Environmental sectors, vying for a prize
                pool of ₹3 Lakhs.


                </p>
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem]">
                <img
                  src={Img3}
                  alt="about_img"
                  className="w-full h-full object-fill bg-center "
                />
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem]">
                <img
                  src={Img4}
                  alt="about_img"
                  className="w-full h-full object-fill bg-center"
                />
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
                
                <h2 className="text-[36px] font-bold mt-3">Igniting Innovation for Vikasit Bharat</h2>
                <p className="text-[16px] font-medium text-[#646464] mt-5">
                Elevate your idea from concept to reality and contribute to the growth of Vikasit Bharat.
                 Whether you&#39;re aiming to revolutionize sectors with sustainable innovations or aspiring for
                    academic research excellence, let&#39;s redefine the future together!

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* featured cta */}
      <hr className="border-b border-dotted border-gray-400 my-6" />
    </>
  );
}

export default Event;