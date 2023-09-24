import React, { useState } from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';
export default function Starts({ ratingStar }) {
  const [rating, setRating] = useState(ratingStar);

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label
            key={index}
            style={{ cursor: 'pointer', color: 'gold', fontSize: '1.5rem' }}
            htmlFor="rating"
            onClick={() => setRating(ratingValue)}
          >
            <input
              type="radio"
              value={ratingValue}
              style={{ display: 'none' }}
            />

            {ratingValue <= rating ? (
              <BsStarFill className="mr-1" />
            ) : (
              <BsStar className="mr-1" />
            )}
          </label>
        );
      })}
    </div>
  );
}
