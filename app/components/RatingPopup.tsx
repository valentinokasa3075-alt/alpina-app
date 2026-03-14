import { useState } from "react";

type RatingPopupProps = {
  onClose: () => void;
};

export default function RatingPopup({ onClose }: RatingPopupProps) {

  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [comment, setComment] = useState("");

  const submitRating = () => {
    setSubmitted(true);

    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (

    <div className="help-overlay">

      <div className="help-box">

        {!submitted && (
          <>
            <h2>Bewertung</h2>

            <p className="help-sub">
              Wie war deine Erfahrung mit dem Alpina Specialist?
            </p>

            <div className="rating-stars">

              {[1,2,3,4,5].map((star) => (
                <span
                  key={star}
                  onClick={() => setRating(star)}
                  style={{
                    fontSize:"28px",
                    cursor:"pointer",
                    color: star <= rating ? "#FFD700" : "#666"
                  }}
                >
                  ★
                </span>
              ))}

            </div>

            <textarea
              className="rating-comment"
              placeholder="Optional: Möchtest du uns noch etwas mitteilen?"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <button
              className="primary-btn"
              onClick={submitRating}
            >
              Bewertung senden
            </button>
          </>
        )}

        {submitted && (
          <>
            <h2>Vielen Dank für dein Feedback.</h2>

            <p className="help-sub">
              Es hilft uns, den Alpina Premium-Service kontinuierlich zu perfektionieren.
            </p>
          </>
        )}

      </div>

    </div>

  );
}