import React, { useEffect, useState } from 'react';
import {
  type EventItem,
  fetchEventsContent,
  formatEventDate,
  sortEventsByDate
} from '../lib/eventsContent';
import './Events.css';

const EventCard: React.FC<{ event: EventItem; isPast?: boolean }> = ({ event, isPast = false }) => (
  <article className={`event-card ${isPast ? 'event-card-past' : ''}`}>
    <div className="event-meta">
      <span>{formatEventDate(event.date)}</span>
      <span>{event.time}</span>
    </div>
    <h3 className="event-title">{event.title}</h3>
    <p className="event-location">{event.location}</p>
    <p className="event-description">{event.description}</p>
    {event.registrationUrl && !isPast && (
      <a
        href={event.registrationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="event-link"
      >
        Register
      </a>
    )}
  </article>
);

const Events: React.FC = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<EventItem[]>([]);
  const [pastEvents, setPastEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    let isMounted = true;

    const load = async (): Promise<void> => {
      const content = await fetchEventsContent();
      if (!isMounted) return;

      setUpcomingEvents(sortEventsByDate(content.upcomingEvents));
      setPastEvents(sortEventsByDate(content.pastEvents, true));
    };

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="events" className="events-section">
      <div className="events-container">
        <div className="events-header">
          <span className="events-label">Appearances</span>
          <h2 className="events-heading">Events</h2>
          <p className="events-subtitle">See where Finicky Felicia will be featured next.</p>
        </div>

        <div className="events-grid">
          <div>
            <h3 className="events-group-title">Upcoming Events</h3>
            {upcomingEvents.length ? (
              <div className="events-list">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <p className="events-empty">No upcoming events yet.</p>
            )}
          </div>

          <div>
            <h3 className="events-group-title">Past Events</h3>
            {pastEvents.length ? (
              <div className="events-list">
                {pastEvents.map((event) => (
                  <EventCard key={event.id} event={event} isPast />
                ))}
              </div>
            ) : (
              <p className="events-empty">Past events will appear here.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
