// import { useEffect } from "react";
import "../styles/section.css"


const Music = () => {
    // useEffect(() => {
    //     const audioEl = document.getElementsByClassName("audio-player")[0];
    //     audioEl.play();
    // })

    return (
        <div className="page-container">
            <h1 className="page-title">Welcome Music</h1>
            <audio controls className="audio-player">
                <source src="https://music-web-app.s3.us-east-2.amazonaws.com/musicFiles/neverGonna.wav" type="audio/wav" />
                Your browser does not support the audio element.
            </audio>
        </div>
    )
}

export default Music;