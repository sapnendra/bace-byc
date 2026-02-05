# BACE Website - Bhaktivedanta Academic and Cultural Education

A modern, responsive website for BACE (Bhaktivedanta Academic and Cultural Education), a Vedic hostel and youth development platform for college students.

## 🎨 Features

- **Modern Design**: Custom design system with saffron, beige, forest green, charcoal, and gold colors
- **Smooth Animations**: GSAP-powered floating SVG elements and Lenis smooth scrolling
- **Responsive Layout**: Mobile-first design that works beautifully on all devices
- **SEO Optimized**: Proper meta tags, semantic HTML, and optimized structure
- **Form Validation**: Zod-powered validation for registration forms
- **Database Integration**: MongoDB backend for storing registrations

## 🏗️ Tech Stack

- **Framework**: Next.js 16.1.2 (App Router)
- **React**: 19.x
- **TypeScript**: Latest
- **Styling**: Tailwind CSS with custom design system
- **Animations**: GSAP + Lenis smooth scrolling
- **Database**: MongoDB with Mongoose
- **Validation**: Zod
- **Fonts**: Google Fonts (Inter + Playfair Display)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── about/             # About BACE page
│   ├── admissions/        # Admissions & registration
│   ├── api/register/      # API route for registration
│   ├── contact/           # Contact page
│   ├── events-courses/    # Events & Courses
│   ├── gallery/           # Image gallery
│   ├── hostel-life/       # Hostel Life details
│   ├── parents/           # For Parents page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── animations/        # Smooth scroll component
│   ├── forms/            # Registration form
│   ├── home/             # Homepage sections
│   ├── layout/           # Header & Footer
│   └── ui/               # Reusable UI components
├── lib/
│   ├── mongodb.ts        # Database connection
│   ├── utils.ts          # Utility functions
│   └── validations/      # Zod schemas
├── models/               # Mongoose models
├── styles/               # Global styles
└── types/                # TypeScript types
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB running locally or MongoDB Atlas account

### Installation

1. **Clone the repository**

   ```bash
   cd Youth-Forum
   npm install
   ```

2. **Set up environment variables**

   Copy `.env.local.example` to `.env.local`:

   ```bash
   cp .env.local.example .env.local
   ```

   Update the MongoDB connection string in `.env.local`:

   ```env
   MONGODB_URI=mongodb://localhost:27017/bace
   # OR for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bace
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Pages

### 1. **Homepage** (`/`)

- Hero section with floating SVG animations
- What is BACE
- Why BACE Matters (6 reasons)
- What Students Learn (7 outcomes)
- Vedic Hostel Difference (comparison table)
- Daily Life at BACE
- Why Parents Trust BACE

### 2. **About** (`/about`)

- Mission & Vision
- Core Values
- ISKCON Connection

### 3. **Events & Courses** (`/events-courses`)

- Core Courses (DYS, Bhagavad Gita)
- Workshops
- Experiential Learning
- Campus Engagement

### 4. **Hostel Life** (`/hostel-life`)

- Daily Routine
- Facilities & Amenities
- Lifestyle Guidelines

### 5. **For Parents** (`/parents`)

- Why Parents Trust BACE
- Observable Changes
- FAQ

### 6. **Gallery** (`/gallery`)

- Masonry layout
- Category filtering
- Placeholder for production images

### 7. **Contact** (`/contact`)

- Contact information
- Quick links
- Social media

### 8. **Admissions** (`/admissions`)

- 6-step admission process
- Eligibility criteria
- Full registration form with validation

## 🗄️ Database Schema

### Registration Model

```typescript
{
  name: String (required)
  email: String (required)
  phone: String (required, 10 digits)
  college: String (required)
  currentCity: String (required)
  permanentAddress: String (required)
  message: String (optional)
  createdAt: Date
  status: 'pending' | 'contacted' | 'accepted' | 'rejected'
}
```

## 🎨 Design System

### Colors

- **Saffron**: Primary color (#C8621F)
- **Beige**: Background (#F5F1E8)
- **Forest Green**: Accents (#3A5A40)
- **Charcoal**: Text (#2B2D2F)
- **Gold**: Highlights (#B8860B)

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## 🔧 Scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📝 Environment Variables

Required environment variables (see `.env.local.example`):

- `MONGODB_URI` - MongoDB connection string
- `NEXT_PUBLIC_APP_URL` - Application URL

## 🌐 Deployment

### Recommended: Vercel

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy

### Alternative: Any Node.js Hosting

1. Build the application: `npm run build`
2. Start the server: `npm start`
3. Ensure MongoDB is accessible from your hosting environment

## 📚 Key Components

### Reusable UI Components

- `Button` - Multiple variants (primary, secondary, outline, ghost)
- `Card` - With optional hover effects
- `Section` - Wrapper with background options
- `Container` - Max-width container with padding

### Form Components

- `RegistrationForm` - Full validation with Zod
- Real-time error display
- Success/error states

### Layout Components

- `Header` - Sticky navigation with scroll detection
- `Footer` - Comprehensive footer with links
- `SmoothScroll` - Lenis integration

## 🔒 Security

- Input validation with Zod
- MongoDB injection protection via Mongoose
- Environment variables for sensitive data
- CORS configuration for API routes

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation
- Optimized images and assets

## 🤝 Contributing

This is a project for BACE. For any modifications or contributions, please contact the development team.

## 📄 License

Private project for BACE - All rights reserved

## 👥 Contact

For questions about the website or BACE:

- Email: info@bace.org
- Website: [Your Domain]

---

Built with ❤️ for BACE - Where Education Meets Character, and Clarity Meets Purpose
