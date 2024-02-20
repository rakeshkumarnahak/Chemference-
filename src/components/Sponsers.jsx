import styles from './Sponsers.module.css'; // Import CSS module for Sponsors styling
import deccan from "../assets/sponsors/deccan.png";
import paradeep_phosphate from "../assets/sponsors/paradeep_phosphate.png";
import sadekar from "../assets/sponsors/sadekar.png";
import serb from "../assets/sponsors/SERB.png";

const Sponsors = () => {
  return (
    <div className={styles.sponsors}>
      <h2 className={styles.sectionTitle}>Sponsors</h2>
      <div className={styles.sponsorsGrid}>
        <div className={styles.sponsor}>
          <img src={deccan} alt="Sponsor" />
        </div>
        <div className={styles.sponsor}>
          <img src={paradeep_phosphate} alt="Sponsor" />
        </div>
        <div className={styles.sponsor}>
          <img src={sadekar} alt="Sponsor" />
        </div>
        <div className={styles.sponsor}>
          <img src={serb} alt="Sponsor" />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
