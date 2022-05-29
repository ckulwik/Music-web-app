import "../styles/separator.css";

const Separator = ({ title }) => {
  return (
    <div
      className="sep-container"
      //   data-aos="flip-right"
      //   data-aos-duration="800"
      //   data-aos-delay="100"
      //   data-aos-once
    >
      <h2>{title}</h2>
      <div className="underline" />
    </div>
  );
};

export default Separator;
