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
  const [hideSection, setHideSection] = useState<boolean>(false);
  const [upcomingEvents, setUpcomingEvents] = useState<EventItem[]>([]);
  const [pastEvents, setPastEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    let isMounted = true;

    const load = async (): Promise<void> => {
      const content = await fetchEventsContent();
      if (!isMounted) return;

      setHideSection(content.hideEventsSection === true);
      setUpcomingEvents(sortEventsByDate(content.upcomingEvents));
      setPastEvents(sortEventsByDate(content.pastEvents, true));
    };

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  if (hideSection) {
    return null;
  }

  const hasUpcoming = upcomingEvents.length > 0;
  const hasPast = pastEvents.length > 0;

  const gridClassName = [
    'events-grid',
    (hasUpcoming && !hasPast) || (!hasUpcoming && hasPast) ? 'events-grid--single' : ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id="events" className="events-section">
      <div className="events-container">
        <div className="events-header">
          <span className="events-label">Appearances</span>
          <h2 className="events-heading">Events</h2>
          <p className="events-subtitle">
            {hasPast && !hasUpcoming
              ? 'Recent appearances and past events.'
              : 'See where Finicky Felicia will be featured next.'}
          </p>
        </div>

        {!hasUpcoming && !hasPast ? (
          <p className="events-empty events-empty-centered">No events at the moment.</p>
        ) : (
          <div className={gridClassName}>
            {hasUpcoming && (
              <div>
                <h3 className="events-group-title">Upcoming Events</h3>
                <div className="events-list">
                  {upcomingEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            )}

            {hasPast && (
              <div>
                <h3 className="events-group-title">Past Events</h3>
                <div className="events-list">
                  {pastEvents.map((event) => (
                    <EventCard key={event.id} event={event} isPast />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
