import classes from './Hero.module.css'; // Import the CSS module for Hero styling

function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes.heroContent}>
        <h1 className={classes.title}>ChEmference - 2024</h1>
        <p className={`${classes.description} ${classes.subtitle}`}>The 11th Chapter</p>
        <p className={classes.description}>30th September, 2023 - 2nd October, 2023<br />
           DEPARTMENT OF CHEMICAL ENGINEERING<br />
           NIT ROURKELA</p>
        <button className={classes.registerBtn}>Register for ChEmference</button>

        <div className={classes.horizontalScroll}>
          <p>**Selected Abstracts will be published in reputed journal as a conference proceeding.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
