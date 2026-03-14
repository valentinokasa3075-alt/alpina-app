type AdvisorPopupProps = {
  selectedDate: string;
  selectedTime: string;
  serviceType: string;
  locationType: string;
  selectedGarage: string;
  onClose: () => void;
};

export default function AdvisorPopup({
  selectedDate,
  selectedTime,
  serviceType,
  locationType,
  selectedGarage,
  onClose
}: AdvisorPopupProps) {

  return (

    <div className="help-overlay">

      <div className="help-box">

        <div className="expert-photo">
          <img src="/expert.png" alt="Alpina Specialist"/>
        </div>

        <h2>Termin bestätigt ✓</h2>

        <p className="help-sub">
          Deine Alpina Specialist übernimmt nun deinen Termin.
        </p>

        <p className="confirm-date">
           Datum: {selectedDate} · {selectedTime} Uhr
        </p>

        <p className="confirm-service">
          Service: {serviceType}
        </p>

        <p className="confirm-location">
          Ort: {locationType === "home"
          ? "Service vor Ort beim Kunden"
          : (selectedGarage || "Service in der Alpina Garage")}
        </p>

        {locationType === "home" && (
          <p className="confirm-location">
            Adresse: 📍 Bernstrasse 1, 3001 Bern
          </p>
        )}

        <button
          className="close-btn"
          onClick={onClose}
        >
          OK
        </button>

      </div>

    </div>

  );

}