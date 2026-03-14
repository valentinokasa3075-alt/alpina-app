import { useEffect, useState } from "react";

export default function LiveMap() {

  const [position, setPosition] = useState(10);

  useEffect(() => {

    const timer = setInterval(() => {
      setPosition((prev) => {

        if (prev >= 90) return prev;

        return prev + 5;
      });
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (

    <div className="live-map">

      <div className="map-road">

        <div
          className="map-car"
          style={{ left: `${position}%` }}
        >
          🚗
        </div>

        <div className="map-destination">
          📍
        </div>

      </div>

    </div>

  );

}