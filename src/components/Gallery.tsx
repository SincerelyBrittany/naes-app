// Gallery.tsx - Gallery Section Component
import React, { useState } from 'react';
import { galleryItems, categories, GalleryItem } from './galleryData';
import './Gallery.css';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Filter items based on selected category
  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  // Open lightbox with selected item
  const openLightbox = (item: GalleryItem): void => {
    setSelectedItem(item);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Close lightbox
  const closeLightbox = (): void => {
    setLightboxOpen(false);
    setSelectedItem(null);
    document.body.style.overflow = 'unset';
  };

  // Get YouTube thumbnail URL
  const getYouTubeThumbnail = (videoId: string): string => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  // Get YouTube embed URL
  const getYouTubeEmbedUrl = (videoId: string): string => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        {/* Section Header */}
        <div className="gallery-header">
          <span className="gallery-label">Gallery</span>
          <h2 className="gallery-title">Photos & Videos</h2>
          <p className="gallery-subtitle">
            Explore moments from book signings, school visits, and more
          </p>
        </div>

        {/* Category Filter */}
        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              type="button"
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => openLightbox(item)}
            >
              {item.type === 'image' ? (
                // Image Item
                <div className="gallery-image-wrapper">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="gallery-image"
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-overlay-content">
                      <h3 className="gallery-item-title">{item.title}</h3>
                      {item.description && (
                        <p className="gallery-item-description">{item.description}</p>
                      )}
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gallery-event-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {item.linkText || 'Learn More'}
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </a>
                      )}
                      <div className="gallery-view-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Video Item
                <div className="gallery-video-wrapper">
                  <img
                    src={item.thumbnail || getYouTubeThumbnail(item.videoId!)}
                    alt={item.title}
                    className="gallery-video-thumbnail"
                  />
                  <div className="gallery-play-button">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="gallery-overlay">
                    <div className="gallery-overlay-content">
                      <h3 className="gallery-item-title">{item.title}</h3>
                      {item.description && (
                        <p className="gallery-item-description">{item.description}</p>
                      )}
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gallery-event-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {item.linkText || 'Learn More'}
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show message if no items match filter */}
        {filteredItems.length === 0 && (
          <div className="gallery-empty">
            <p>No items found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && selectedItem && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close"
              type="button"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Content */}
            <div className="lightbox-media">
              {selectedItem.type === 'image' ? (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="lightbox-image"
                />
              ) : (
                <div className="lightbox-video-container">
                  <iframe
                    src={getYouTubeEmbedUrl(selectedItem.videoId!)}
                    title={selectedItem.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="lightbox-video"
                  ></iframe>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="lightbox-info">
              <h3 className="lightbox-title">{selectedItem.title}</h3>
              {selectedItem.description && (
                <p className="lightbox-description">{selectedItem.description}</p>
              )}
              {selectedItem.link && (
                <a
                  href={selectedItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lightbox-event-link"
                >
                  {selectedItem.linkText || 'Learn More'}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;