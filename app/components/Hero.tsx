import { useState } from "react";
import VideoCallPopup from "./VideoCallPopup";
import VehicleCard from "./VehicleCard";

type HeroProps = {
  showVehicle: boolean;
  setShowVehicle: (value: boolean) => void;
  setShowHelp: (value: boolean) => void;
  setShowAppointment: (value: boolean) => void;
  setShowExperts: (value: boolean) => void;
};

export default function Hero({
  showVehicle,
  setShowVehicle,
  setShowHelp,
  setShowAppointment,
  setShowExperts
}: HeroProps) {

  const [showVideo, setShowVideo] = useState(false);

  return (

    <section className="hero">

      {/* LEFT SIDE */}

      <div className="hero-left">

        <span className="badge">
          NEUES DIGITALES PRODUKT
        </span>

        <div className="title-row">

          <h1>ALPINA CALL</h1>

          <div className="title-logo">
            <img src="/alpina-logo.png" alt="Alpina Logo" />
          </div>

        </div>

        <h2>
          „Dein Alpina. Dein Experte. Ein Knopfdruck.“
        </h2>

        <p className="hero-text">
          Der exklusive On-Demand-Service für Alpina-Fahrer.
          Zertifizierte Experten helfen direkt vor Ort – schnell,
          diskret und premium.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={() => setShowHelp(true)}
          >
            Soforthilfe rufen
          </button>

          <button
            className="primary-btn"
            onClick={() => setShowAppointment(true)}
          >
            Termin planen
          </button>

          <button
            className="primary-btn"
            onClick={() => setShowVideo(true)}
          > 
            Diagnose per Videocall
          </button>

          <button
            className="primary-btn"
            onClick={() => setShowExperts(true)}
          >
            Experte in der Nähe
          </button>

        </div>

        <button
          className="vehicle-toggle-btn"
          onClick={() => setShowVehicle(!showVehicle)}
        >
          Mein Fahrzeug
        </button>

        {showVehicle && <VehicleCard />}

      </div>


      {/* RIGHT SIDE (PHONES) */}

      <div className="hero-right">

        <div className="phones-wrapper">

          <div className="phone phone-left">

            <div className="phone-notch" />

            <div className="phone-screen">

              <div className="app-icon">
                <img src="/alpina-logo.png" alt="Alpina Logo" />
              </div>

              <h3>ALPINA Call</h3>

              <p>
                Request an ALPINA specialist
                to assist you on-site.
              </p>

              <button className="primary-btn">
                REQUEST ASSISTANCE
              </button>

            </div>

          </div>


          <div className="phone phone-right">

            <div className="phone-notch" />

            <div className="phone-screen">

              <div className="app-logo">
                ALPINA CALL
              </div>

              <div className="welcome-box">

                <p className="small-text">
                  Willkommen, Valentino 👋
                </p>

                <p className="small-text">
                  Dein Fahrzeug:
                </p>

                <strong>
                  ALPINA B5 BITURBO, 2019
                </strong>

              </div>

              <div className="action-list">

                <button>Soforthilfe rufen</button>
                <button>Termin planen</button>
                <button>Diagnose per Videocall</button>

              </div>

              <p className="nearest-expert">
                Nächster Experte in deiner Nähe
              </p>

              <div className="expert-card">

                <div className="expert-photo-small">
                  <img src="/expert.png" alt="Alpina Specialist" />
                </div>

                <div className="expert-info">

                  <p className="expert-name">
                    Alpina
                  </p>

                  <p className="expert-role">
                    ALPINA Specialist
                  </p>

                  <p className="expert-meta">
                    ⭐ 4.9 · 12 Jahre Erfahrung
                  </p>

                  <p className="expert-distance">
                    📍 25km entfernt
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {showVideo && (
        <VideoCallPopup
          onClose={() => setShowVideo(false)}
        />
      )}

    </section>

  );

}