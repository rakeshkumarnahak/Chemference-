import './About.css';
import sept30 from "../assets/timeline/sept30.png"
import oct1 from "../assets/timeline/oct1.png"
import oct2 from "../assets/timeline/oct2.png"

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <div className="about-event-section">
          <h2 className='about-title'>About the Event</h2>
          <p>
          ChEmference is a well-acclaimed, national-level conference in the field of Chemical Engineering and Technology in India which was initiated by the research scholars of IIT Kanpur in 2008. It aims for the promotion of young research talent and opens up an opportunity to showcase their innovative ideas or concepts before eminent academicians and industry professionals. <br/><br/>
      
          Starting from the year 2008, the event has been successfully organized by seven different Institutes namely, IIT Kanpur (2008 and 2010), IIT Madras (2009), IISc Bangalore (2011), jointly by IIT Bombay and ICT Mumbai (2012), IIT Hyderabad (2015) and IIT Gandhinagar (2016) followed by IIT Bombay again in 2018 and IIT Hyderabad in 2020.<br/><br/>
          This is the first time that BITS Pilani, K. K. Birla Goa Campus has got the opportunity to host its 10th edition in 2023 with more enthusiasm than before. Continuing the legacy, this year we plan to have plenary and keynote lectures by noted academics and industry experts in Chemical Engineering field followed by invited talks by young faculty apart from the oral and poster presentations from the aspiring students from various institutes like IIT&apos;s, IISc, IISER&apos;s, NIT&apos;s, Central universities, National labs and reputed Private universities across the country. This year&apos;s ChEmference will also include national level Sci-art exhibition on display apart from having a career opportunity platform for third and final year PhD students of Chemical Engineering.<br/><br/>
          This year&apos;s ChEmference will also publish the selected research work in Springer Nature or any reputed journal (to be decided).<br/><br/>
          ChEmference 2023 will have a total six technical sessions over two days covering all possible research areas in chemical engineering and related fields. ChEmference 2023 will serve as a platform for research scholars from all over the country to showcase their work and meet experts from industry and academia. This will also provide an ideal opportunity for industry representatives to identify their interests in a particular domain resulting in collaborations and recruitment possibilities of some of the best talents around the country. Furthermore, some of these young research scholars will be potential faculty members in the near future and thereby potential customers for the best research products.<br/><br/>
          </p>
        </div>
        <div className="timeline-section">
          <div className="where">
            <h2>Where</h2>
            <p>
              Department Of Chemical Engineering,<br/>
              NIT Rourkela,
              Sector 1, Rourkela<br/>
              Sundargarh- 769008
            </p>
          </div>
          <div className="when">
            <h2>When</h2>
            <div className="dates-grid">
            <img className="dates-image" src={sept30} alt="sept30" />
            <img className="dates-image" src={oct1} alt="oct1" />
            <img className="dates-image" src={oct2} alt="oct2" />
            </div>
          </div>
        </div>
        <div className="important-dates-section">
          <h2>IMPORTANT DATES</h2>
          <p>
          <strong>June 01 - September 15, 2023:</strong> Abstract submission <br/>
          <strong>June 01 - September 15, 2023:</strong> Sci-Art Image Submission <br/>
          <strong>July 30, - September 15,2023:</strong> Notification of Acceptance <br/>
          <strong>August 01 - September 15, 2023:</strong> Online registration (accepted abstracts) <br/>
          <strong>October 05, 2023:</strong> Start of Full Paper submission <br/>
          <strong>September 30 - October 02, 2023:</strong> ChEmference 2023 Conference in BITS Pilani, Goa <br/>
          </p>
        </div>
        <div className="registration-fees-section">
          <h2>REGISTRATION FEES</h2>
          <p>
          <strong>For Student:</strong> 3,000 ₹ (Early Bird) <br/>
          <strong>For Faculty:</strong> 6,000 ₹ (Early Bird) <br/>
                                  7,000 ₹ (Late fee)<br/>
          <strong>For Industry Delegates:</strong> 8,000 ₹ <br/>
          <strong>For Exhibition Stall:</strong> 30,000 ₹ <br/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
