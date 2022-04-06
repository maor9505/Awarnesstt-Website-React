import React from "react";
import { HashLink } from "react-router-hash-link";
import classes from "./HomeSection.module.css";

const HomeSection = () => {
  return (
    <section id="home">
      <div className={`${classes["header-content"]}`}>
        <div className={`${classes["header-text"]}`}>
          <h1>
            “אני לא מרפא אנשים.
            <br />
            אני מאפשר להם למצוא את הריפוי שנשכח מהם,
            <br />
            והוא תמיד בתוכם.”
          </h1>
          <div className={`${classes["more-button"]}`}>
            <HashLink  to={"#aboutMe"}>רוצים לדעת עוד? לחצו כאן</HashLink>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeSection;
