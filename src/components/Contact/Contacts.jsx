



function Contact() {
  
    return (
      <>
        <section id="featured" className="page-padding py-[12.5rem] bg-red-200">
          <div className="container">
            {/* title */}
            <div className="flex flex-col text-center items-center relative ">
              <p className="font-semibold text-red-700 text-[30px] relative uppercase z-10 underline p-5">
              Connecting with Us: Contact Details
              </p>

              <h2 className="text-[1.6rem] text-white font-bold my-10">
              For any inquiries or assistance regarding VLaunchPad 2024, feel free to reach out to our dedicated team:
              </h2>
              <p className="font-semibold text-red-700 text-[30px] relative uppercase z-10  underline p-10">
              Convenor
              </p>
              <p className="font-semibold text-red-500 text-[20px] relative uppercase z-10  p-10">
              • Dr. Usha Seshadri
              •  Email: Convenor.VLaunchPad@vitap.ac.in
              • Mobile No.: +919652758395
              
              </p>
              <p className="font-semibold text-white text-[30px] relative uppercase z-10  p-10">
              We are here to support you on your innovation journey.
              </p>


              <p className="font-semibold text-red-700 text-[30px] relative uppercase z-10 underline p-10">
              Student Coordinators
              </p>
              <h2 className="text-[1.6rem] text-white font-bold my-10">
              Have questions or need clarification? Reach out to our dedicated student coordinators who are here to assist you:
              </h2>

              <p className="font-semibold text-red-500 text-[20px] relative uppercase z-10  p-10">
              •Ms. Apoorva
              • Mobile No.: +918287884966

              •Ms. Keerthi
              • Mobile No.: +919912511913

              •Mr. Ram
              • Mobile No.: +919515572706

              •	Ms. Neha
              • Mobile No.: +919160534522
              
              </p>
            </div>
  
          </div>
        </section>
        {/* featured cta */}
        <hr className="border-b border-dotted border-gray-600 my-10" />
      </>
    );
  }
  
  export default Contact;