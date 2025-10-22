// galleryData.ts - Gallery Media Configuration
// Simply add or remove items from this file to update your gallery!

export interface GalleryItem {
    id: number;
    type: 'image' | 'video';
    title: string;
    description?: string;
    // For images: path to your image file
    src?: string;
    // For videos: YouTube video ID (the part after 'watch?v=' in the URL)
    videoId?: string;
    // Thumbnail for videos (optional - YouTube auto-generates if not provided)
    thumbnail?: string;
    // Category for filtering (optional)
    category?: string;
    // Optional link for events (e.g., registration link)
    link?: string;
    // Optional custom text for the link button (default: "Register" or "Learn More")
    linkText?: string;
  }
  
  // ============================================
  // YOUR GALLERY ITEMS - EDIT THIS ARRAY
  // ============================================
  
  export const galleryItems: GalleryItem[] = [
    // ========== IMAGES ==========
    {
      id: 1,
      type: 'image',
      title: 'Book Cover',
      description: 'Finicky Felicia cover illustration',
      src: '/images/gallery/book-cover.jpg',
      category: 'book'
    },
    {
      id: 2,
      type: 'image',
      title: 'Book Signing Event',
      description: 'Meeting young readers at local bookstore',
      src: '/images/gallery/book-signing.jpg',
      category: 'events'
    },
    {
      id: 3,
      type: 'image',
      title: 'School Visit - Lincoln Elementary',
      description: 'Reading to students - November 15, 2024',
      src: '/images/gallery/school-visit.jpg',
      category: 'events',
      link: 'https://www.eventbrite.com/your-event-link',
      linkText: 'Register for Event'
    },
    {
      id: 4,
      type: 'image',
      title: 'Character Illustration',
      description: 'Felicia with vegetables',
      src: '/images/gallery/character.jpg',
      category: 'book'
    },
  
    // ========== YOUTUBE VIDEOS ==========
    {
      id: 5,
      type: 'video',
      title: 'Book Reading',
      description: 'Author reads Finicky Felicia',
      videoId: 'dQw4w9WgXcQ', // Replace with your YouTube video ID
      category: 'videos'
    },
    {
      id: 6,
      type: 'video',
      title: 'Behind the Scenes',
      description: 'Creating Finicky Felicia',
      videoId: 'dQw4w9WgXcQ', // Replace with your YouTube video ID
      category: 'videos'
    },
    {
      id: 7,
      type: 'video',
      title: 'Author Interview',
      description: 'Discussing healthy eating for kids',
      videoId: 'dQw4w9WgXcQ', // Replace with your YouTube video ID
      category: 'videos'
    },
  
    // ========== ADD MORE ITEMS HERE ==========
    // Just copy the format above and change the details!
    
  ];
  
  // ============================================
  // HOW TO ADD NEW ITEMS:
  // ============================================
  // 
  // FOR IMAGES:
  // -----------
  // 1. Add your image to /public/images/gallery/
  // 2. Copy this template and paste it in the array above:
  // 
  // {
  //   id: 8, // Use next available number
  //   type: 'image',
  //   title: 'Your Image Title',
  //   description: 'Optional description',
  //   src: '/images/gallery/your-image.jpg',
  //   category: 'book' // or 'events', 'videos', etc.
  // },
  //
  // FOR EVENTS WITH REGISTRATION LINKS:
  // -----------------------------------
  // Add a link and linkText to make the event clickable:
  //
  // {
  //   id: 9,
  //   type: 'image',
  //   title: 'Upcoming Book Reading',
  //   description: 'Join us for a special reading - December 10, 2024',
  //   src: '/images/gallery/event-poster.jpg',
  //   category: 'events',
  //   link: 'https://www.eventbrite.com/your-event',
  //   linkText: 'Register Now' // Optional - defaults to "Learn More"
  // },
  //
  // FOR YOUTUBE VIDEOS:
  // ------------------
  // 1. Get your YouTube video URL (e.g., https://www.youtube.com/watch?v=ABC123XYZ)
  // 2. Copy the video ID (the part after 'watch?v=', e.g., ABC123XYZ)
  // 3. Copy this template and paste it in the array above:
  //
  // {
  //   id: 10, // Use next available number
  //   type: 'video',
  //   title: 'Your Video Title',
  //   description: 'Optional description',
  //   videoId: 'ABC123XYZ', // Your YouTube video ID
  //   category: 'videos'
  // },
  //
  // ============================================
  
  // Optional: Define your categories for filtering
  export const categories = [
    { id: 'all', label: 'All' },
    { id: 'book', label: 'Book' },
    { id: 'events', label: 'Events' },
    { id: 'videos', label: 'Videos' }
  ];