import React from "react";
import { CountUp } from "use-count-up";

export default function Counter() {
  return (
    <>
      <section
        className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img"
        id="section-counter"
      >
        <div className="container">
          <div className="row d-md-flex align-items-center align-items-stretch">
            <div className="col-md d-flex justify-content-center counter-wrap">
              <div className="block-18 bg-light">
                <div className="text">
                  <strong className="number">
                    <CountUp isCounting end={500} duration={3.2} />
                  </strong>
                  <span>Copies Sold</span>
                </div>
              </div>
            </div>
            {/* <div className="col-md d-flex justify-content-center counter-wrap">
              <div className="block-18 bg-light">
                <div className="text">
                  <strong className="number">
                    <CountUp isCounting end={600} duration={3.2} />
                  </strong>
                  <span>Copies Released</span>
                </div>
              </div>
            </div> */}
            {/* <div className="col-md d-flex justify-content-center counter-wrap">
              <div className="block-18 bg-light">
                <div className="text">
                  <strong className="number">
                  <CountUp isCounting end={340} duration={3.2} />
                  </strong>
                  <span>Cup Of Coffee</span>
                </div>
              </div>
            </div> */}
            {/* <div className="col-md d-flex justify-content-center counter-wrap">
              <div className="block-18 bg-light">
                <div className="text">
                  <strong className="number">
                  <CountUp isCounting end={12000} duration={3.2} />
                  </strong>
                  <span>Happy Readers</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
