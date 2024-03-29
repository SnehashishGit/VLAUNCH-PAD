
import AboutUs from "../../images/logo/About.png"

function About() {
  return (
    <>
      <section className="flex flex-col justify-between gap-2 about-section pb-[20rem] ">


          {/* text-img div */}
          <div
            id="about"
            className=" grid grid-cols-[50fr,50fr] gap-[3rem] md1000:grid-cols-1"
          >
            {/* about text */}
            <div className="mt-[10.5rem] relative md1000:items-left md1000:flex md1000:flex-col md1000:text-left md1000:w-[full]">
              <p className="text-black font-semibold text-[30px] relative uppercase z-10  md1000:text-center pl-14 md1000:pl-0 mb-12 underline">
              V-Launch Pad
              </p>

              
              <p className="text-[17px] text-[#646464] font-medium  pl-16">
              Dive into VLaunchPad 2024, a beacon of innovation under the “Vikasit Bharat@2047” initiative at VIT-AP University. We invite thinkers and innovators to bring forward their ideas in Technology, Healthcare, Agriculture, Digital, and Environmental sectors, vying for a prize pool of ₹3 Lakhs.
Elevate your idea from concept to reality and contribute to the growth of Vikasit Bharat. Whether you’re aiming to revolutionize sectors with sustainable innovations or aspiring for academic research excellence, let’s redefine the future together!


<p><span className="text-[16px] font-bold leading-tight text-black  ">Organized by VIT-AP School of Business (VSB) in collaboration with VIT-AP Technology Business Incubation Foundation (VTBIF) and Institute’s Innovation Council (IIC)</span></p>
              </p>
             
              

              {/* cta button */}

            </div>
            {/* img side */}


            <div className="relative md1000:hidden ">
              <img
                src={AboutUs}
                alt="abtus"
                className="abt-us"
                
              />

               </div>

          </div>

      </section>
    </>
  );
}

export default About;