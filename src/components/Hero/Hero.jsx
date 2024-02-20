import { Link } from "react-router-dom";

import MainButton from "../MainButton";

function Hero() {
  return (
    <>
      <section
        id="home"
        className="hero-section w-full h-screen min800:flex min800:justify-center min800:text-center"
      >
        <div className="container-hero">
          {/* hero section */}
          <div
            className="flex flex-col text-white
           absolute hero-text min800:items-center min800:-right-[22rem] min620:-right-[20rem] min800:w-[80%] min540:-right-[17rem] min450:-right-[14rem] min375:-right-[11rem]"
          >

            
            <h1 className="font-bold text-[49px] uppercase mb-[2rem] min450:text-[30px] pt-3">
           V-Launch Pad 2024
              <span className="font-thin"></span>
            </h1>

            <p className="font-semibold text-[20px]  ml-14  mb-[5.5rem] min450:text-[13px] underline">
              3 <sup>rd</sup> ANNUAL BUSINESS PLAN COMPETITION
            </p>

            {/* <MainButton
              color={`text-black`}
              bg={`bg-white`}
              text="Event Details"
              goTo="/pricing"
            /> */}
          </div>
        </div>

      </section>
    </>
  );
}

export default Hero;