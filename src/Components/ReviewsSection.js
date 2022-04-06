import React from 'react'
import ReviewCard from './ReviewCard';
import  classes from './ReviewsSection.module.css'
const ReviewsSection = ({ reviews }) => {

  return (
    <section id="reviews">
      <div className={`${classes.main}`}>
        <div className="row mt-5">
          <div className={`${classes.header}`}>
            <h3>הביקורות שלי</h3>
          </div>
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              desc={review.description}
            ></ReviewCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection