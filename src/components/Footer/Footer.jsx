import FooterLogo from "../../images/gallery/VIT-AP NEW LOGO with Tag Line.png";

function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="container page-padding py-[10rem]">
          {/* footer div all */}
          <div className="flex justify-between min620:flex-col min620:items-center min620:text-center min620:gap-[5rem] !text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/3 gap-8">
              <img src={FooterLogo} alt="footer_logo" className="w-[18rem]" />
              <p className="text-[15px] font-medium text-[#646464]">
                
              V-Launch Pad
              </p>
      {/*        
              <div className="flex gap-7 text-[18px] text-[#646464] min540:justify-center">
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-facebook-f bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-twitter bg-[#efefef] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-pinterest-p bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-youtube bg-[#efefef] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
                ></i>
              </div> */}
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()} Vit Ap University<br />{" "}
              
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Our Contact</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#d03434]"></span>

              <p className="text-[16px] hover:text-[#333] cursor-pointer text-[#646464] font-medium hover:font-bold">
              Convenor.VLaunchPad@vitap.ac.in
              </p>
              <p className="text-[16px] hover:text-[#333] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Call:+91-8287884966 , +91-9652758395
              </p>
              <p className="text-[16px] hover:text-[#333] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Location:Vit Ap University , Near Vijayawada - 522237, AndhraPradesh.
              </p>
             
            </div>



            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;