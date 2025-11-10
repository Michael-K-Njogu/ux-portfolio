# 🎨 UX/UI Portfolio

A modern, interactive portfolio showcasing strategic product design work, case studies, and professional experience. Built with React and powered by Contentful CMS for seamless content management.

[![Netlify Status](https://api.netlify.com/api/v1/badges/3bb3c028-e02d-445c-a39b-3c349b6fce79/deploy-status)](https://app.netlify.com/projects/michael-njogu/deploys)

## ✨ Features

- **📚 Dynamic Case Studies** - Content managed through Contentful CMS with live preview support
- **🎭 Smooth Animations** - Engaging transitions and micro-interactions powered by Framer Motion
- **📱 Fully Responsive** - Optimized for all devices with Bootstrap 5
- **♿ Accessibility First** - Built with WCAG guidelines in mind
- **🍪 GDPR Compliant** - Cookie consent management for privacy compliance
- **🔍 SEO Optimized** - Meta tags and semantic HTML structure
- **⚡ Performance Focused** - Lazy loading images and optimized assets
- **🎯 Interactive Elements** - Flip avatar, back-to-top button, and dynamic page titles

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Styling:** Bootstrap 5, Emotion
- **Animations:** Framer Motion
- **CMS:** Contentful (Headless CMS)
- **Routing:** React Router DOM
- **Deployment:** Netlify
- **Fonts:** IBM Plex Sans, Libre Caslon Text
- **Icons:** React Bootstrap Icons

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Contentful account and space (for content management)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd ux-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables

Create a `.env` file in the root directory:

```env
REACT_APP_CONTENTFUL_SPACE_ID=your_space_id
REACT_APP_CONTENTFUL_DELIVERY_TOKEN=your_delivery_token
REACT_APP_CONTENTFUL_PREVIEW_TOKEN=your_preview_token
```

4. Start the development server
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📁 Project Structure

```
ux-portfolio/
├── public/              # Static assets
│   ├── images/         # Image assets
│   └── index.html      # HTML template
├── src/
│   ├── components/     # React components
│   │   ├── layout/     # Header, Footer
│   │   └── ui/         # Reusable UI components
│   ├── pages/          # Page components
│   ├── styles/         # Global styles
│   └── contentfulClient.js  # Contentful configuration
└── package.json
```

## 🎨 Key Components

- **Hero Section** - Dynamic landing section with engaging visuals
- **Case Studies** - Filterable showcase of featured projects
- **About Page** - Interactive profile with skills, tools, and experience timeline
- **Timeline** - Visual work experience timeline
- **Cookie Consent** - GDPR-compliant cookie management
- **Back to Top** - Smooth scroll-to-top button

## 🔧 Contentful Setup

This portfolio uses Contentful as a headless CMS. To set up:

1. Create a Contentful account and space
2. Define your content model (e.g., `caseStudy` content type)
3. Add your space ID and API tokens to environment variables
4. Enable live preview for real-time content editing

### Content Types

- **Case Study** - Includes title, subtitle, featured image, slug, skills, and rich text content
- **Featured Studies** - Filterable by `isFeatured` boolean field

## 🚢 Deployment

The site is deployed on Netlify with automatic deployments from the repository. The build process:

1. Installs dependencies
2. Builds the React app
3. Deploys to Netlify CDN

## 🎯 Special Features

### Live Preview Mode
Access preview mode by appending `?preview=true` to any URL to see draft content from Contentful.

### Dynamic Page Titles
The page title changes when the browser tab is hidden, adding a playful touch to the user experience.

### Interactive Avatar
Click the avatar on the About page to see a fun flip animation between real and anime versions.

## 📄 License

This project is private and proprietary.

## 👤 Author

**Michael Njogu** - Strategic Product Designer

- Portfolio: [Live Site](https://michael-njogu.design)
- Certifications: IAAP Member, Certified SAFe® 6 Agilist

## 🙏 Acknowledgments

- Contentful for headless CMS capabilities
- Netlify for hosting and deployment
- The open-source community for amazing tools and libraries