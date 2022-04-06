import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './CardTipol.module.css';

const CardTipol = (props) => {

  return (
    <div className={`${classes.card}`}>
      <img src={props.img} className={`${classes["card-img-top"]}`} alt="..." />
      <div className={`${classes['card-body']}`}>
        <NavLink to={`/tipol/${props.id}`} className={`${classes.title}`}>{props.title}</NavLink>
      </div>
    </div>
  );
}

export default CardTipol