import { useState } from "react";
import GarageList from "./GarageList";

type AppointmentPopupProps = {
  selectedDate: string;
  setSelectedDate: (value: string) => void;
  selectedTime: string;
  setSelectedTime: (value: string) => void;
  serviceType: string;
  setServiceType: (value: string) => void;
  locationType: string;
  setLocationType: (value: string) => void;
  onConfirm: (garage: string) => void;
  onClose: () => void;
};

export default function AppointmentPopup({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  serviceType,
  setServiceType,
  locationType,
  setLocationType,
  onConfirm,
  onClose
}: AppointmentPopupProps) {

  const [showGarages, setShowGarages] = useState(false);
  const [selectedGarage, setSelectedGarage] = useState("");

  return (

    <div className="help-overlay">

      <div className="help-box">

        <h2>Termin planen</h2>

        <p className="help-sub">
          Wähle Datum, Uhrzeit, Service und Ort
        </p>

        <p className="form-label">Datum</p>

        <input
          type="date"
          value={selectedDate}
          onChange={(e)=>setSelectedDate(e.target.value)}
        />

        <p className="form-label">Uhrzeit</p>

        <div className="time-grid">

          <button
            className={`time-btn ${selectedTime==="09:00" ? "active":""}`}
            onClick={()=>setSelectedTime("09:00")}
          >
            09:00
          </button>

          <button
            className={`time-btn ${selectedTime==="11:00" ? "active":""}`}
            onClick={()=>setSelectedTime("11:00")}
          >
            11:00
          </button>

          <button
            className={`time-btn ${selectedTime==="14:00" ? "active":""}`}
            onClick={()=>setSelectedTime("14:00")}
          >
            14:00
          </button>

        </div>

        <p className="form-label">Service</p>

        <div className="service-grid">

          <button
            className={`service-btn ${serviceType==="Wartung" ? "active":""}`}
            onClick={()=>setServiceType("Wartung")}
          >
            Wartung
          </button>

          <button
            className={`service-btn ${serviceType==="Diagnose" ? "active":""}`}
            onClick={()=>setServiceType("Diagnose")}
          >
            Diagnose
          </button>

          <button
            className={`service-btn ${serviceType==="Beratung" ? "active":""}`}
            onClick={()=>setServiceType("Beratung")}
          >
            Beratung
          </button>

        </div>

        <div className="location-grid">

          <button
            className={`location-btn ${locationType==="home" ? "active":""}`}
            onClick={()=>setLocationType("home")}
          >
            Durchführung vor Ort beim Kunden
          </button>

          <button
            className={`location-btn ${locationType==="garage" ? "active":""}`}
            onClick={()=>{
              setLocationType("garage");
              setShowGarages(true);
            }}
          >
            Fahrzeug zur Alpina Garage bringen
          </button>

        </div>

        {showGarages && (
          <GarageList
            onSelect={(garage)=>{
              setSelectedGarage(garage);
              setShowGarages(false);
            }}
          />
        )}

        <div className="popup-buttons">

          <button
            className="primary-btn"
            onClick={() => onConfirm(selectedGarage)}
          >
            Termin bestätigen
          </button>

          <button
            className="close-btn"
            onClick={onClose}
          >
            Schliessen
          </button>

        </div>

      </div>

    </div>

  );

}