import React from 'react'
import { useParams } from 'react-router-dom';
import classes from './TipolPage.module.css';
import { getData } from "../Data/data";
import Contact from './Contact';
const TipolPage = () => {
    const {id}= useParams();
    const data=getData();
    const tipol= data.find(tipol=>  tipol.id===id);
    console.log(tipol)
  return (
    <>
      <div className={`${classes.header}`}>
        <img src={tipol.image} alt="..." />
        {/* <div className={`${classes["title-image"]}`}>{tipol.title}</div> */}
      </div>
      <div className='container'>
        <section>
          <div className={`${classes.title}`}>{tipol.content.title}</div>
          <div className={`${classes.description}`}>
            {tipol.content.description}
          </div>
        </section>
        <section>
          <div className={`${classes.title}`}>{tipol.content.title2}</div>
          <div className={`${classes.description}`}>
            {tipol.content.description2}
          </div>
        </section>
        <section>
          <div className={`${classes.title}`}>{tipol.content.title3}</div>
          <div className={`${classes.description}`}>
            {tipol.content.description3}
          </div>
        </section>
        <section>
          <div className={`${classes.title}`}>{tipol.content.title4}</div>
          <div className={`${classes.description}`}>
            {tipol.content.description4}
          </div>
        </section>
      </div>
      <Contact></Contact>
    </>
  );
}

export default TipolPage