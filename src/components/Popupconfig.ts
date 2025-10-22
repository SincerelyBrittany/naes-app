// popupConfig.ts - Popup Configuration
// Simply change the settings here to control which popup shows!

export type PopupType = 'event' | 'subscribe' | 'disabled';

export interface PopupConfig {
  // ============================================
  // POPUP SETTINGS - CHANGE THESE VALUES
  // ============================================
  
  // Choose which popup to show: 'event', 'subscribe', or 'disabled'
  activePopup: PopupType;
  
  // How long to wait before showing popup (in milliseconds)
  // 3000 = 3 seconds, 5000 = 5 seconds
  delayTime: number;
  
  // Show popup again after it's closed? (in days)
  // Set to 0 to show every time, or number of days before showing again
  showAgainAfterDays: number;
  
  // ============================================
  // EVENT POPUP SETTINGS
  // ============================================
  eventPopup: {
    title: string;
    subtitle: string;
    description: string;
    eventDate: string; // Display text like "November 15, 2024 at 2:00 PM"
    eventLocation: string;
    buttonText: string;
    eventLink: string; // Registration link
    image?: string; // Optional event image
  };
  
  // ============================================
  // SUBSCRIBE POPUP SETTINGS
  // ============================================
  subscribePopup: {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    placeholder: string;
    successMessage: string;
    // Where to send the subscription (you'll need to set up your email service)
    // Popular options: Mailchimp, ConvertKit, EmailOctopus, etc.
    subscribeEndpoint?: string;
  };
}

// ============================================
// YOUR POPUP CONFIGURATION
// ============================================

export const popupConfig: PopupConfig = {
  // Choose: 'event', 'subscribe', or 'disabled'
  activePopup: 'disabled', // 👈 CHANGE THIS TO SWITCH POPUPS
  
  // Wait 3 seconds before showing popup
  delayTime: 3000,
  
  // Don't show again for 7 days after user closes it
  showAgainAfterDays: 7,
  
  // ========== EVENT POPUP ==========
  eventPopup: {
    title: '📚 Upcoming Book Reading Event!',
    subtitle: 'Join Narene Russell for a Special Reading',
    description: 'Bring your children for an interactive reading of Finicky Felicia, followed by a Q&A session and book signing. Fun activities for kids included!',
    eventDate: 'December 15, 2024 at 2:00 PM',
    eventLocation: 'Lincoln Elementary School Library',
    buttonText: 'Register Now - Free Event!',
    eventLink: 'https://www.eventbrite.com/your-event-link', // 👈 UPDATE THIS
    image: '/images/event-banner.jpg' // Optional: Add event poster/image
  },
  
  // ========== SUBSCRIBE POPUP ==========
  subscribePopup: {
    title: '📖 Stay Connected!',
    subtitle: 'Get Updates on New Books & Events',
    description: 'Subscribe to receive exclusive updates about upcoming books, special events, and helpful tips for parents of picky eaters!',
    buttonText: 'Subscribe',
    placeholder: 'Enter your email address',
    successMessage: 'Thank you for subscribing! Check your email for confirmation.',
    // Add your email service endpoint here (Mailchimp, ConvertKit, etc.)
    subscribeEndpoint: '/api/subscribe'
  }
};

// ============================================
// HOW TO USE:
// ============================================
//
// TO SHOW EVENT POPUP:
// Set activePopup: 'event'
// Update eventPopup settings with your event details
//
// TO SHOW SUBSCRIBE POPUP:
// Set activePopup: 'subscribe'
// Update subscribePopup settings
//
// TO DISABLE ALL POPUPS:
// Set activePopup: 'disabled'
//
// ============================================

// Helper function to check if popup should show (based on localStorage)
export const shouldShowPopup = (popupType: PopupType): boolean => {
  if (popupType === 'disabled') return false;
  
  const lastClosedKey = `popup_${popupType}_last_closed`;
  const lastClosed = localStorage.getItem(lastClosedKey);
  
  if (!lastClosed) return true;
  
  const lastClosedDate = new Date(lastClosed);
  const now = new Date();
  const daysSinceLastClosed = Math.floor(
    (now.getTime() - lastClosedDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  
  return daysSinceLastClosed >= popupConfig.showAgainAfterDays;
};

// Helper function to mark popup as closed
export const markPopupClosed = (popupType: PopupType): void => {
  const lastClosedKey = `popup_${popupType}_last_closed`;
  localStorage.setItem(lastClosedKey, new Date().toISOString());
};