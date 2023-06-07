import React from "react";
import ReviewItem from "./ReviewItem";

export default function Review(props) {
  const testimonials = props.testimonial.testimonials;
  const [data, setData] = React.useState([]);
  const [count, setCount] = React.useState(0);

  const mapData = (apiData) => {
    // const dataMapped = apiData.map((pic, index) => {
    setCount(count + 1);
    return <ReviewItem key={index} review={data[count]} />;
    // });
    // return dataMapped;
  };

  return (
    <>
      {mapData(testimonials)}
      {/* {testimonials.map((test, index) => (
        <ReviewItem key={index} review={data[count]} />
      ))} */}
    </>
  );
}

// export default function Review(props) {
//   const testimonials = props.testimonial.testimonials;
//   const [data, setData] = React.useState();

//   console.log(testimonials, "this is testimonials");

//   return (
//     <>
//       {testimonials.map((test, index) => (
//         <ReviewItem key={index} review={test[count]} />
//       ))}
//     </>
//   );
// }

{
  /* <h2>{props?.testimonial?.name}</h2>
      <p>{props?.testimonial?.title}</p> */
}
