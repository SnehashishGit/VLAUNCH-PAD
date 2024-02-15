import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: '1. Innovation in Technology and Infrastructure:',
    text: 'Eco-Innovation and Green Technology :Focuses on sustainable solutions to environmental challenges, including renewable energy, recycling technologies,and green construction.  Urbanization and Smart Infrastructure: Emphasizes the development of smart cities, efficient transportation systems, and infrastructure resilience.',
   },
  {
    title: '2. Healthcare and Agricultural Advancements:',
    text: 'Revolutionizing Healthcare and Biosciences: Covers innovations in medicaltechnology, biotechnology, telemedicine, and personalized medicine.Agri-Innovation and Food Security: Targets advancements in sustainable agriculture, precision farming, biofortified crops, and supply chain innovations.',
  },
  {
    title: '3. Digital and Environmental Transformation:',
    text: 'Digital Transformation and AI: Encompasses AI-driven technologies, digitalization of services, cybersecurity, and big data analytics. Environmental Stewardship &amp; Climate Action: Focuses on climate change mitigation, conservation efforts, sustainable ecosystems, and pollution control strategies.',
  },
 
];

const Features = () => (
  <><div  className='Track-section'>
   <p className="font-semibold text-black text-[30px]  text-center p-10 relative uppercase z-10 underline ">
            Tracks and Sub Tracks
        </p>

        <h2 className="text-[3.6rem] text-black font-bold my-10">

        </h2>
  </div>
  <div className="gpt3__features section__padding" id="features">

      <div className="gpt3__features-heading">
        <h1 className="gradient__text  ">We invite participants to explore the frontiers of innovation across three critical sectors: <span style={{ textDecoration: 'underline' }}>Technology and Infrastructure, Healthcare and Agriculture, and Digital and Environmental Transformation.</span> </h1>
        <p>Each sector, divided into specific sub-tracks, is designed to ignite creativity
          and propose actionable solutions for sustainable development. This platform encourages the
          convergence of ideas that can shape the future of Vikasit Bharat, offering visionaries a chance
          to contribute to impactful change through cutting-edge research and development.</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div></>
);

export default Features;