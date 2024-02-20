import classes from './Testimonials.module.css'; // Import the CSS module for testimonial styling
import testimonialImage from "../assets/testimonial-image.jpg";

const Testimonials = () => {
  return (
    <div className={classes.testimonial}>
      <h2 className={classes.sectionTitle}>Guest of Honor</h2>
      <div className={classes.testimonialContainer}>
        <div className={classes.testimonialCard}>
          <div className={classes.testimonialImage}>
            <img src={testimonialImage} alt="Testimonial" />
          </div>
          <div className={classes.testimonialContent}>
            <h3 className={classes.testimonialTitle}>Padma Vibhushan Prof. M. M. SHARMA</h3>
            <p>Padma Vibhushan Prof. Man Mohan Sharma FREng (born May 1, 1937 in Jodhpur, Rajasthan) is an Indian chemical engineer. He was educated at Jodhpur, Mumbai and Cambridge. At the age of 27 years, he was appointed Professor of Chemical Engineering in the Institute of Chemical Technology (UDCT), Mumbai. He later went on to become the Director of Institute of Chemical Technology (ICT/ UDCT/ UICT), the first chemical engineering professor to do so from ICT. In 1990, he became the first Indian engineer to be elected as a Fellow of Royal Society, UK. He was awarded the Padma Bhushan (1987) and the Padma Vibhushan (2001) by the President of India. He has also been awarded the Leverhulme Medal of the Royal Society, the S.S. Bhatnagar Prize in Engineering Sciences (1973), FICCI Award (1981), theVishwakarma medal of the Indian National Science Academy (1985), G.M. Modi Award (1991), Meghnad Saha Medal (1994), and an honorary Doctor of Science degree from Indian Institute of Technology, Delhi (2001).</p>
            <button className={classes.readMore}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
