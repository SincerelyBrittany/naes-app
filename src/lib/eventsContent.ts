export type PopupType = 'event' | 'subscribe' | 'disabled';

/** What the site should try to show in the automatic popup (Decap + JSON). */
export type PopupMode = 'none' | 'event' | 'subscribe';

/** Raw `settings` from JSON (includes optional legacy keys). */
type RawSettingsInput = {
  popupMode?: PopupMode;
  delayTimeMs?: number;
  showAgainAfterDays?: number;
  activePopup?: PopupType;
  showEventPopup?: boolean;
  showSubscribePopup?: boolean;
};

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  registrationUrl: string;
  image?: string;
  featured?: boolean;
}

export interface SubscribePopupContent {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  placeholder: string;
  successMessage: string;
}

export interface EventsContentSettings {
  /** none = no popup; event = registration popup when an upcoming event exists; subscribe = email signup. */
  popupMode: PopupMode;
  delayTimeMs: number;
  showAgainAfterDays: number;
}

export interface EventsContent {
  /** When true, the public Events section and nav link are hidden. */
  hideEventsSection?: boolean;
  settings: EventsContentSettings;
  popupEventId?: string;
  subscribePopup: SubscribePopupContent;
  upcomingEvents: EventItem[];
  pastEvents: EventItem[];
}

const defaultContent: EventsContent = {
  hideEventsSection: false,
  settings: {
    popupMode: 'subscribe',
    delayTimeMs: 3000,
    showAgainAfterDays: 7
  },
  popupEventId: undefined,
  subscribePopup: {
    title: 'Stay in the loop',
    subtitle: '',
    description: '',
    buttonText: 'Sign up',
    placeholder: 'Your email address',
    successMessage: "Thanks — you're on the list."
  },
  upcomingEvents: [],
  pastEvents: []
};

const parsePopupMode = (value: unknown): PopupMode | null => {
  if (typeof value !== 'string') return null;
  const normalized = value.trim().toLowerCase();
  if (normalized === 'none' || normalized === 'event' || normalized === 'subscribe') {
    return normalized;
  }
  return null;
};

const normalizeSettings = (raw: RawSettingsInput | undefined): EventsContentSettings => {
  const defaults = defaultContent.settings;
  const merged = { ...defaults, ...(raw ?? {}) };

  let popupMode: PopupMode = defaults.popupMode;
  const parsedMode = raw ? parsePopupMode(raw.popupMode) : null;
  if (parsedMode) {
    popupMode = parsedMode;
  } else if (raw) {
    const hasLegacyBooleans =
      typeof raw.showEventPopup === 'boolean' || typeof raw.showSubscribePopup === 'boolean';
    if (hasLegacyBooleans) {
      if (raw.showEventPopup && !raw.showSubscribePopup) popupMode = 'event';
      else if (!raw.showEventPopup && raw.showSubscribePopup) popupMode = 'subscribe';
      else if (raw.showEventPopup && raw.showSubscribePopup) popupMode = 'event';
      else popupMode = 'none';
    } else if (raw.activePopup === 'event') {
      popupMode = 'event';
    } else if (raw.activePopup === 'subscribe') {
      popupMode = 'subscribe';
    }
  }

  const coerceNonNegativeNumber = (value: unknown, fallback: number): number => {
    if (typeof value === 'number' && !Number.isNaN(value) && value >= 0) {
      return value;
    }
    if (typeof value === 'string' && value.trim() !== '') {
      const n = Number(value);
      if (!Number.isNaN(n) && n >= 0) {
        return n;
      }
    }
    return fallback;
  };

  const delayTimeMs = coerceNonNegativeNumber(merged.delayTimeMs, defaults.delayTimeMs);
  const showAgainAfterDays = coerceNonNegativeNumber(
    merged.showAgainAfterDays,
    defaults.showAgainAfterDays
  );

  return { popupMode, delayTimeMs, showAgainAfterDays };
};

export const fetchEventsContent = async (): Promise<EventsContent> => {
  try {
    const response = await fetch('/content/events.json', { cache: 'no-store' });
    if (!response.ok) {
      return defaultContent;
    }

    const json = (await response.json()) as Partial<EventsContent>;
    return {
      ...defaultContent,
      ...json,
      hideEventsSection: json.hideEventsSection === true,
      settings: normalizeSettings(json.settings),
      subscribePopup: { ...defaultContent.subscribePopup, ...(json.subscribePopup ?? {}) },
      upcomingEvents: Array.isArray(json.upcomingEvents) ? json.upcomingEvents : [],
      pastEvents: Array.isArray(json.pastEvents) ? json.pastEvents : []
    };
  } catch (error) {
    console.error('Failed to load events content:', error);
    return defaultContent;
  }
};

export const getPopupEvent = (content: EventsContent): EventItem | null => {
  if (!content.upcomingEvents.length) {
    return null;
  }

  if (content.popupEventId) {
    const match = content.upcomingEvents.find((event) => event.id === content.popupEventId);
    if (match) return match;
  }

  const featuredEvent = content.upcomingEvents.find((event) => event.featured);
  return featuredEvent ?? content.upcomingEvents[0];
};

/** Resolves to the popup UI type from `popupMode` and available event data. */
export const getEffectivePopupType = (content: EventsContent): PopupType => {
  const { popupMode } = content.settings;
  if (popupMode === 'event') {
    const event = getPopupEvent(content);
    return event ? 'event' : 'disabled';
  }
  if (popupMode === 'subscribe') {
    return 'subscribe';
  }
  return 'disabled';
};

const parseDate = (value: string): number => {
  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? 0 : parsed;
};

export const sortEventsByDate = (events: EventItem[], newestFirst = false): EventItem[] => {
  const copy = [...events];
  copy.sort((a, b) => {
    const diff = parseDate(a.date) - parseDate(b.date);
    return newestFirst ? -diff : diff;
  });
  return copy;
};

export const formatEventDate = (isoDate: string): string => {
  const parsed = new Date(isoDate);
  if (Number.isNaN(parsed.getTime())) {
    return isoDate;
  }

  return parsed.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
