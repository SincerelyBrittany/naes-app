# naes-app

Want to complete/Adds

Figure out how to get upcoming events from a page that she can add. 

Events page - instagram 
Sticky navbar
contact page
Make navbar with drop downs parts
Set up google docs forms
Add a footer - Write about sister creating the logo and you creating websire.
Create Notfound page for unknown routes

Wix: https://manage.wix.com/dashboard/7d3834e7-4e04-431d-8da5-31ea4d9ae951/home?referralInfo=my-sites

Crossfade image
https://stackoverflow.com/questions/73032501/how-can-i-dynamically-use-images-in-crossfading-image-react-js

https://codepen.io/SincerelyBrittany/pen/xxyyRdm

https://github.com/SincerelyBrittany/css-sass-flexbox-grid-styling-tutorial/blob/main/Understanding-Flexbox/flex/index.css

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container

http://css3.bradshawenterprises.com/cfimg/

Mail set up? Mailchimp?

https://us1.admin.mailchimp.com/website/dashboard/

Carasal:

https://codepen.io/nrifki/pen/LYVygxW

Other goals 
Allow people to order signed copies 
Allow people to order shirts/blanket 
Add sisters + me to site. 

Promote a book of the month 

Allow users to subscribe 

# Gallery INFO

Great question! For a gallery that's easy to update, I recommend creating a **data-driven approach** where you store all your images and videos in a simple configuration file. This way, you won't need to edit the component code every time you want to add/remove media.

Let me create a complete gallery solution for you with three files:

## Best Approach:

**1. Gallery Data File** - A simple JSON/TS file to manage all your media
**2. Gallery Component** - Reads from the data file and displays everything
**3. Gallery CSS** - Beautiful responsive grid layout

This approach means:
✅ Add images/videos by just editing one data file
✅ No code changes needed
✅ Easy to maintain
✅ Supports both images and YouTube videos
✅ Lightbox/modal for full-size viewing

Let me create this for you:Perfect! I've created a complete gallery solution for you. Here's what you got:

## 📁 Files Created:

1. **[galleryData.ts](computer:///mnt/user-data/outputs/galleryData.ts)** - Your media database (easy to edit!)
2. **[Gallery.tsx](computer:///mnt/user-data/outputs/Gallery.tsx)** - The gallery component
3. **[Gallery.css](computer:///mnt/user-data/outputs/Gallery.css)** - Beautiful styling

## ✨ Features:

### Easy Updates:
- **Just edit `galleryData.ts`** to add/remove images or videos
- No need to touch the component code
- Simple array format - copy/paste to add more

### Functionality:
✅ **Responsive grid** - 3 columns desktop, 2 tablet, 1 mobile
✅ **Category filters** - Filter by Book, Events, Videos, or All
✅ **Lightbox modal** - Click to view full-size images
✅ **YouTube videos** - Embedded with auto-play
✅ **Hover effects** - Beautiful animations
✅ **Play buttons** - Clear indicators for videos

## 🎯 How to Add New Content:

### Adding an Image:
```typescript
{
  id: 8,
  type: 'image',
  title: 'New Book Event',
  description: 'Description here',
  src: '/images/gallery/new-photo.jpg',
  category: 'events'
},
```

### Adding a YouTube Video:
```typescript
{
  id: 9,
  type: 'video',
  title: 'Book Reading',
  description: 'Author reading',
  videoId: 'YOUR_VIDEO_ID', // From youtube.com/watch?v=YOUR_VIDEO_ID
  category: 'videos'
},
```

## 📂 File Structure:
```
your-project/
├── public/
│   └── images/
│       └── gallery/
│           ├── book-cover.jpg
│           ├── book-signing.jpg
│           └── ... (add your images here)
└── src/
    └── components/
        ├── galleryData.ts  ← Edit this to add/remove items
        ├── Gallery.tsx
        └── Gallery.css
```

## 🎨 Design Features:
- Purple/pink/coral color scheme matching your brand
- Smooth animations and transitions
- Mobile-friendly responsive design
- Accessible keyboard navigation
- Beautiful lightbox for full-screen viewing

The best part? **You never need to edit the component files** - just update the `galleryData.ts` file whenever you want to add or remove images/videos!

Great idea! Let me update the gallery files to support optional event registration links. This will allow you to add clickable links for upcoming events.Now let me update the Gallery component to display the registration button when a link is provided:Now let me add the CSS styling for the event link buttons:Perfect! I've updated all three files to support optional event registration links. Here's what changed:

## ✨ Updated Files:

1. **[galleryData.ts](computer:///mnt/user-data/outputs/galleryData.ts)** - Added `link` and `linkText` fields
2. **[Gallery.tsx](computer:///mnt/user-data/outputs/Gallery.tsx)** - Displays registration buttons
3. **[Gallery.css](computer:///mnt/user-data/outputs/Gallery.css)** - Styled the buttons

## 🎯 How to Use Event Links:

### For Upcoming Events:
```typescript
{
  id: 3,
  type: 'image',
  title: 'School Visit - Lincoln Elementary',
  description: 'Reading to students - November 15, 2024',
  src: '/images/gallery/school-visit.jpg',
  category: 'events',
  link: 'https://www.eventbrite.com/your-event-link', // Add this
  linkText: 'Register for Event' // Optional - defaults to "Learn More"
},
```

### For Past Events (No Link):
```typescript
{
  id: 2,
  type: 'image',
  title: 'Book Signing Event',
  description: 'Meeting young readers at local bookstore',
  src: '/images/gallery/book-signing.jpg',
  category: 'events'
  // No link field - just shows as a regular gallery item
},
```

## 🎨 Features:

✅ **Optional** - If no `link` is provided, the item displays normally
✅ **Custom text** - Use `linkText` to customize the button (e.g., "Register Now", "Buy Tickets", "Learn More")
✅ **Visible in two places**:
   - On hover over gallery item (small button)
   - In lightbox modal (larger prominent button)
✅ **Opens in new tab** - Doesn't navigate away from your site
✅ **Styled beautifully** - Coral/orange gradient matching your brand
✅ **Animated** - Hover effects with arrow animation
✅ **Mobile responsive** - Adapts to smaller screens

## 📱 Where Buttons Appear:

1. **Gallery Grid**: Hover over an item → button appears in the overlay
2. **Lightbox Modal**: Click to view full-size → button appears below the description

The button prevents the lightbox from opening when clicked, so users can register directly without viewing the full image first.

Try it out! Add a link to any event in your `galleryData.ts` file and it will automatically show up with a clickable registration button! 🎉


## POP UP INFO
Perfect! I've created a complete popup system with beautiful designs for both event registration and newsletter subscription. Here's what you got:

## 📁 Files Created:

1. **[popupConfig.ts](computer:///mnt/user-data/outputs/popupConfig.ts)** - Easy configuration (change settings here!)
2. **[Popup.tsx](computer:///mnt/user-data/outputs/Popup.tsx)** - The popup component
3. **[Popup.css](computer:///mnt/user-data/outputs/Popup.css)** - Beautiful styling

## 🎯 How to Switch Between Popups:

Just edit `popupConfig.ts` and change this line:

```typescript
// Option 1: Show event popup
activePopup: 'event',

// Option 2: Show subscribe popup
activePopup: 'subscribe',

// Option 3: Disable all popups
activePopup: 'disabled',
```

## ✨ Features:

### Event Popup:
- 📅 Event date and time display
- 📍 Location information
- 🎨 Optional event image/poster
- 🔗 Registration button (opens in new tab)
- ⏰ Shows after 3 seconds (configurable)
- 🔄 Won't show again for 7 days (configurable)

### Subscribe Popup:
- 📧 Email input with validation
- ✅ Success message after submission
- 🎨 Beautiful gradient design
- ⏰ Same delay and frequency controls
- 🔄 Loading spinner during submission

### Both Popups Include:
- ✨ Smooth animations
- 🎨 Purple/pink/coral color scheme
- 📱 Fully responsive (mobile-friendly)
- ⌨️ Keyboard accessible
- 🚫 Easy close button
- 🎯 "Maybe later" / "No thanks" option
- 💾 Remembers when closed (localStorage)

## 🔧 Configuration Options:

```typescript
export const popupConfig: PopupConfig = {
  activePopup: 'event', // 'event', 'subscribe', or 'disabled'
  delayTime: 3000, // Wait 3 seconds before showing
  showAgainAfterDays: 7, // Don't show again for 7 days
  
  // Event settings
  eventPopup: {
    title: '📚 Upcoming Book Reading Event!',
    eventDate: 'December 15, 2024 at 2:00 PM',
    eventLocation: 'Lincoln Elementary School',
    buttonText: 'Register Now - Free Event!',
    eventLink: 'https://your-event-link.com',
    // ... more options
  },
  
  // Subscribe settings
  subscribePopup: {
    title: '📖 Stay Connected!',
    placeholder: 'Enter your email address',
    buttonText: 'Subscribe',
    // ... more options
  }
};
```

## 📥 How to Add to Your App:

In your `App.tsx`, add the Popup component:

```tsx
import Popup from './components/Popup';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Author />
      <Gallery />
      
      {/* Add this line */}
      <Popup />
    </div>
  );
};
```

## 🎨 Design Highlights:

**Event Popup:**
- Gradient icon with calendar
- Event details with icons
- Coral/orange action button
- Optional event poster image

**Subscribe Popup:**
- Gradient icon with envelope
- Email input field
- Purple/pink action button
- Success animation with checkmark
- Floating decorative elements

## 📧 Email Integration:

To connect the subscribe popup to your email service:

1. **Choose a service**: Mailchimp, ConvertKit, EmailOctopus, etc.
2. **Get your API endpoint**
3. **Update in `popupConfig.ts`**:
   ```typescript
   subscribeEndpoint: 'https://your-email-service.com/api/subscribe'
   ```
4. **Uncomment the API call in `Popup.tsx`** (lines 42-47)

The popup is ready to use! Just change the `activePopup` setting to switch between modes or disable it entirely. 🎉

Would you like me to help you with any other sections or features?
