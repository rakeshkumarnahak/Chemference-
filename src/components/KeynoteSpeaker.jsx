import classes from './KeynoteSpeaker.module.css'; // Import the CSS module for KeynoteSpeaker styling
import img1 from "../assets/bits-logo.png";
import img2 from "../assets/bits-logo.png";
import img3 from "../assets/bits-logo.png";
import img4 from "../assets/bits-logo.png";
import img5 from "../assets/bits-logo.png";

const KeynoteSpeaker = () => {
  return (
    <div className={classes.keynoteSpeaker}>
      <h2 className={classes.sectionTitle}>Keynote Speakers</h2>
      <div className={classes.speakerGrid}>
        <div className={classes.speaker}>
          <img src={img1} alt="Speaker" />
          <div className={classes.speakerOverlay}>
            <p className={classes.speakerName}>Speaker 1</p>
            <p className={classes.speakerOrganization}>Organization 1</p>
          </div>
        </div>
        <div className={classes.speaker}>
          <img src={img2} alt="Speaker" />
          <div className={classes.speakerOverlay}>
            <p className={classes.speakerName}>Speaker 2</p>
            <p className={classes.speakerOrganization}>Organization 2</p>
          </div>
        </div>
        <div className={classes.speaker}>
          <img src={img3} alt="Speaker" />
          <div className={classes.speakerOverlay}>
            <p className={classes.speakerName}>Speaker 3</p>
            <p className={classes.speakerOrganization}>Organization 3</p>
          </div>
        </div>
        <div className={classes.speaker}>
          <img src={img4} alt="Speaker" />
          <div className={classes.speakerOverlay}>
            <p className={classes.speakerName}>Speaker 4</p>
            <p className={classes.speakerOrganization}>Organization 4</p>
          </div>
        </div>
        <div className={classes.speaker}>
          <img src={img5} alt="Speaker" />
          <div className={classes.speakerOverlay}>
            <p className={classes.speakerName}>Speaker 5</p>
            <p className={classes.speakerOrganization}>Organization 5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeynoteSpeaker;
