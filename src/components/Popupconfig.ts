export type PopupType = 'event' | 'subscribe' | 'disabled';

const storageKey = (popupType: PopupType): string => `naes_popup_v2_${popupType}_last_closed`;

// Helper function to check if popup should show (based on localStorage)
export const shouldShowPopup = (popupType: PopupType, showAgainAfterDays: number): boolean => {
  if (popupType === 'disabled') return false;
  if (typeof window === 'undefined') return false;

  const days =
    typeof showAgainAfterDays === 'number' &&
    !Number.isNaN(showAgainAfterDays) &&
    showAgainAfterDays >= 0
      ? showAgainAfterDays
      : 7;

  const lastClosed = localStorage.getItem(storageKey(popupType));

  if (!lastClosed) return true;

  const lastClosedDate = new Date(lastClosed);
  if (Number.isNaN(lastClosedDate.getTime())) return true;

  const now = new Date();
  const daysSinceLastClosed = Math.floor(
    (now.getTime() - lastClosedDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  return daysSinceLastClosed >= days;
};

// Helper function to mark popup as closed
export const markPopupClosed = (popupType: PopupType): void => {
  if (typeof window === 'undefined' || popupType === 'disabled') return;
  localStorage.setItem(storageKey(popupType), new Date().toISOString());
};