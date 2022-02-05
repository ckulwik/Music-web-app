import "../styles/section.css";
import "../styles/about.css";

const About = () => {
  return (
    <div
      className="page-container about-page"
      data-aos="flip-left"
      data-aos-duration="500"
      data-aos-delay="100"
      data-aos-once
    >
      <p className="about-text">
        Oh hey, thanks for listening to my tunes! Between writing the music and
        developing this website, this has been a year in the making!
      </p>
      <p className="about-text">
        If you find a bug on the website, or have anything you want to say, feel
        free to send an email: chriskulwikmusic@gmail.com.
      </p>
    </div>
  );
};

export default About;
