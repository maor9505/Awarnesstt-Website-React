import React from 'react'
import classes from './Loading.module.css';
const Loading = () => {  
  return (
    <div className={`${classes["bouncing-loader"]}`}>
      <img src={require("../../assest/images/stone2.jpeg")}></img>
      <img src={require("../../assest/images/stone2.jpeg")}></img>
      <img src={require("../../assest/images/stone2.jpeg")}></img>
    </div>
  );
}

export default Loading