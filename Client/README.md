# RestaurantPro - Restaurant Franchise Website

A modern, professional restaurant franchise website built with React and Tailwind CSS. This website showcases franchise opportunities with a clean, user-friendly interface and WhatsApp integration for lead generation.

## 🌟 Features

- **Modern Design**: Professional UI/UX with premium brand colors inspired by successful franchise models
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **WhatsApp Integration**: Contact forms redirect to WhatsApp for instant communication
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Friendly**: Clean structure and semantic HTML for better search rankings
- **Interactive Components**: Smooth animations and hover effects for enhanced user experience

## 🎨 Design Highlights

- **Brand Colors**: Green and orange color scheme for trust and energy
- **Typography**: Inter for body text, Poppins for headings
- **Components**: Reusable button styles, cards, and sections
- **Animations**: Fade-in, slide-up, and hover animations
- **Professional Layout**: Clean sections with proper spacing and hierarchy

## 📱 Pages Included

1. **Home Page**: Hero section, benefits overview, menu preview, and call-to-action
2. **About Page**: Company story, mission/vision, team, and achievements
3. **Franchise Page**: Investment details, benefits, requirements, and process
4. **Contact Page**: Application form with WhatsApp integration and FAQ section

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd Restaurant/Client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 3.x
- **Routing**: React Router DOM 6.x
- **Icons**: Emoji icons for better cross-platform compatibility
- **Fonts**: Google Fonts (Inter & Poppins)

## 📞 WhatsApp Integration

The contact form automatically redirects to WhatsApp with pre-filled message containing:
- User's contact details
- Investment capacity
- Business experience
- Custom message

To customize the WhatsApp number, edit the `whatsappNumber` variable in `src/pages/Contact.jsx`:

```javascript
const whatsappNumber = "919876543210"; // Replace with your number
```

## 🎨 Customization

### Brand Colors
Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: { /* Green shades */ },
  accent: { /* Orange shades */ },
  neutral: { /* Gray shades */ }
}
```

### Content Updates
- **Company Name**: Search and replace "RestaurantPro" throughout the codebase
- **Contact Information**: Update phone numbers and email addresses in components
- **Investment Details**: Modify amounts and packages in the Franchise page
- **Menu Items**: Update the menu showcase in the Home page

### Images
Replace emoji placeholders with actual images:
1. Add images to `src/assets/` directory
2. Import and use in components
3. Update alt texts for accessibility

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components automatically adapt to different screen sizes using Tailwind's responsive utilities.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation component
│   └── Footer.jsx      # Footer component
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── About.jsx       # About page
│   ├── Franchise.jsx   # Franchise details
│   └── Contact.jsx     # Contact form
├── App.jsx             # Main app component
├── index.css           # Global styles
└── index.js            # Entry point
```

## 🌐 Deployment

This website can be deployed on any static hosting platform:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Firebase Hosting**: Use Firebase CLI

## 📈 Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Optimized Images**: Emoji icons for fast loading
- **Minimal Dependencies**: Only essential packages included
- **CSS Optimization**: Tailwind CSS purges unused styles in production

## 🎯 Business Features

- **Lead Generation**: WhatsApp integration for instant communication
- **Professional Presentation**: Clean design builds trust with potential franchisees
- **Mobile Optimization**: Most users browse on mobile devices
- **Fast Loading**: Quick page loads reduce bounce rates
- **Clear Call-to-Actions**: Strategic placement of contact buttons

## 📞 Support

For technical support or customization requests:
- Email: support@restaurantpro.com
- WhatsApp: +91 98765 43210

## 📄 License

This project is created for RestaurantPro franchise business. All rights reserved.

---

**Built with ❤️ for RestaurantPro Franchise Network**
