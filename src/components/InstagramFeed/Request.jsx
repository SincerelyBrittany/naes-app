import axios from "axios";
import "./Fetch.css";
import React from "react";
import { Container } from "react-bootstrap";
import Feed from "./Feed";
import { Testimonials } from "./Testimonials";
import Review from "./Review";

export default function Request() {
  console.log(Testimonials.testimonials);
  const [data, setData] = React.useState([]);
  const num = data?.length;
  console.log(num, "this is numer");
  const [count, setCount] = React.useState(2);

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
        console.log(url, "result");
        console.log(secret, " secret");
        console.log("error", err);
      }
    };

    // fetchData();
  }, []);

  console.log(count, "this is count");

  return (
    <Container>
      <div className="container">
        <main class="containertwo">
          {data?.data?.map((feed, index) => (
            <>
              <Feed key={index} feed={feed} />
              <Review testimonial={Testimonials.testimonials[count]} />
              {count >= 0 ? setCount(count - 1) : null}
            </>
            // {Testimonials.testimonials.map((test) => (
            //   <Review testimonial={test} />
            // ))}
          ))}
        </main>
      </div>
    </Container>
  );
}
