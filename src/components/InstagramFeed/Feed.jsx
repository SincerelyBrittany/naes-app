import React, { useState } from "react";
import "./Fetch.css";
import ReviewItem from "./ReviewItem";

const Feed = (props) => {
  const count = props.count;
  return (
    <>
      <ReviewItem review={props?.testimonial[count + 1]} feed={props.feed} />
    </>
  );
};

export default Feed;
