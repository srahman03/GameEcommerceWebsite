import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './gameSwiper.css';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import GameSlide from './GameSlide';

function GameSwiper({ games }) {
  // State to manage the index of the active video
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

  // Function to toggle the active video based on index
  const handleToggleVideo = (index) => {
    setActiveVideoIndex(index === activeVideoIndex ? null : index);
  };

// Swiper component for the game slides
  return (
    <Swiper
      effect={'coverflow'} 
      grabCursor={true} 
      navigation={true} // Enable navigation arrows
      loop={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 35,
        stretch: 200,
        depth: 250,
        modifier: 1,
        slideShadows: true, // Enable slide shadows
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true, // Disable autoplay on user interaction
      }}
      modules={[EffectCoverflow, Navigation, Autoplay]} // Swiper modules to enable
      className="gameSwiper" // Custom class for styling
    >
      {games.map((game, index) => (
        <SwiperSlide key={game._id}>
          <GameSlide
            game={game}
            index={index}
            activeVideoIndex={activeVideoIndex}
            handleToggleVideo={handleToggleVideo}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default GameSwiper;
