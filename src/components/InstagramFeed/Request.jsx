import axios from "axios";
import "./Fetch.css";
import React from "react";
import { Container } from "react-bootstrap";
import Feed from "./Feed";

export default function Request() {
  // const api = axios.create({
  //   baseURL: `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=IGQVJYbURoa1ZA2Wi1IcDVGYmM5bXJDMWZAsX2FNeHlkekc1eUg0WThLUEx5MnVsY3NyTXF1U0p6MEZALcHY4Nk1EcWRsV2FEM04zRUxZAVWNzaDVHVEpRWmZAqSVNvanQtdHVZAeElrazRueUVSZA1JfQXZAPMwZDZD`,
  // });

  const [data, setData] = React.useState([]);

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

  // console.log(data?.data, "this is data");

  return (
    <Container>
      <div className="container">
        <main class="containertwo">
          {data?.data?.map((feed) => (
            <Feed key={feed.id} feed={feed} />
          ))}
        </main>
      </div>
    </Container>
  );
}
