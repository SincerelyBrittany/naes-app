import { Image } from "./image";
import React from "react";

export const UpcomingEvents = (props) => {
  return (
    <div id="upcoming-events" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Upcoming Events</h2>
          <p>
           Where you can see the author again
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
          <div
                    key={`name`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title="See Finicky Felicia In The Virtual Museum"
                      largeImage="https://blackbabybooks.com/bcbw-sponsors/"
                      smallImage="../../../img/portfolio/10-large.png"
    
                    />
                     </div>
                  {/* <div
                    key={`name`}
                    className="col-sm-4 col-md-4 col-lg-4"
                  >
                  <Image
                      title="See Finicky Felicia In The Virtual Museum"
                      largeImage="https://blackbabybooks.com/bcbw-sponsors/"
                      smallImage="../../../img/portfolio/10-large.png"
    
                    />
                  </div> */}
            {/* {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."} */}
          </div>
        </div>
      </div>
    </div>
  );
};


