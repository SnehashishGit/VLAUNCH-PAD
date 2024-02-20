import Footer from "../components/Footer/Footer";






function Tracksub() {
  return (
    <>
      <section className="login-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-black absolute bottom-[25px] text-[3rem] font-bold">
            About Us
          </h1>
        </div>
        <div className="page-padding py-[5rem]">
        
            {/* title div -- */}
            <div className="flex flex-col !text-left relative items-right justify-center md1000:items-center md1000:!text-center">

             

              <h2 className="text-[3.6rem] max-w-[53rem] font-bold mb-2 pt-20 px-10">
              Tracks and Sub Tracks
              </h2>
              <h2 className="text-[2.6rem] max-w-[53rem] font-semibold mb-2 pt-20 px-10">
              We invite participants to explore the frontiers of innovation across three critical sectors:
              </h2>
              <p className="text-[#646464] font-medium text-[15px] max-w-[200rem] p-10 ">
              
              Each sector, divided into specific sub-tracks, is designed to ignite creativity
          and propose actionable solutions for sustainable development. This platform encourages the
          convergence of ideas that can shape the future of Vikasit Bharat, offering visionaries a chance
          to contribute to impactful change through cutting-edge research and development.


              </p>











              <h2 className="text-[2.6rem] max-w-[200rem] font-bold mb-2 pt-20 px-10">
              1. Innovation in Technology and Infrastructure:
              </h2>

              <p className="text-[#646464] font-medium text-[15px] max-w-[200rem] p-10 ">
              
              Eco-Innovation and Green Technology :Focuses on sustainable solutions to environmental challenges, including renewable energy, recycling technologies,and green construction.  Urbanization and Smart Infrastructure: Emphasizes the development of smart cities, efficient transportation systems, and infrastructure resilience.

              </p>
              <h2 className="text-[2.6rem] max-w-[200rem] font-bold mb-2 pt-20 px-10">
              2. Healthcare and Agricultural Advancements:
              </h2>

              <p className="text-[#646464] font-medium text-[15px] max-w-[200rem] p-10 ">
              
              Revolutionizing Healthcare and Biosciences: Covers innovations in medicaltechnology, biotechnology, telemedicine, and personalized medicine.Agri-Innovation and Food Security: Targets advancements in sustainable agriculture, precision farming, biofortified crops, and supply chain innovations.

              </p>

              <h2 className="text-[2.6rem] max-w-[200rem] font-bold mb-2 pt-20 px-10">
              3. Digital and Environmental Transformation:
              </h2>

              <p className="text-[#646464] font-medium text-[15px] max-w-[200rem] p-10 ">
              Digital Transformation and AI: Encompasses AI-driven technologies, digitalization of services, cybersecurity, and big data analytics. Environmental Stewardship &amp; Climate Action: Focuses on climate change mitigation, conservation efforts, sustainable ecosystems, and pollution control strategies.
              

              </p>

             

            </div>
             {/* img side */}



            {/*  */}
          </div>
          {/*  */}

       <Footer/>
      </section>
    </>
  );
}

export default Tracksub;