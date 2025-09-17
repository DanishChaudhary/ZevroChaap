# ZEVRO Restaurant & Franchise Website

A modern, responsive website for ZEVRO - India's premium chaap franchise, built with React and Express.js.

## 🚀 Features

- **Modern UI/UX**: Premium design with gradient effects and smooth animations
- **Responsive Design**: Optimized for all devices
- **Interactive Components**: Accordion FAQs, smooth scrolling, hover effects
- **Admin Dashboard**: JWT-authenticated admin panel for managing inquiries
- **Contact Forms**: Integrated contact and franchise inquiry forms
- **SEO Optimized**: Meta tags and structured content

## 🛠 Tech Stack

### Frontend
- React 18
- Tailwind CSS
- React Router DOM
- Google Fonts (Playfair Display, Montserrat)

### Backend
- Node.js & Express
- MongoDB with Mongoose
- JWT Authentication
- Helmet (Security)
- CORS
- Rate Limiting

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database
- Git

### Local Development

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd Restaurant
```

2. **Install dependencies**
```bash
# Install server dependencies
cd Server
npm install

# Install client dependencies
cd ../Client
npm install
```

3. **Environment Setup**
Create a `.env` file in the root directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
WHATSAPP_NUMBER=your_whatsapp_number
WHATSAPP_DEFAULT_MSG=Hello! I'm interested in ZEVRO franchise.
SITE_URL=http://localhost:5000
NODE_ENV=development
```

4. **Run the application**
```bash
# Start backend server (from Server directory)
npm run dev

# Start frontend (from Client directory - new terminal)
npm run dev
```

## 🌐 Deployment on Render

### Automatic Deployment Script
Run the deployment preparation script:
```bash
node deploy.js
```

### Manual Render Setup

1. **Build the frontend**
```bash
cd Client
npm run build
```

2. **Copy build files**
```bash
cd ../Server
cp -r ../Client/dist/* ./public/
```

3. **Render Configuration**
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Root Directory**: `Server`

4. **Environment Variables** (Set in Render Dashboard)
```
MONGO_URI=your_production_mongodb_uri
JWT_SECRET=your_production_jwt_secret
WHATSAPP_NUMBER=your_whatsapp_number
WHATSAPP_DEFAULT_MSG=Hello! I'm interested in ZEVRO franchise.
SITE_URL=https://your-app-name.onrender.com
NODE_ENV=production
```

## 🔐 Admin Access

- **URL**: `/admin`
- **Default Credentials**: 
  - Username: `zevro`
  - Password: `zevro`

**⚠️ Important**: Change default credentials in production!

## 📱 Features Overview

### Frontend Pages
- **Home**: Hero section with premium styling and call-to-actions
- **Menu**: Interactive menu cards with franchise inquiry buttons
- **Franchise**: ZORKO-style benefits section with interactive FAQ accordion
- **Contact**: Contact form with WhatsApp integration
- **Admin**: Dashboard for managing inquiries and submissions

### Backend API Endpoints
- `POST /api/contact` - Submit contact/franchise inquiries
- `POST /api/admin/login` - Admin authentication
- `GET /api/admin/submissions` - Fetch submissions (protected)
- `GET /api/health` - Health check endpoint

## 🎨 Design Features

- **Premium Typography**: Playfair Display and Montserrat fonts
- **Gradient Effects**: Modern gradient backgrounds and text
- **Interactive Elements**: Hover effects, smooth transitions
- **Responsive Grid**: Mobile-first responsive design
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🔧 Development Scripts

### Client (React)
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Server (Express)
```bash
npm start            # Start production server
npm run dev          # Start development server with nodemon
npm test             # Run tests
```

## 🚀 Performance Optimizations

- **Code Splitting**: React lazy loading
- **Image Optimization**: Optimized assets
- **Caching**: Static file caching
- **Compression**: Gzip compression enabled
- **Security**: Helmet middleware, rate limiting

## 📊 Monitoring & Analytics

- **Health Check**: `/api/health` endpoint
- **Error Logging**: Structured error handling
- **Request Logging**: Development-only verbose logging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ for ZEVRO Franchise**
