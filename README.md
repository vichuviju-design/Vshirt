# V-Shirt - Modern Fashion Brand Static Website

A fully responsive, static website for the V-Shirt fashion brand, built with React + Vite, Tailwind CSS, and Framer Motion. Inspired by modern fashion e-commerce sites like Styched.in and ASOS.

## 🚀 Features

- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- **Modern UI/UX** - Clean, minimalist layout with smooth animations
- **Product Showcase** - Beautiful product grid with filters
- **SEO Optimized** - Meta tags, OpenGraph, and structured data
- **Smooth Animations** - Framer Motion for transitions and hover effects
- **Static Site** - No backend required, ready for Netlify deployment

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **JSON** - Data storage (no backend)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd v-shirt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🌐 Netlify Deployment

### Option 1: Deploy via Netlify Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Connect your repository
5. Netlify will auto-detect the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI** (if not already installed)
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and deploy**
   ```bash
   netlify init
   netlify deploy --prod
   ```

### Configuration

The `netlify.toml` file is already configured with:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirects (all routes redirect to `index.html`)

## 📁 Project Structure

```
v-shirt/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Logo.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCard.jsx
│   │   ├── CategoryCard.jsx
│   │   ├── Newsletter.jsx
│   │   └── Layout.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── data/            # JSON data files
│   │   ├── products.json
│   │   └── categories.json
│   ├── App.jsx          # Main app component with routes
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML template
├── netlify.toml         # Netlify configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies
```

## 🎨 Design System

### Colors
- **Primary:** Coral `#FF6F61` or Electric Blue `#007BFF`
- **Text:** Black/Dark Gray `#111111`
- **Background:** White `#FFFFFF`
- **Neutral:** Light Grey `#F5F5F5`

### Typography
- **Font Family:** Inter, Poppins, Montserrat (sans-serif fallback)
- **Weights:** 400, 500, 600, 700, 800, 900

## 📄 Pages

- **Home** (`/`) - Hero section, featured categories, trending products, sale banner
- **Shop** (`/shop`) - Product grid with filters (category, size, color, price)
- **About** (`/about`) - Brand story, mission, fashion philosophy, team
- **Contact** (`/contact`) - Contact form, address, map, social links
- **404** (`/*`) - Custom not found page

## 🔧 Customization

### Adding Products

Edit `src/data/products.json` to add or modify products:

```json
{
  "id": 1,
  "name": "Product Name",
  "category": "Men",
  "price": 29.99,
  "image": "https://example.com/image.jpg",
  "size": ["S", "M", "L", "XL"],
  "color": "White"
}
```

### Modifying Colors

Update `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: {
    DEFAULT: '#FF6F61', // Your primary color
  },
}
```

### SEO Meta Tags

Edit `index.html` to update meta tags, OpenGraph, and structured data.

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🎯 Performance

- Optimized images from Unsplash/Pexels
- Code splitting with React Router
- Lazy loading for images
- Minimal bundle size

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, visit the [Contact](/contact) page.

---

Built with ❤️ for V-Shirt
