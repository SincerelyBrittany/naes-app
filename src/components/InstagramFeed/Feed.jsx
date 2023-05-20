import React from "react";
import { Container } from "react-bootstrap";
import Finicky from "../../assets/finicky1.jpeg";
import "./Fetch.css";

const Feed = (props) => {
  const { id, caption, media_type, media_url } = props.feed;
  console.log(id, "this is id");
  let post;

  switch (media_type) {
    case "VIDEO":
      post = (
        <video
          width="600"
          height="400"
          src={media_url}
          type="video/mp4"
          controls
          playsinline
        ></video>
      );
      break;
    case "CAROUSEL_ALBUM":
      post = (
        <img width="100%" height="auto" id={id} src={media_url} alt={caption} />
      );
      break;
    default:
      post = (
        <img width="100%" height="auto" id={id} src={media_url} alt={caption} />
      );
  }

  return (
    // <Container>
    //   <main class="containertwo">
    //     <div class="child">

    <div className="child">{post}</div>

    //     </div>
    //   </main>
    // </Container>
  );
};

export default Feed;
