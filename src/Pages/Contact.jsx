import Footer from "../components/Footer/Footer";


function Contact() {
  
    return (
      <>
        <section id="featured" className="page-padding py-[12.5rem] bg-slate-100">
          <div className="container">
            {/* title */}
            <div className="flex flex-col text-center items-center relative ">
              <p className="font-semibold text-black text-[30px] relative uppercase z-10 underline p-5">
              Connecting with Us: Contact Details
              </p>

              <h2 className="text-[1.6rem] text-black font-bold my-10">
              For any inquiries or assistance regarding VLaunchPad 2024, feel free to reach out to our dedicated team:
              </h2>
              <p className="font-semibold text-red-700 text-[30px] relative uppercase z-10  underline p-10">
              Convenor
              </p>
              <p className="font-semibold text-red-500 text-[20px] relative uppercase z-10  p-5">
              • Dr. Usha Seshadri
              <p> 
             <span className="text-[11px]">• Email:Convenor.VLaunchPad@vitap.ac.in</span>  
            </p>
            <p>
            <span className="text-[12px] p-1">• Mobile No.: +919652758395</span>
            </p>
              
              </p>
              <p className="font-semibold text-red-700 text-[30px] relative uppercase z-10  underline p-5">
               Co Convenor
              </p>
              <p className="font-semibold text-red-500 text-[20px] relative uppercase z-10  p-10">
              • Dr. Sudha Ellison Mathe
              <p className="text-[10px] p-2">
                • Deputy Director, IIEC, VIT-AP University
              </p>
              
             
              
              </p>
              <p className="font-semibold text-black text-[24px] relative uppercase z-10  p-10">
              We are here to support you on your innovation journey.
              </p>

              

              <p className="font-semibold text-red-700 text-[30px] relative uppercase z-10 underline p-10">
              Student Coordinators
              </p>
              <h2 className="text-[1.6rem] text-black font-bold my-5">
              Have questions or need clarification? Reach out to our dedicated student coordinators who are here to assist you:
              </h2>

              <p className="font-semibold text-red-500 text-[20px] relative uppercase z-10  p-10">
              •Ms. Apoorva
              • Mobile No.: +918287884966

              <p>
              •Ms. Keerthi
              • Mobile No.: +919912511913
              </p>

              <p>
              •Mr. Ram
              • Mobile No.: +919515572706
              </p> 


              <p>
              •	Ms. Neha
              • Mobile No.: +919160534522
              </p>

              
              </p>
            </div>
  
          </div>
          
        </section>
        {/* featured cta */}
        <Footer/>
      </>
    );
  }
  
  export default Contact;