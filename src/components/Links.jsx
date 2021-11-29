import "../styles/section.css";

const Links = () => {
  return (
    <div className="links-page-container">
      <div className="links-container">
        <div className="sound-cloud-container">
          <iframe
            title="soundCloud logo, link to chris kulwik's soundcloud"
            className="soundCloud"
            allowtransparency="true"
            scrolling="no"
            frameBorder="no"
            src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fchris-kulwik&color=orange_white&size=40"
            style={{ width: 40 + "px", height: 40 + "px" }}
          ></iframe>
        </div>
        <a href="https://github.com/ckulwik/music-web-app">
          <img
            className="mark"
            alt="github logo, link to chris kulwik's github"
            src="https://music-web-app-songs.s3.us-east-2.amazonaws.com/GitHub-Mark-64px.png"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Links;
