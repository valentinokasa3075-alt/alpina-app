import { useEffect } from "react";

type MatchingPopupProps = {
  onFinish: () => void;
};

export default function MatchingPopup({ onFinish }: MatchingPopupProps) {

  useEffect(() => {

    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);

  }, [onFinish]);

  return (

    <div className="help-overlay">

      <div className="help-box">

        <h2>Alpina Specialist wird gesucht</h2>

        <p className="help-sub">
          Wir verbinden Sie mit dem nächstverfügbaren Alpina Specialist.
        </p>

        <div className="matching-status">

          <p>✔ Standort wird übermittelt</p>

          <p>✔ Fahrzeugdaten werden geladen</p>

          <p>🔄 Spezialist wird zugeteilt...</p>

        </div>

      </div>

    </div>

  );

}