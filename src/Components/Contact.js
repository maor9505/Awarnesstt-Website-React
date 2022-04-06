import React, { useRef, useState } from "react";
import classes from "./Contact.module.css";
import { useForm } from "react-hook-form";

const Contact = () => {
   const {
     register,
     handleSubmit,
     reset,
     formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
     console.log(data);
     reset()
     console.log(data);

   }
  return (
    <section id="Contact">
      <div className={`${classes.main}`}>
        <div className="container ">
          <div className={`${classes.header}`}>
            <span className={`${classes["header-text"]}`}> דברו איתי...</span>
            <i className="fa fa-map-marker">
              <span className={`${classes["header-address"]}`}>
                בית הלל, הצפון הזיתים 92
              </span>
            </i>
            <i className="fa fa-mobile-phone">
              <span className={`${classes["header-address"]}`}>
                פלאפון: 052-5499-651
              </span>
            </i>
          </div>
          <form className={`${classes.form}`} onSubmit={handleSubmit(onSubmit)}>
            <input
              className={`${classes.input}`}
              type="text"
              placeholder="שם:"
              {...register("name", {
                required: true,
                min: 2,
                maxLength: 30,
              })}
            />
            {errors.name && <span  className={`${classes.error}`}>השם שהוכנס אינו תקין</span>}

            <input
              className={`${classes.input}`}
              type="text"
              placeholder="אימייל:"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.Email && (
              <span className={`${classes.error}`}>
                example@gmai.com האימייל שהוכנס אינו תקין, דוגמא
              </span>
            )}

            <input
              className={`${classes.input}`}
              type="tel"
              placeholder=" פלאפון:"
              {...register("Mobile", {
                required: true,
                maxLength: 12,
                pattern: /[0-9]{3}[0-9]{3}[0-9]{4}/i,
              })}
            />
            {errors.Mobile && (
              <span className={`${classes.error}`}>
                המספר שהוכנס אינו תקין, 
              </span>
            )}
            <textarea
              className={`${classes.text}`}
              {...register("text", {
                required: true,
                min: 10,
                maxLength: 120,
                placeholder: "  תוכן הפניה:",
              })}
            />
            {errors.text && (
              <span className={`${classes.error}`}>תוכן הפנייה לא תקין</span>
            )}
            <div className="text-center">
              <button type="submit" className={`${classes.send}`}>
                שליחה
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
