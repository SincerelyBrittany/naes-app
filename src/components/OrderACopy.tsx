// OrderACopy.tsx - Order A Signed Copy Section Component
import React, { useState } from 'react';
import InitialCheckoutScreen from '../Originalcomponents/initialCheckoutScreen';
import './OrderACopy.css';

const OrderACopy: React.FC = () => {
  // State to manage the visibility of the checkout form
  const [showForm, setShowForm] = useState(false);

  // Function to toggle the visibility of the checkout form
  const showCheckoutForm = () => {
    setShowForm(prevState => !prevState);
  };

  return (
    <section id="order-copy" className="order-copy-section">
      <div className="order-copy-container">
        <div className="order-copy-content">
          <h2 className="order-copy-title">Order A Signed Copy</h2>
          <p className="order-copy-description">
            Get your personalized signed copy of Finicky Felicia!
          </p>
          
          {!showForm && (
            <button 
              className="order-copy-btn"
              onClick={showCheckoutForm}
            >
              Click Here to Order
            </button>
          )}
          
          {showForm && (
            <div className="checkout-form-container">
              <button 
                className="close-form-btn"
                onClick={showCheckoutForm}
              >
                ×
              </button>
              <InitialCheckoutScreen />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderACopy;