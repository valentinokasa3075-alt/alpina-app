import { useState } from "react";
import FakeVideoCall from "./FakeVideoCall";

type VideoCallPopupProps = {
  onClose: () => void;
};

export default function VideoCallPopup({ onClose }: VideoCallPopupProps) {

  const [callStarted, setCallStarted] = useState(false);

 return (

  <>
  
  {!callStarted && (

    <div className="help-overlay">

      <div className="help-box">

        <h2>Videodiagnose</h2>

        <p className="help-sub">
          Verbindung zu einem Alpina Specialist wird hergestellt...
        </p>

        <div className="expert-photo">
          <img src="/expert.png" alt="Alpina Specialist"/>
        </div>

        <p className="expert-name">
          Alpina Specialist
        </p>

        <p className="expert-meta">
          ⭐ 4.9 Bewertung
        </p>

        <p className="expert-meta">
          12 Jahre Erfahrung
        </p>

        <div className="video-buttons">

          <button
            className="primary-btn"
            onClick={() => setCallStarted(true)}
          >
            Videocall starten
          </button>

          <button
            className="close-btn"
            onClick={onClose}
          >
            Abbrechen
          </button>

        </div>

      </div>

    </div>

  )}

  {callStarted && (
    <FakeVideoCall
      onEnd={() => {
        setCallStarted(false);
        onClose();
      }}
    />
  )}

  </>
);
}