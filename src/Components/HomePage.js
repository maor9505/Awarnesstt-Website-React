import React, { useState, useEffect, Suspense,lazy } from "react";
import Loading from "../Common/Loading/Loading";
import { getData } from "../Data/data";
import { getReviews } from "../Data/reviews";
const HomeSection = lazy(() => import("./HomeSection"));
const CardsSection = lazy(() => import("./CardsSection"));
const ReviewsSection = lazy(() => import("./ReviewsSection"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import("../Common/Footer"));
const AboutMeSection = lazy(() => import("./AboutMeSection"));

 const HomePage = () => {
  const [data, setData] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    console.log(getData());
    console.log(getReviews());
    setData(getData());
    setReviews(getReviews());
  }, []);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <HomeSection></HomeSection>
        <AboutMeSection></AboutMeSection>
        <CardsSection data={data}></CardsSection>
        <ReviewsSection reviews={reviews}></ReviewsSection>
        <Contact></Contact>
      </Suspense>
    </div>
  );
};
export default HomePage;