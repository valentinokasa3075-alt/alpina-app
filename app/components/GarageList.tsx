type GarageListProps = {
  onSelect: (garage: string) => void;
};

export default function GarageList({ onSelect }: GarageListProps) {

  const garages = [
    {
      name: "ALPINA Service Partner Zürich",
      city: "Zürich",
      distance: "3.2 km",
      rating: "4.8"
    },
    {
      name: "ALPINA Service Partner Bern",
      city: "Bern",
      distance: "9.5 km",
      rating: "4.7"
    },
    {
      name: "ALPINA Service Partner Basel",
      city: "Basel",
      distance: "18 km",
      rating: "4.9"
    },
    {
      name: "ALPINA Service Partner Genf",
      city: "Genf",
      distance: "42 km",
      rating: "4.8"
    }
  ];

  return (

    <div className="experts-list">

      {garages.map((garage, index) => (

        <div key={index} className="expert-card">

          <div className="expert-avatar">
            🏁
          </div>

          <div className="expert-list-info">

            <p className="expert-name">
              {garage.name}
            </p>

            <p className="expert-meta">
              📍 {garage.city}
            </p>

            <p className="expert-meta">
              ⭐ {garage.rating}
            </p>

            <p className="expert-distance">
              {garage.distance} entfernt
            </p>

          </div>

          <button
            className="primary-btn"
            onClick={() => onSelect(garage.name)}
          >
            Auswählen
          </button>

        </div>

      ))}

    </div>

  );
}