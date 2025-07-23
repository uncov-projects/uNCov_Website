# Compally Business Consulting - Light Theme

A modern, professional business consulting website built with React, TypeScript, Vite, and Tailwind CSS. Features beautiful light theme design with smooth animations and responsive layout.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, TypeScript, Vite, and Tailwind CSS
- **Light Theme Design**: Professional light color scheme with purple and orange accents
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful fade-in animations and hover effects
- **TypeScript**: Full type safety throughout the application
- **Professional UI**: Clean, modern design with gradient backgrounds and shadows
- **Contact Form**: Working contact form with validation
- **Smooth Scrolling**: Navigation with smooth scroll to sections

## 🎨 Design Features

- **Color Scheme**: Light theme with #7D53FF (purple) and #FB8B24 (orange) accents
- **Typography**: Inter and Poppins fonts for modern, clean text
- **Animations**: Custom CSS animations for fade-in effects and hover states
- **Cards**: Beautiful service and portfolio cards with hover effects
- **Gradients**: Subtle gradient backgrounds and text effects

## 📦 What's Included

### Components
- `Navbar` - Responsive navigation with mobile menu
- `Hero` - Landing section with animated background
- `Features` - Company statistics and features
- `Services` - Service offerings grid
- `Portfolio` - Success stories showcase
- `Contact` - Contact form with validation
- `Footer` - Footer with links and company info

### Functionality
- Smooth scrolling navigation
- Form validation and submission
- Responsive mobile menu
- Scroll effects for navbar
- Intersection observer for animations
- TypeScript type definitions

## 🛠 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Extract the project files
2. Navigate to the project directory:
   ```bash
   cd compally-business-consulting
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  brand: {
    purple: '#7D53FF',        // Primary brand color
    purpleLight: '#9069FF',   // Lighter shade
    orange: '#FB8B24',        // Secondary accent
    orangeLight: '#FFA150',   // Lighter shade
  }
}
```

### Content
- Update contact information in `src/components/Contact.tsx`
- Modify service offerings in `src/components/Services.tsx` 
- Edit company features in `src/components/Features.tsx`
- Update portfolio items in `src/components/Portfolio.tsx`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── hooks/               # Custom React hooks
│   └── index.ts
├── types/               # TypeScript type definitions
│   └── index.ts
├── utils/               # Utility functions
│   └── index.ts
├── App.tsx              # Main App component
├── main.tsx            # React entry point
└── index.css           # Global styles and Tailwind
```

## 🎯 Key Technologies

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Framer Motion** - Animation library (included but optional)

## 📱 Responsive Design

The website is fully responsive and works great on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🚀 Performance

- Fast loading with Vite optimization
- Lazy loading of components
- Optimized images and assets
- Minimal bundle size with tree shaking

## 📄 License

This project is provided as-is for your use. You can modify and customize it according to your needs.

---

**Happy coding!** 🎉
