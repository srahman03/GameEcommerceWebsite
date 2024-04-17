import { useState, useEffect } from 'react'
import React from 'react'
import './gameRating.css'

function GameRating({ rating }) {
    // State to hold the stars based on the rating
    const [stars, setStars] = useState([])

    // Function to generate stars based on the rating
    const generateStars = () => {
        let stars = []
        // If the rating is invalid (less than 1 or greater than 5), return empty stars
        if (rating > 5 || rating < 1) {
            return
        }
        // Push stars into the array based on the rating
        for (let i = 0; i < rating; i++) {
            stars.push(i);
        }
        return stars;
    }
// useEffect hook to update stars when the component mounts
useEffect(()=>{
    // Generate stars and set them to the state
    setStars(generateStars());
},[])

    return (
        <div className='gameRating'>
            {stars.map((star, index)=>(
                <i key={star} className="bi bi-star-fill"></i>
            ))}
        </div>
    )
}

export default GameRating