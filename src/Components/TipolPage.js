import React from 'react'
import { useParams } from 'react-router-dom';
import classes from './TipolPage.module.css';
import { getData } from "../Data/data";
import Contact from './Contact';
const TipolPage = () => {
    const {id}= useParams();
    const data = getData();
    const tipol= data.find(tipol=>  tipol.id===id);
    console.log(tipol)
  return (
    <>
      <div className={`${classes.header}`}>
        <img src={tipol.image} alt="..." />
      </div>
      <div className="container">
        {tipol.description.map((item) => (
          <section key={item.title}>
            <div className={`${classes.title}`}>{item.title}</div>
            <div className={`${classes.description}`}>{item.p}</div>
          </section>
        ))}
      </div>
      <Contact></Contact>
    </>
  );
}

export default TipolPage