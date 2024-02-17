
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
            About Us
            </p>

           
          </div>
          {/* grid */}
                      {/*  */}
          <div className="mt-[10rem]">
            <div className="grid grid-cols-2 grid-rows-2 w-full min620:grid-cols-1">
              <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
                
                <h2 className="text-[36px] font-bold mt-3">About VIT-AP University </h2>
                <p className="text-[16px] font-medium text-[#646464] mt-5 p-5 ">
                Initiating its journey in 2017 in Amaravati, Andhra Pradesh, VIT-AP University has quickly established itself as a burgeoning center of higher education in India. Spanning 100 acres, the University encompasses seven schools that offer 24 Undergraduate, Postgraduate, and Ph.D. programmes in Engineering, Sciences, Arts and...


                </p>
                 <MainButton
              color={`text-white`}
              bg={`bg-red-600 `}
              text="Read more"
              goTo="/about"
            />
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem]">
                <img
                  src={Img3}
                  alt="about_img"
                  className="w-full h-full object-contain bg-center "
                />
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem]">
                <img
                  src={Img4}
                  alt="about_img"
                  className="w-full h-full object-none bg-center"
                />
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
                
                <h2 className="text-[36px] font-bold mt-3">VIT-AP School of Business</h2>
                <p className="text-[16px] font-medium text-[#646464] mt-5 p-5 ">
                The VIT-AP School of Business (VSB) stands at the forefront of educational excellence, with a visionary mission to nurture the leaders of tomorrow, capable of addressing the complex challenges and seizing the opportunities of the future.Our commitment is ..
                </p>

                <MainButton
              color={`text-white`}
              bg={`bg-red-600 `}
              text="Read more"
              goTo="/about"
            />
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