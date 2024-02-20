import styles from './EventVenue.module.css'; // Import CSS module for EventVenue styling
import DepartmentImage1 from "../assets/bits-logo.png";
import DepartmentImage2 from "../assets/bits-logo.png";
import DepartmentImage3 from "../assets/bits-logo.png";
import DepartmentImage4 from "../assets/bits-logo.png";

const EventVenue = () => {
  return (
    <div className={styles.eventVenue}>
      <h2 className={styles.sectionTitle}>Event Venue</h2>
      <div className={styles.venueGrid}>
        <div className={styles.leftGrid}>
          {/* Embed live Google Maps */}
          <iframe
            title="Google Maps"
            className={styles.googleMaps}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11629.356263568111!2d84.87888753359526!3d22.253223756689103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1966b1b8d077cd%3A0x78ff7d2c55ae5796!2sNational%20Institute%20of%20Technology%20Rourkela!5e0!3m2!1sen!2sin!4v1645312746826!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className={styles.rightGrid}>
            <h3>DEPARTMENT OF CHEMICAL ENGINEERING,<br/> NIT ROURKELA</h3>
          <p>
            
            The Department of Chemical Engineering at BITS Pilani K K Birla Goa Campus was established in 2004. In its early days, it was referred to as Chemical Engineering Group before it was referred to as a Department in 2009. It offers a strong integrated First Degree academic program (B. E. Hons.) in Chemical Engineering and also a dynamic Higher Degree Programme – M. E. (Chemical) that reflects the evolution of the Department. Over the years, the academic program has evolved into a strong core curriculum complemented by electives in the important emerging areas of Chemical Engineering.
          </p>
        </div>
      </div>
      <div className={styles.imageGrid}>
        <div className={styles.image}>
          <img src={DepartmentImage1} alt="Department Image" />
        </div>
        <div className={styles.image}>
          <img src={DepartmentImage2} alt="Department Image" />
        </div>
        <div className={styles.image}>
          <img src={DepartmentImage3} alt="Department Image" />
        </div>
        <div className={styles.image}>
          <img src={DepartmentImage4} alt="Department Image" />
        </div>
        <div className={styles.image}>
          <img src={DepartmentImage1} alt="Department Image" />
        </div>
        <div className={styles.image}>
          <img src={DepartmentImage2} alt="Department Image" />
        </div>
        <div className={styles.image}>
          <img src={DepartmentImage3} alt="Department Image" />
        </div>
        <div className={styles.image}>
          <img src={DepartmentImage4} alt="Department Image" />
        </div>
      </div>
    </div>
  );
}

export default EventVenue;
