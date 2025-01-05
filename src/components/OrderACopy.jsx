import React, { useState } from "react";
import About from "../images/about.jpg";
import InitialCheckoutScreen from "./initialCheckoutScreen";

export default function OrderACopy() {
  // State to manage the visibility of the checkout form
  const [showForm, setShowForm] = useState(false);

  // Function to toggle the visibility of the checkout form
  const showCheckoutForm = () => {
    setShowForm(prevState => !prevState);
  };

  return (
    <>
      <section className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img" id="section-counter">
        <div className="container">
          <div className="row d-md-flex align-items-center align-items-stretch">
            <div className="col-md d-flex justify-content-center counter-wrap">
              <div className="block-18 bg-light">
                <div className="text">
                  <strong className="number"></strong>
                  {/* Span that toggles the form visibility */}
                  <span onClick={showCheckoutForm}>
                      {showForm && <h1> Order A Signed Copy</h1>}
                      {!showForm && <h1> Click Here to Order A Signed Copy</h1>}
                  </span>

                  {/* Conditionally render InitialCheckoutScreen */}
                  {showForm && <InitialCheckoutScreen />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

