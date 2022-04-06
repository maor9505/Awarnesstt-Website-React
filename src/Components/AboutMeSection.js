import React from 'react'
import classes from './AboutMe.module.css'
 const AboutMeSection = () => {
 return (
   <section id="aboutMe">
     <div className={`${classes.main}`}>
       <div className='container mt-5'>
         <div className={`${classes['header-img']}`}>
           <img
             className={`${classes.img}`}
             src={require("../assest/images/miani.jpeg")}
             alt=""
           ></img>
         </div>
         <h3 className={`${classes.title}`}>מי אני?</h3>
         <p className={`${classes.text}`}>
           שמי ניסן ארז כבר 5 שנים שאני חוקר את התודעה, לומד איך לעבוד איתה
           וליצור הרמוניה עם מה שיש במציאות.
           <br />
           במהלך ריטריט של מודעות עצמית בחו"ל הבנתי שאני מחפש את המהות של החיים.
           <br />
           הדרך שבה אני תופס את המציאות השתנתה, ומאותו הרגע שסיימתי את הריטריט
           החלטתי שאני ממשיך לתרגל את החזרה לנוכחות ולמציאות-
           <br />
           במילים אחרות לחזור לגוף, לחזור ל 5 החושים.
           <br />
           אם זה דרך תנועה, תזונה, מדיטציה, שאילת שאלות, חקירת מחשבות וכו'.
           <br />
           מצאתי דרך לשלב את המהות של התשוקה שלי שהיא חיבור לחיים, עם טכניקת
           מגע.
           <br />
           ההכשרות המוסמכות שלי-
           <br />
           ‏ מטפל ברפלקסולוגיה הוליסטית בשיטת גרינברג ‏ מטפל בעיסוי משולב ‏ מטפל
           בנרות הופי
           <br />‏ "אני לא מרפא אנשים, אני מאפשר להם למצוא את הריפוי שנשכח מהם,
           והוא תמיד נמצא בתוכם"
         </p>
       </div>
     </div>
   </section>
 );
}
export default AboutMeSection;