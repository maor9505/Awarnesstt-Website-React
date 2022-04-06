import React from 'react'
import classes from './CardsSection.module.css'
import CardTipol from './CardTipol';
import ReactCardCarousel from 'react-card-carousel';

const CardsSection = ({data}) => {
  
    return (
      <section id="tipolim-plans">
        <div className={`${classes.content} container`}>
          <div className={`${classes.header}`}>
            <h3>הטיפולים שלי </h3>
          </div>
          <div className={`${classes.main}`}>
            <ReactCardCarousel autoplay={true} autoplay_speed={4000}>
              {data.map((tipol) => (
                <CardTipol
                  key={tipol.id}
                  id={tipol.id}
                  img={tipol.image}
                  title={tipol.title}
                ></CardTipol>
              ))}
            </ReactCardCarousel>
          </div>
          <div className={`${classes.mobile}`}>
            {data.map((tipol) => (
              <CardTipol
                key={tipol.id}
                id={tipol.id}
                img={tipol.image}
                title={tipol.title}
              ></CardTipol>
            ))}
          </div>
        </div>
      </section>
    );
  
}

export default CardsSection