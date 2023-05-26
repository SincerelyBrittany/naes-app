import React, { useState } from "react";
import "./Fetch.css";
import ReviewItem from "./ReviewItem";

const Feed = (props) => {
  const count = props.count;
  console.log(count, "COUNT");
  // const { id, caption, media_type, media_url } = props.feed;
  // let post;

  // switch (media_type) {
  //   case "VIDEO":
  //     post = (
  //       <video
  //         width="600"
  //         height="400"
  //         src={media_url}
  //         type="video/mp4"
  //         controls
  //         playsinline
  //       ></video>
  //     );
  //     break;
  //   case "CAROUSEL_ALBUM":
  //     post = (
  //       <img width="100%" height="auto" id={id} src={media_url} alt={caption} />
  //     );
  //     break;
  //   default:
  //     post = (
  //       <img width="100%" height="auto" id={id} src={media_url} alt={caption} />
  //     );
  // }

  return (
    <>
      {/* <div className="child">{post}</div> */}

      {/* {props?.testimonial?.testimonials?.map((feed, index) => ( */}
      <ReviewItem review={props.testimonial[count]} />
      {/* ))} */}
    </>
  );
};

export default Feed;
