import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* Entire function Will display the ratings for each game */
const Rating = ({ rating }) => {
    return (
        <div className="game__ratings">
            {new Array(Math.floor(rating)).fill(0).map((_, index) =>
                <FontAwesomeIcon icon="star" key={index} />
            )}

            {!Number.isInteger(rating) && (
                <FontAwesomeIcon icon="star-half-alt" />
            )}
        </div>
    );
};

export default Rating;