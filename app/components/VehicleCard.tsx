export default function VehicleCard() {

  return (

    <div className="vehicle-card">

      <h3>ALPINA B5 BITURBO</h3>

      <div className="vehicle-info">
        <p>Baujahr: 2019</p>
        <p>Motor: V8 Biturbo</p>
        <p>Leistung: 608 PS</p>
      </div>

      <div className="vehicle-status">

        <p className="status-title">
          Fahrzeugstatus
        </p>

        <div className="status-grid">
          <span>✓ Fahrzeug OK</span>
          <span>✓ Batterie OK</span>
          <span>✓ Reifendruck OK</span>
          <span>✓ Service aktuell</span>
        </div>

      </div>

    </div>

  );

}