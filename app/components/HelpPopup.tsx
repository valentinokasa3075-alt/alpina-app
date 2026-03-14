import { useState, useEffect } from "react";
import RatingPopup from "./RatingPopup";
import LiveMap from "./LiveMap";

type HelpPopupProps = {
  onClose: () => void;
};

export default function HelpPopup({ onClose }: HelpPopupProps) {

  const [showRating, setShowRating] = useState(false);

  const [eta, setEta] = useState(4); // geschätzte Ankunftszeit in Minuten
  const [arrived, setArrived] = useState(false);

  useEffect(() => {

    const timer = setInterval(() => {
      setEta((prev) => {

        if (prev <= 1) {
          clearInterval(timer);
          setArrived(true);
          return 1;
        }

        return prev - 1;
      });
    }, 5000);

    return () => clearInterval(timer);

  }, []);

  return (

    <div className="help-overlay">

      <div className="help-box">

        <h2>Soforthilfe</h2>

        <p className="help-sub">
          Alpina Specialist verbunden.
        </p>

        <div className="expert-help">

          <div className="expert-photo">
            <img src="/expert.png" alt="Alpina Specialist"/>
          </div>

          <div>
            <p className="expert-name">Alpina Specialist</p>
            <p className="expert-meta">⭐ 4.9 Bewertung</p>
            <p className="expert-meta">12 Jahre Erfahrung</p>
          </div>

        </div>

        {/* LIVE TRACKING */}

        <div className="live-tracking">

          <p className="tracking-title">📍 Live Tracking</p>

          <p className="tracking-info">
            Alpina Specialist ist unterwegs zu Ihrem Standort.
          </p>

          <p className="tracking-meta">
            Entfernung: 4.2 km
          </p>

          <p className="tracking-meta">
            Ankunft: ca. {eta} Minuten
          </p>

          <p className="tracking-status">
            Status: {arrived ? "vor Ort" : "unterwegs"}
          </p>

          {arrived && (
            <p className="tracking-arrived">
              🚨 Alpina Specialist ist jetzt vor Ort angekommen
            </p>
          )}

          <LiveMap />

        </div>

        <button
          className="close-btn"
          onClick={() => setShowRating(true)}
        >
          Schliessen
        </button>

      </div>

      {showRating && (
        <RatingPopup onClose={onClose} />
      )}

    </div>

  );

}