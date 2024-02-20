import styles from './Hotel.module.css'; // Import CSS module for Hotel styling
import Hotel1Image from "../assets/bits-logo.png";
import Hotel2Image from "../assets/bits-logo.png";
import Hotel3Image from "../assets/bits-logo.png";
import Hotel4Image from "../assets/bits-logo.png";
import Hotel5Image from "../assets/bits-logo.png";
import Hotel6Image from "../assets/bits-logo.png";

const Hotel = () => {
  return (
    <div className={styles.hotel}>
      <h2 className={styles.sectionTitle}>Hotels</h2>
      <p>For Reservation, Contact: DPSC Hospitality, Panaji &ndash; Goa<br/>
        Mob: +91 9172999922 / +919738360260<br/>
        Email: info@dpschospitality.com / info.dpschospitality@gmail.com<br/>
        Website: www.dpschospitality.com / www.bapusvilla.com</p>
      <div className={styles.hotelGrid}>
        <div className={styles.hotelCard}>
          <img src={Hotel1Image} alt="Hotel" />
          <h3>Hotel 1</h3>
          <div className={styles.stars}>★★★★★</div>
          <p>Description</p>
        </div>
        <div className={styles.hotelCard}>
          <img src={Hotel2Image} alt="Hotel" />
          <h3>Hotel 2</h3>
          <div className={styles.stars}>★★★★★</div>
          <p>Description</p>
        </div>
        <div className={styles.hotelCard}>
          <img src={Hotel3Image} alt="Hotel" />
          <h3>Hotel 3</h3>
          <div className={styles.stars}>★★★★★</div>
          <p>Description</p>
        </div>
        <div className={styles.hotelCard}>
          <img src={Hotel4Image} alt="Hotel" />
          <h3>Hotel 4</h3>
          <div className={styles.stars}>★★★★★</div>
          <p>Description</p>
        </div>
        <div className={styles.hotelCard}>
          <img src={Hotel5Image} alt="Hotel" />
          <h3>Hotel 5</h3>
          <div className={styles.stars}>★★★★★</div>
          <p>Description</p>
        </div>
        <div className={styles.hotelCard}>
          <img src={Hotel6Image} alt="Hotel" />
          <h3>Hotel 6</h3>
          <div className={styles.stars}>★★★★★</div>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
