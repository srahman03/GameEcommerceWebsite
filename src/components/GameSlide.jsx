import React, { useCallback } from 'react';
import { SwiperSlide } from 'swiper/react';

function GameSlide({ game, index, activeVideoIndex, handleToggleVideo }) {
  
  // Function to handle play button click, toggles video based on index
  const handlePlayClick = useCallback(() => {
    handleToggleVideo(index);
  }, [handleToggleVideo, index]);

  return (
    // Using SwiperSlide component for the slide
    <SwiperSlide>
      <div className="gameSlider">
        <img src={game.img} alt="Game Image" />
        <div className={`video ${activeVideoIndex === index ? 'active' : ''}`}>
          {activeVideoIndex === index && (
            <iframe
              width="1280"
              height="720"
              src={game.trailer}
              title={game.title}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div className="content">
          <h2>{game.title}</h2>
          <p>{game.description}</p>
          <div className="buttons">
            <a href="#" className="orderBtn">
              Order Now
            </a>
            <a href="#" className="playBtn" onClick={handlePlayClick}>
              {activeVideoIndex === index ? (
                <span className="pause">
                  <i className="bi bi-pause-fill"></i>
                </span>
              ) : (
                <span className="play">
                  <i className="bi bi-play-fill"></i>
                </span>
              )}
            </a>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
}

export default GameSlide;
