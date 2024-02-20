import classes from './Navbar.module.css'; // Import the CSS module for Navbar styling
import chemferenceLogo from "../assets/chemference-logo.png";
import bitsLogo from "../assets/bits-logo.png";
import g20Logo from "../assets/g20-logo.png";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={chemferenceLogo} alt="chemferenceLogo" />
        <img className={classes.logo} src={bitsLogo} alt="bitsLogo" />
        <img className={classes.logo} src={g20Logo} alt="g20Logo" />
      </div>
      <div className={classes.navbarLinks}>
        <a className={classes.navbarLink}>Home</a>
        <a className={classes.navbarLink}>About</a>
        <a className={classes.navbarLink}>Speakers</a>
        <a className={classes.navbarLink}>Schedule</a>
        <a className={classes.navbarLink}>Venue</a>
        <a className={classes.navbarLink}>Hotels</a>
        <a className={classes.navbarLink}>Gallery</a>
        <a className={classes.navbarLink}>Sponsors</a>
        <a className={classes.navbarLink}>Our Team</a>
        <a className={classes.navbarLink}>Register</a>
      </div>
    </div>
  );
}

export default Navbar;
