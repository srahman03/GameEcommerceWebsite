import React from 'react';
import GameSwiper from '../components/GameSwiper';
import GameCard from '../components/GameCard';

function Home({ games, reference }) {
  // Filter games that have a promotion
  const gamesOnPromotion = games.filter(game => game.discount > 0);

  return (
    <section id="home" className='home active' ref={reference}>
      <div className="container-fluid">
        <div className="row">
          <GameSwiper games={games}/>
        </div> 
        <div className="row mb-4 mt-4" >
          <div className="col-lg-6">
            <h2 className="sectionTitle">Games on promotion</h2>
          </div>
        </div>
        <div className="row">
          {gamesOnPromotion.slice(0, gamesOnPromotion.length).map(game => (
            <GameCard key={game._id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
