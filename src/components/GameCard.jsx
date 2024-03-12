import React, { useContext, useEffect, useState } from 'react';
import './gameCard.css';
import GameRating from './GameRating';
import { AppContext } from '../App';

function GameCard({ game }) {
  const { library, setLibrary, bag, setBag } = useContext(AppContext);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // Retrieve library data from local storage when component mounts
    const storedLibrary = JSON.parse(localStorage.getItem('library'));
    if (storedLibrary) {
      setLibrary(storedLibrary);
    }
  }, [setLibrary]);

  useEffect(() => {
    // Update the liked state based on whether the game is in the library
    setIsLiked(library.some(item => item._id === game._id));
  }, [library, game._id]);

  const handleAddToLibrary = (game) => {
    const updatedLibrary = [...library, game];
    setLibrary(updatedLibrary);
    setIsLiked(true); // Update liked state
    // Save updated library to local storage
    localStorage.setItem('library', JSON.stringify(updatedLibrary));
  };

  const handleRemoveFromLibrary = (game) => {
    const updatedLibrary = library.filter(item => item._id !== game._id);
    setLibrary(updatedLibrary);
    setIsLiked(false); // Update liked state
    // Save updated library to local storage
    localStorage.setItem('library', JSON.stringify(updatedLibrary));
  };

  
  const handleAddtoBag = (event, game) => {
    event.preventDefault();
    // Check if the game is already in the bag
    const isAlreadyInBag = bag.some(item => item._id === game._id);
    if (!isAlreadyInBag) {
      const updatedBag = [...bag, game];
      setBag(updatedBag);
      localStorage.setItem('bag', JSON.stringify(updatedBag)); // Save to local storage
    }
  };
  
  

  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gameCard">
        <img src={game.img} alt={game.title} className="img-fluid" />
        <a href="#" className={`like ${isLiked ? 'active' : undefined}`}
          onClick={isLiked ? () => handleRemoveFromLibrary(game) : () => handleAddToLibrary(game)}>
          <i className="bi bi-heart-fill"></i>
        </a>
        <div className="gameFeature">
          <span className="gameType">{game.level}</span>
          <GameRating rating={game.rating} />
        </div>
        <div className="gameTitle mt-4 mb-3">{game.title}</div>
        <div className="gamePrice">
          {game.discount !== 0 && (
            <>
              <span className="discount"><i>{game.discount * 100}%</i></span>
              <span className="prevPrice">£{game.price.toFixed(2)}</span>
            </>
          )}
          <span className="currentPrice">
            £{((1 - game.discount) * game.price).toFixed(2)}
          </span>
        </div>
        <a href="#" className="addBag" onClick={(event) => handleAddtoBag(event, game)}>
          <i className="bi bi-bag-plus-fill"></i>
        </a>
      </div>
    </div>
  );
}

export default GameCard;
