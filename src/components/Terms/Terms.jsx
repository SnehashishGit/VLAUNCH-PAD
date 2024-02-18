import './Terms.css';
import { Link } from 'react-router-dom';

function Terms() {
  
    return (
      <>
        
  
        <section id="featured" className="page-padding py-[12.5rem] bg-white">
          <div className="container">
            {/* title */}
            <div className="flex flex-col text-center items-center relative ">
              <p className="font-semibold text-black text-[30px] relative uppercase z-10 underline p-2">
                Submission Guidelines
              </p>

            

              <h2 className="text-[2.6rem] text-black font-bold my-10">
              This component encompasses the rules, regulations, and instructions for submitting content or engaging in certain activities within a platform, service, or organization.
              </h2>
              <p className="font-semibold text-blue-700 text-[14px] relative uppercase z-10  p-5">
              1. The submission template will be shared with all the students who register for this competition on our website.
              </p>

              <p className="font-semibold text-blue-700 text-[14px] relative uppercase z-10  p-5">
              2. Minimum font-size 11 points. Larger fonts may be used for specific headers or emphasis.
              </p>

              <p className="font-semibold text-blue-700 text-[14px] relative uppercase z-10  p-5">
              3. The submission should be in a PDF format. The size should not exceed 1 MB. Any other form of submission will not be accepted.
              </p>

              <p className="font-semibold text-blue-700 text-[14px] relative uppercase z-10  p-5">
            4. Any submissions other than on the submission page will not be accepted.  
              </p>

              <p className="font-semibold text-blue-700 text-[14px] relative uppercase z-10  p-5">
              5. Any submission to any individual person will not be accepted.
              </p>

              <p className="font-semibold text-blue-700 text-[14px] relative uppercase z-10  p-5">
              6. Any canvassing of any kind will lead to disqualification from this competition.
              </p>

              <p className="font-semibold text-blue-700 text-[14px] relative uppercase z-10  p-5">
              7. Any dishonest means employed during the course of this competition will lead to disqualification from the competition. 
              </p>
            </div>
            
          </div>
           {/* featured cta */}
        <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p> It covers the legal aspects</p>
      <h3> Terms & Conditions </h3>
    </div>
    <div className="gpt3__cta-btn">
    <Link to="/terms">
      <button type="button">Click Here </button>
      </Link>
    </div>
  </div>
    
  <hr className="border-b border-dotted border-gray-400 my-6" />
        </section>
       

      </>
    );
  }
  
  export default Terms;