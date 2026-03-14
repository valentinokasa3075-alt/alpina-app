import { useState } from "react";
import ExpertChat from "./ExpertChat";

type ExpertsNearbyProps = {
  onClose: () => void;
};

export default function ExpertsNearby({ onClose }: ExpertsNearbyProps) {

  const [showChat, setShowChat] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState("");

  const openChat = (name: string) => {
    setSelectedExpert(name);
    setShowChat(true);
  };

  const experts = [
    {
      name: "Markus Steiner",
      rating: "4.9",
      distance: "3 km entfernt",
      status: "🟢 Online",
      image: "/expert.png"
    },
    {
      name: "Lukas Meier",
      rating: "4.8",
      distance: "6 km entfernt",
      status: "🟡 Antwortet in ca. 10 Min",
      image: "/expert.png"
    },
    {
      name: "Daniel Keller",
      rating: "4.9",
      distance: "11 km entfernt",
      status: "🔴 Offline",
      image: "/expert.png"
    }
  ];

  return (

    <div className="help-overlay">

      <div className="help-box">

        <h2>Experten in deiner Nähe</h2>

        <p className="help-sub">
          Zertifizierte Alpina Specialists stehen für Beratung bereit.
        </p>

        <div className="experts-list">

          {experts.map((expert, index) => (

            <div className="expert-card" key={index}>

              <div className="expert-avatar">
                👨‍🔧
              </div>

              <div className="expert-list-info">
                <p className="expert-name">{expert.name}</p>
                <p className="expert-meta">⭐ {expert.rating}</p>
                <p className="expert-meta">📍 {expert.distance}</p>
                <p className="expert-meta">{expert.status}</p>
              </div>

              <button
                className="primary-btn"
                onClick={() => openChat(expert.name)}
              >
                Chat starten
              </button>

            </div>

          ))}

        </div>

        <button
          className="close-btn"
          onClick={onClose}
        >
          Schliessen
        </button>

      </div>

      {showChat && (
        <ExpertChat
          expertName={selectedExpert}
          onClose={() => setShowChat(false)}
        />
      )}

    </div>

  );

}