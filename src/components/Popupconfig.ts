export type PopupType = 'event' | 'subscribe' | 'disabled';

// Helper function to check if popup should show (based on localStorage)
export const shouldShowPopup = (popupType: PopupType, showAgainAfterDays: number): boolean => {
  if (popupType === 'disabled') return false;
  
  const lastClosedKey = `popup_${popupType}_last_closed`;
  const lastClosed = localStorage.getItem(lastClosedKey);
  
  if (!lastClosed) return true;
  
  const lastClosedDate = new Date(lastClosed);
  const now = new Date();
  const daysSinceLastClosed = Math.floor(
    (now.getTime() - lastClosedDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  
  return daysSinceLastClosed >= showAgainAfterDays;
};

// Helper function to mark popup as closed
export const markPopupClosed = (popupType: PopupType): void => {
  const lastClosedKey = `popup_${popupType}_last_closed`;
  localStorage.setItem(lastClosedKey, new Date().toISOString());
};