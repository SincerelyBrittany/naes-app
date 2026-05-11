export type PopupType = 'event' | 'subscribe' | 'disabled';

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
  /** When on, may show the event popup if there is a matching upcoming event. */
  showEventPopup: boolean;
  /** When on, may show the email subscribe popup. */
  showSubscribePopup: boolean;
  delayTimeMs: number;
  showAgainAfterDays: number;
  /** Legacy: used only if showEventPopup / showSubscribePopup are absent from JSON. */
  activePopup?: PopupType;
}

export interface EventsContent {
  settings: EventsContentSettings;
  popupEventId?: string;
  subscribePopup: SubscribePopupContent;
  upcomingEvents: EventItem[];
  pastEvents: EventItem[];
}

const defaultContent: EventsContent = {
  settings: {
    showEventPopup: false,
    showSubscribePopup: false,
    delayTimeMs: 3000,
    showAgainAfterDays: 7
  },
  popupEventId: undefined,
  subscribePopup: {
    title: 'Stay Connected!',
    subtitle: 'Get updates on new books and events',
    description: 'Subscribe for updates about upcoming books and events.',
    buttonText: 'Subscribe',
    placeholder: 'Enter your email address',
    successMessage: 'Thank you for subscribing!'
  },
  upcomingEvents: [],
  pastEvents: []
};

const normalizeSettings = (raw: Partial<EventsContentSettings> | undefined): EventsContentSettings => {
  const base = { ...defaultContent.settings, ...raw };
  const hasNewBooleans =
    typeof raw?.showEventPopup === 'boolean' || typeof raw?.showSubscribePopup === 'boolean';

  if (!hasNewBooleans && raw?.activePopup) {
    if (raw.activePopup === 'event') {
      return { ...base, showEventPopup: true, showSubscribePopup: false };
    }
    if (raw.activePopup === 'subscribe') {
      return { ...base, showEventPopup: false, showSubscribePopup: true };
    }
    return { ...base, showEventPopup: false, showSubscribePopup: false };
  }

  return {
    ...base,
    showEventPopup: Boolean(base.showEventPopup),
    showSubscribePopup: Boolean(base.showSubscribePopup)
  };
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

/** Event popup wins if enabled and an event exists; else subscribe if enabled. */
export const getEffectivePopupType = (content: EventsContent): PopupType => {
  const { showEventPopup, showSubscribePopup } = content.settings;
  const event = showEventPopup ? getPopupEvent(content) : null;
  if (showEventPopup && event) {
    return 'event';
  }
  if (showSubscribePopup) {
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
