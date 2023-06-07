import axios from "axios";
import "./Fetch.css";
import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import Feed from "./Feed";
import { Testimonials } from "./Testimonials";
import Review from "./Review";

export default function Request() {
  const [data, setData] = React.useState([]);
  const countRef = useRef(-1);

  useEffect(() => {
    countRef.current = countRef.current + 1;

    // if (data)
    //   data.forEach(() => {
    //     countRef.current = countRef.current + 1;
    //   });
  }, [data]);

  React.useEffect(() => {
    const fetchData = async () => {
      const secret = import.meta.env.VITE_REACT_APP_API_KEY;
      const url =
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&limit=3&access_token=` +
        `${secret}`;
      try {
        const result = await axios(url);

        setData(result.data);
      } catch (err) {
        // console.log("error", err);
      }
    };

    // fetchData();
  }, []);

  return (
    <Container>
      <div className="container">
        <h1>Count: {countRef.current}</h1>
        <main className="containertwo">
          {/* {data?.data?.map((feed, index) => ( */}
          <>
            <Feed
              // key={index}
              // feed={feed}
              testimonial={Testimonials.testimonials}
              count={countRef.current}
            />
          </>
          {/* ))} */}
        </main>
      </div>
    </Container>
  );
}
