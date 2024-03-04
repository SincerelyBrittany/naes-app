import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Story Time </h2>
          <p>
            Live Book Readings
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    {/* <img src={d.img} alt="..." className="team-img" /> */}
                    <iframe width="560"
                    className="team-img"
                       height="315" 
                      //  src="https://www.youtube.com/embed/JgMVJaJf7Ug?si=tVsfuNkyUeUpTqGP&amp;start=49" 
                       src={d.link}
                       title="YouTube video player" 
                       frameborder="0" 
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                       allowfullscreen>
                       </iframe>
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>

                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
