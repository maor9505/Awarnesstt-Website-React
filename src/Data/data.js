import refImage from "../assest/images/refImage.jpeg";
import candleImage from "../assest/images/candlestipol2.jpeg";
import combineImage from "../assest/images/massagetipol.jpeg";

const data = [
  {
    id: "reflexology",
    title: "רפקסולוגיה",
    description: [
      {
        title: "מה זה רפקסולוגיה?",
        p: (
          <p>
            רפלקסולוגיה = השתקפות של כל איברי מערכות הגוף בכף הרגל. אני משתמש
            בטכניקות מגע בנקודות שונות הקשורות לאיברים ומערכות בגוף האדם, כמובן
            שהכל נעשה עם הקשבה מלאה ולב פתוח. המטרה היא לאזן את המערכות בגוף
            בעזרת עבודה רפלקסולוגית, שחרור תקיעויות גופניות, נפשיות ותודעתיות.
            להעלות את המודעות לחיבור והקשבה פנימה, שחרור דפוסים והרגלים מעכבים,
            למען ההתפתחות והגדילה שלנו. אנחנו הרופאים הכי טובים של עצמנו, כיוון
            שאנחנו היחידים שיכולים להעיד מתי מרגיש לנו נעים ומתי לא. הסשן
            ברפלקסולוגיה מתייחס אל האדם כמכלול שלם, לכן לכל התנסות פיזית יש
            השפעה על הנפש, הרגש והרוח.
          </p>
        ),
      },
      {
        title: "באילו מקרים זה עוזר?",
        p: (
          <p>
            כאב
            <br />
            מתח
            <br />
            עייפות
            <br />
            חרדה
            <br />
            החלמה ממחלה ממושכת / תאונות
            <br />
            הריון תקין, מהשבוע ה-12 עד השבוע ה-28.
            <br />
            חיזוק ואיזון מערכות (נשימה,עצבים,עיכול,חיסון)
          </p>
        ),
      },
      {
        title: "אז מה אני מציע?",
        p: (
          <p>
            סשן מלא 50-45 דקות.
            <br />
            סשן מקוצר 30 דקות..
            <br />
            סדרה של 6 סשנים מלאים בתשלום מראש. (מומלץ)
          </p>
        ),
      },
      {
        title: "עובדה מעניינת",
        p: (
          <p>
            ישנם עדויות לפני 5000 שנה, בתקופת הפרעונים, לשימוש בעיסוי כפות
            הרגליים כדרך לחזק את כוחם ורוחם של המלכים,
            <br />
            שנחשבו לאלים באותה תקופה. כאלים פשוט היה אסור להם לחלות. מטורף!
          </p>
        ),
      },
    ],
    image: refImage,
  },
  {
    id: "hopi-candles",
    title: "נרות הופי",
    description: [
      {
        title: "מה זה נרות הופי? ואיך זה עובד?",
        p: (
          <p>
            נרות הופי נקראים על שם שבט ההופי (שבט אינדיאני ממדינת אריזונה) שנהג
            להשתמש בעלה של בננה מגולגל להוצאת חרקים ועצמים שחדרו לאושני הציידים
            של השבט.
            <br />
            הנרות שלי עשויים משעוות דבורים טבעית, המשחררים אבקה בעלת תכונות
            אנטיספטיות (אנטיביוטיקה מהטבע) לתוך תעלת האוזן.
            <br />
            אבקה זו מגינה על תעלת האוזן וממשיכה לטפל בה במשך שעות לאחר תום
            הטיפול.
          </p>
        ),
      },
      {
        title: "מה היתרונות של השיטה?",
        p: (
          <p>
            סשן בנרות הופי מגביר את פעילות המוח, מאזן את לחץ הדם לטווח קצר,
            <br />
            משפר את פעילות מערכת הלימפה באזור הראש והצוואר, מקל על קשיי שמיעה.
          </p>
        ),
      },
      {
        title: "למי מומלץ?",
        p: (
          <p>
            שחיינים
            <br />
            צוללנים
            <br />
            למי שעובד בסביבת עבודה רועשת
            <br />
            ילדים, נשים, גברים
            <br />
            אנשים עם מכשירי שמיעה
          </p>
        ),
      },
      {
        title: "באילו מקרים זה עוזר?",
        p: (
          <p>
            כאב אוזניים
            <br />
            צלצולים באזניים
            <br />
            דלקות אוזניים חוזרות (לא בזמן דלקת עצמה)
            <br />
            נחירות
            <br />
            נזלת כרונית
            <br />
            ירידה בשמיעה
            <br />
            עודף שעווה
            <br />
            גרוד באוזן
            <br />
            הרגעה של מערכת העצבים
            <br />
            מכשירי שמיעה
            <br />
            ילדים מגיל שנה ומעלה
            <br />
            נשים בהריון תקין מהשבוע ה- 12 עד השבוע ה- 28
          </p>
        ),
      },
      {
        title: "טיפול בנרות הופי אסור במקרים הבאים:",
        p: (
          <p>
            חורים בעור התוף
            <br />
            צינורות באוזן
            <br />
            חום גבוהה
            <br />
            פצע פתוחבאפרכסת או תעלת השמע
            <br />
            סחרחורת
            <br />
            בעיות לב
            <br />
            סרטן- עד 5 שנים לאחר ההחלמה
            <br />
            שבץ מוחי
            <br />
            לחץ דם לא מאוזן
          </p>
        ),
      },
      {
        title: "אז מה אני מציע?",
        p: <p>סשן מלא אורכו נע בין 35-30 דקות.</p>,
      },
      {
        title: "כיצד מתכוננים לסשן?",
        p: (
          <p>
            להימנע מצריכת מזון כשעתיים לפני הסשן שלכם כדי שלא תגיעו אליו עם
            תחושות של
            <br />
            כבדות ואי נוחות, להגיע לאחר מקלחת מרעננת, לא להשתמש בכלי טיפוח כמו
            בושם
            <br />
            ודורדורנט, הסשן גורם להאצה של זרימת הדם לכן מומלץ להקפיד לשתות מים
            <br />
            במהלך היום בכדי להמנע מסחרחורות לאחר הסשן.
          </p>
        ),
      },
    ],
    image: candleImage,
  },
  {
    id: "combined-massage",
    title: "עיסוי משולב",
    description: [
      {
        title: "עיסוי משולב",
        p: (
          <p>
            עיסוי אשר משלב סגנונות שונים ומגוונים של אומנות המגע על מנת למקסם את
            רמת
            <br />
            ההרפיה, ההנאה והרגיעה של המטופל. במסגרת הסשן של העיסוי המשולב תוכלו
            <br />
            להנות מטעימה ממגוון של סוגי עיסוי– תאילנדי, שבדי, רפלקסולוגיה, עיסוי
            פנים
            <br />
            וקרקפת, רקמות עמוק, שיאצו וכו'.
          </p>
        ),
      },
      {
        title: "תבונת הידיים",
        p: (
          <p>
            תבונת הידיים הינה אומנות המגע המבוססת על חיבור לנשימה, חיבור ללב,
            חיבור
            <br />
            למגע, זוהי השיטה שאני מתמקצע בה בכדי ליצור תקשורת הרמונית עם המטופל.
          </p>
        ),
      },
      {
        title: "למי מומלץ?",
        p: (
          <p>
            לרוב לאוכלוסיה בגילאים 20 ומעלה אשר חפצים בחוויה שמשרה נינוחות
            ורגיעה,
            <br />
            אשר תומכת בכם לפרוק את המתח והלחץ שגופכם ותודעתכם נמצאים בו. עיסוי
            <br />
            משולב מסייע גם להמריץ את זרימת הדם, לזרז פינוי של רעלים מגופכם,
            בנוסף אנו
            <br />
            מעוניינים שמהערכת הפארא-סימפטטית )איזון וריפוי( תהיה זו המכתיבה את
            האיזון
            <br />
            האנרגטי ובעזרת העיסוי ניתן לאפשר למערכות הגוף לעבוד בצורה מאוזנת
            ונינוחה.
          </p>
        ),
      },
      {
        title: "כיצד להתכונן לסשן?",
        p: (
          <p>
            להימנע מצריכת מזון כשעתיים לפני הסשן שלכם כדי שלא תגיעו אליו עם
            <br />
            תחושות של כבדות ואי נוחות, להגיע לאחר מקלחת מרעננת, לא להשתמש בכלי
            <br />
            טיפוח כמו בושם ודורדורנט, הסשן גורם להאצה של זרימת הדם לכן מומלץ
            <br />
            להקפיד לשתות מים במהלך היום בכדי להמנע מסחרחורות לאחר הסשן.
          </p>
        ),
      },
      {
        title: "אז מה אני מציע?",
        p: (
          <p >
            משך הזמן של סשן מלא הינו בין 60-45 דקות. ניתן גם להאריך את משך הזמן
            <br />
            לסשן כפול שאורכו הוא 90-80 דקות.
            <br />
            אורך הסשן נקבע בהתאם להעדפת המטופל והתקציב שלו{" "}
          </p>
        ),
      },
    ],
    image: combineImage,
  },
];
export const getData=()=>{
  return data;
}
