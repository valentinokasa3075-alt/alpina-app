import { useState, useEffect } from "react";
import RatingPopup from "./RatingPopup";

type FakeVideoCallProps = {
  onEnd: () => void;
};

export default function FakeVideoCall({ onEnd }: FakeVideoCallProps) {

  const [seconds, setSeconds] = useState(598);
  const [showRating, setShowRating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime = `${minutes}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;

  return (

    <div className="video-overlay">

      <div className="video-screen">

        <img
          src="/expert.png"
          alt="Alpina Specialist"
          className="video-expert"
        />

        <div className="call-timer video-timer">
          {formattedTime}
        </div>

        <div className="self-camera">
          <img src="/user.png" alt="You"/>
        </div>

        <div className="video-info">
          Alpina Specialist
        </div>

        <div className="video-controls">

          <button className="video-btn">
            🔇
          </button>

          <button className="video-btn">
            📹
          </button>

          <button
            className="video-btn end-call"
            onClick={() => setShowRating(true)}
          >
            ❌
          </button>

        </div>

      </div>

      {showRating && (
        <RatingPopup onClose={onEnd} />
      )}

    </div>

  );

}