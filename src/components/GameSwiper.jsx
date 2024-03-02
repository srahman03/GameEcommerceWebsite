import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './gameSwiper.css';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

function GameSwiper({ games }) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

  const handleToggleVideo = (index) => {
    setActiveVideoIndex(index === activeVideoIndex ? null : index);
  };

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      navigation={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 35,
        stretch: 200,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Navigation, Autoplay]}
      className="gameSwiper"
    >
      {games.map((game, index) => (
        <SwiperSlide key={game._id}>
          <div className="gameSlider">
            <img src={game.img} alt="Game Image" />
            <div className={`video ${activeVideoIndex === index ? 'active' : ''}`}>
              <iframe
                width="1280"
                height="720" 
                src={activeVideoIndex === index ? game.trailer : ''}
                title={game.title}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen
              ></iframe>
            </div>
            <div className="content">
              <h2>{game.title}</h2>
              <p>{game.description}</p>
              <div className="buttons">
                <a href="#" className="orderBtn">
                  Order Now
                </a>
                <a href="#" className="playBtn" onClick={() => handleToggleVideo(index)}>
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
      ))}
    </Swiper>
  );
}

export default GameSwiper;
