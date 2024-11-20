// components/RatingBintang.js
import { useState } from "react";

const RatingBintang = ({ rating, setRating, totalStars = 5 }) => {
  const [hoveredStar, setHoveredStar] = useState(null);

  const handleMouseEnter = (index) => setHoveredStar(index);
  const handleMouseLeave = () => setHoveredStar(null);

  const handleClick = (index) => {
    setRating(index + 1); // Set rating when star is clicked
  };

  const renderStars = () => {
    return Array.from({ length: totalStars }).map((_, index) => {
      const isFilled =
        hoveredStar !== null ? index <= hoveredStar : index < rating;
      return (
        <span
          key={index}
          className={`star ${isFilled ? "filled" : ""}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color: isFilled ? "gold" : "gray",
            transition: "color 0.3s",
          }}
        >
          ★
        </span>
      );
    });
  };

  return <div className="rating-container">{renderStars()}</div>;
};

export default RatingBintang;
