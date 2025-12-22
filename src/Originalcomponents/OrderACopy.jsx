import React, { useState } from "react";
import InitialCheckoutScreen from "./initialCheckoutScreen";
import "./OrderACopy.css";

export default function OrderACopy() {
  // State to manage the visibility of the checkout form
  const [showForm, setShowForm] = useState(false);

  // Function to toggle the visibility of the checkout form
  const showCheckoutForm = () => {
    setShowForm(prevState => !prevState);
  };

  return (
    <section className="order-copy-section">
      <div className="order-copy-container">
        <div className="order-copy-block">
          <div className="order-copy-content">
            {showForm ? (
              <>
                <div className="form-header">
                  <h1>Order A Signed Copy</h1>
                  <button 
                    className="close-form-btn"
                    onClick={showCheckoutForm}
                  >
                    Back
                  </button>
                </div>
                <InitialCheckoutScreen />
              </>
            ) : (
              <button 
                className="order-copy-btn"
                onClick={showCheckoutForm}
              >
                Click Here to Order A Signed Copy
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

