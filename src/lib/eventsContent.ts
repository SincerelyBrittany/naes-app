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

export interface EventsContent {
  settings: {
    activePopup: PopupType;
    delayTimeMs: number;
    showAgainAfterDays: number;
  };
  popupEventId?: string;
  subscribePopup: SubscribePopupContent;
  upcomingEvents: EventItem[];
  pastEvents: EventItem[];
}

const defaultContent: EventsContent = {
  settings: {
    activePopup: 'disabled',
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
      settings: { ...defaultContent.settings, ...(json.settings ?? {}) },
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
