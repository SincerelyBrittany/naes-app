import React from "react";

export default function ReviewItem(props) {
  return <div className="child">{props?.review?.name}</div>;
}
