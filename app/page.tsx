"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import VehicleCard from "./components/VehicleCard";
import HelpPopup from "./components/HelpPopup";
import AppointmentPopup from "./components/AppointmentPopup";
import AdvisorPopup from "./components/AdvisorPopup";
import ExpertsNearby from "./components/ExpertsNearby";
import MatchingPopup from "./components/MatchingPopup";

export default function HomePage() {

  const [showVehicle, setShowVehicle] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);

  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [locationType, setLocationType] = useState("");

  const [advisorPopup, setAdvisorPopup] = useState(false);

  const [showExperts, setShowExperts] = useState(false);

  const [showMatching, setShowMatching] = useState(false);

  // NEU: Garage speichern
  const [selectedGarage, setSelectedGarage] = useState("");

  return (

    <main className="alpina-page">

      <Hero
        showVehicle={showVehicle}
        setShowVehicle={setShowVehicle}
        setShowHelp={setShowMatching}
        setShowAppointment={setShowAppointment}
        setShowExperts={setShowExperts}
      />

      {/* ================================================= */}
      {/* FEATURE WRAPPER (NEU - sorgt für saubere Abstände) */}
      {/* ================================================= */}

      <div className="features-wrapper">

      {/* FEATURE SEKTION (USP etc.) */}

      <section className="feature-grid">

        <div className="feature-card">
          <h3>USP</h3>
          <p>
            Weltweit erster On-Demand-Service für Alpina-Fahrzeuge.
          </p>
        </div>

        <div className="feature-card">
          <h3>Premium-Service</h3>
          <p>
            Alpina-Profis kommen direkt zum Kunden – ohne Werkstattbesuch.
          </p>
        </div>

        <div className="feature-card">
          <h3>Live Tracking</h3>
          <p>
            Expertenprofil, Status, Chat und Terminübersicht in einer App.
          </p>
        </div>

        <div className="feature-card">
          <h3>Maximale Convenience</h3>
          <p>
            Probleme in 2 Klicks melden und sofort Unterstützung erhalten.
          </p>
        </div>

      </section>

      {/* DESIGN & KUNDENNUTZEN */}

      <section className="feature-grid">

        <div className="feature-card">
          <h3>Design & Usability</h3>

          <p>
            • Edles, minimalistisches App-Design in Alpina-Blau
          </p>

          <p>
            • Intuitive Bedienung mit klaren Buttons
          </p>

        </div>

        <div className="feature-card">
          <h3>Kundennutzen</h3>

          <p>
            • Exklusivität durch zertifizierte Alpina-Experten
          </p>

          <p>
            • Komfort: Service kommt direkt zum Kunden
          </p>

        </div>

      </section>

      </div>

      {showMatching && (
        <MatchingPopup
          onFinish={()=>{
            setShowMatching(false);
            setShowHelp(true);
          }}
        />
      )}

      {showHelp && (
        <HelpPopup
          onClose={() => setShowHelp(false)}
        />
      )}

      {showAppointment && (
        <AppointmentPopup
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          serviceType={serviceType}
          setServiceType={setServiceType}
          locationType={locationType}
          setLocationType={setLocationType}
          onConfirm={(garage)=>{
            setSelectedGarage(garage);
            setAdvisorPopup(true);
            setShowAppointment(false);
          }}
          onClose={()=>setShowAppointment(false)}
        />
      )}

      {advisorPopup && (
        <AdvisorPopup
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          serviceType={serviceType}
          locationType={locationType}
          selectedGarage={selectedGarage}
          onClose={()=>setAdvisorPopup(false)}
        />
      )}

      {showExperts && (
        <ExpertsNearby
          onClose={() => setShowExperts(false)}
        />
      )}

    </main>

  );
}
