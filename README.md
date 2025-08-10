<div align="center">
  <img src="public/assets/logo.png" alt="Portfolio Logo" width="200">
</div>

<h3 align="center">
  A minimal black-and-white portfolio with light/dark mode, Framer Motion micro-animations, and a roadmap-style experience timeline
</h3>

<h4 align="center">
Technologies used:
</h4>

<p align="center">
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React">
    <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/framer-motion-%23000000.svg?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion">
    <img src="https://img.shields.io/badge/github%20pages-%23000000.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages">
</p>

## 📋 Table of Contents

1.  ⚙️ [Tech Stack](#tech-stack)
2.  ✨ [Features](#features)
3.  🚀 [Live Portfolio](#live-portfolio)
4.  🛠️ [Deploy Locally](#deploy)
5.  📁 [Project Structure](#project-structure)

## <a name="tech-stack">⚙️ Tech Stack </a>

👉 **React**: Modern frontend framework with TypeScript for type safety and better development experience

👉 **TypeScript**: Enhanced JavaScript with static typing for better code quality and developer experience

👉 **Vite**: Lightning-fast build tool and development server for modern web development

👉 **Tailwind CSS**: Utility-first CSS framework for rapid UI development with custom design system

👉 **Framer Motion**: Production-ready motion library for React with smooth animations and micro-interactions

👉 **GitHub Pages**: Free hosting platform for static websites with automatic deployment from GitHub repositories

## <a name="features">✨ Features</a>

1️⃣ **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices

2️⃣ **Theme Toggle**: Light and dark mode with smooth transitions and persistent preferences

3️⃣ **Framer Motion**: Micro-animations and smooth transitions throughout the user experience

4️⃣ **Experience Timeline**: Roadmap-style layout showcasing professional journey and milestones

5️⃣ **Project Showcase**: Interactive project display with desktop and mobile GIF previews

6️⃣ **Skills Grid**: Organized skill categories with monochrome logo representations

7️⃣ **Modern UI**: Clean, minimalist black-and-white design with excellent typography

8️⃣ **Performance Optimized**: Fast loading with Vite build tool and optimized assets

9️⃣ **Type Safety**: Full TypeScript implementation for better development experience

1️⃣0️⃣ **GitHub Pages Ready**: Built-in deployment configuration for GitHub Pages hosting

## <a name="live-portfolio">🚀 Live Portfolio</a>

**Visit the deployed portfolio:** [https://ishmamanwar.github.io/](https://ishmamanwar.github.io/)

The portfolio is fully deployed and ready to showcase!

## <a name="deploy">🛠️ Deploy locally</a>

Prerequisites:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

```bash
# Clone the repository
git clone https://github.com/ishmamanwar/ishmamanwar.github.io.git
cd ishmamanwar.github.io

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## <a name="project-structure">📁 Project Structure</a>

```
ishmamanwar.github.io/
├── public/                   # Static assets and HTML template
│   ├── assets/              # Images, GIFs, and logo files
│   └── resume.pdf           # Resume file
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx       # Navigation and theme toggle
│   │   ├── LoadingScreen.tsx # Loading animation
│   │   └── ThemeToggle.tsx  # Light/dark mode switch
│   ├── data/                # Content and configuration
│   │   ├── experience.ts    # Professional experience data
│   │   ├── logos.tsx        # Skill logos and icons
│   │   ├── projects.ts      # Project information
│   │   ├── site.ts          # Site configuration
│   │   └── skills.ts        # Skills categorization
│   ├── sections/            # Main portfolio sections
│   │   ├── Experience.tsx   # Experience timeline
│   │   ├── Hero.tsx         # Introduction section
│   │   ├── Projects.tsx     # Project showcase
│   │   └── Skills.tsx       # Skills grid
│   ├── App.tsx              # Main application component
│   ├── index.css            # Global styles
│   └── main.tsx             # Application entry point
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite build configuration
└── README.md
```

## Content Customization

### Update Personal Information

Edit `src/data/site.ts` for:

- Your name and role
- Location and contact information
- Resume file path
- Social media links

### Update Projects

Edit `src/data/projects.ts` for:

- Project names and descriptions
- Technology stacks
- Repository and live URLs
- Desktop and mobile GIF previews

### Update Experience

Edit `src/data/experience.ts` for:

- Professional experience items
- Timeline dates and descriptions
- Company information

### Update Skills

Edit `src/data/skills.ts` for:

- Skill categories and items
- Customize skill groupings
- Update logos in `src/data/logos.tsx`

## Deployment

### GitHub Pages

This repository includes `.github/workflows/pages.yml` for automatic deployment:

1. Push changes to the `main` branch
2. Go to GitHub repository Settings → Pages
3. Set Source to "GitHub Actions"
4. The portfolio will automatically deploy

### Custom Domain

For a custom domain, update the `base` in `vite.config.ts` and configure your domain settings.

## Design Philosophy

This portfolio features a minimalist, monochrome design with:

- **Clean typography** and excellent readability
- **Smooth animations** powered by Framer Motion
- **Responsive layout** that works on all devices
- **Theme switching** between light and dark modes
- **Professional aesthetic** suitable for software developers

## Contributing

This portfolio is actively maintained. Feel free to:

- Report bugs or issues
- Suggest new features
- Submit pull requests
- Use as a template for your own portfolio

## License

This project is developed by Ishmam Anwar.

---
