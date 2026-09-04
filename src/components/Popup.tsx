// Popup.tsx - Popup Component for Events and Newsletter
import React, { useState, useEffect } from 'react';
import { popupConfig, shouldShowPopup, markPopupClosed } from './Popupconfig';
import { getMailchimpSubscribeUrl } from '../config/site';
import { trackSubscribe } from '../lib/analytics';
import './Popup.css';

const Popup: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (shouldShowPopup(popupConfig.activePopup)) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        document.body.style.overflow = 'hidden';
      }, popupConfig.delayTime);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = (): void => {
    setIsVisible(false);
    document.body.style.overflow = 'unset';
    markPopupClosed(popupConfig.activePopup);
  };

  const handleSubscribe = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const mailchimpUrl = getMailchimpSubscribeUrl();

    try {
      if (!mailchimpUrl) {
        throw new Error(
          'Newsletter is not configured yet. Please try again later or use the contact form.'
        );
      }

      // Mailchimp expects form-urlencoded POST; JSONP-style via hidden form is also common.
      // Using fetch with no-cors so the browser can submit without CORS errors.
      const formData = new FormData();
      formData.append('EMAIL', email);
      // Honeypot field Mailchimp embeds often use
      formData.append('b_bot', '');

      await fetch(mailchimpUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      // no-cors hides the response; treat as success if the request did not throw
      trackSubscribe(true);
      setShowSuccess(true);
      setIsSubmitting(false);

      setTimeout(() => {
        closePopup();
      }, 2000);
    } catch (error) {
      console.error('Subscription error:', error);
      trackSubscribe(false);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
      setIsSubmitting(false);
    }
  };

  const handleEventClick = (): void => {
    window.open(popupConfig.eventPopup.eventLink, '_blank');
    closePopup();
  };

  if (popupConfig.activePopup === 'disabled' || !isVisible) {
    return null;
  }

  return (
    <div className="popup-overlay" onClick={closePopup}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button
          className="popup-close"
          onClick={closePopup}
          aria-label="Close popup"
          type="button"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {popupConfig.activePopup === 'event' && (
          <div className="popup-content event-popup">
            {popupConfig.eventPopup.image && (
              <div className="popup-image-wrapper">
                <img
                  src={popupConfig.eventPopup.image}
                  alt="Event"
                  className="popup-image"
                />
                <div className="popup-image-overlay"></div>
              </div>
            )}

            <div className="popup-body">
              <div className="popup-icon event-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>

              <h2 className="popup-title">{popupConfig.eventPopup.title}</h2>
              <p className="popup-subtitle">{popupConfig.eventPopup.subtitle}</p>
              <p className="popup-description">{popupConfig.eventPopup.description}</p>

              <div className="event-details">
                <div className="event-detail-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>{popupConfig.eventPopup.eventDate}</span>
                </div>
                <div className="event-detail-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{popupConfig.eventPopup.eventLocation}</span>
                </div>
              </div>

              <button
                className="popup-button event-button"
                onClick={handleEventClick}
                type="button"
              >
                {popupConfig.eventPopup.buttonText}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <button className="popup-skip" onClick={closePopup} type="button">
                Maybe later
              </button>
            </div>
          </div>
        )}

        {popupConfig.activePopup === 'subscribe' && (
          <div className="popup-content subscribe-popup">
            <div className="popup-body">
              <div className="popup-icon subscribe-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>

              <h2 className="popup-title">{popupConfig.subscribePopup.title}</h2>
              <p className="popup-subtitle">{popupConfig.subscribePopup.subtitle}</p>
              <p className="popup-description">{popupConfig.subscribePopup.description}</p>

              {!showSuccess ? (
                <form onSubmit={handleSubscribe} className="subscribe-form">
                  <div className="input-wrapper">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={popupConfig.subscribePopup.placeholder}
                      required
                      className="subscribe-input"
                      disabled={isSubmitting}
                      autoComplete="email"
                    />
                  </div>

                  {errorMessage && (
                    <p className="popup-error" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="popup-button subscribe-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Subscribing...
                      </>
                    ) : (
                      <>
                        {popupConfig.subscribePopup.buttonText}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  <div className="success-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>{popupConfig.subscribePopup.successMessage}</p>
                </div>
              )}

              {!showSuccess && (
                <button className="popup-skip" onClick={closePopup} type="button">
                  No thanks
                </button>
              )}
            </div>

            <div className="popup-decoration decoration-1"></div>
            <div className="popup-decoration decoration-2"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
