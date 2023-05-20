import React from "react";

export default function Review(props) {
  console.log(props, "this is props");
  return <div className="child">{props?.testimonial?.title}</div>;
}
