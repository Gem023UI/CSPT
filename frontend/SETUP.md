# BSIT-S3A CSPT Website — Setup Guide

## Prerequisites (macOS 11+)

Make sure you have the following installed:
- **Node.js 18+** — https://nodejs.org (use the LTS version)
- **npm 9+** (comes with Node.js)

Verify with:
```bash
node -v
npm -v
```

---

## Step 1 — Clone or Copy the Project

Place the `cspt-website` folder in your desired directory, then:

```bash
cd cspt-website
```

---

## Step 2 — Install Dependencies

```bash
npm install
```

This installs: React, React Router DOM, Vite, Tailwind CSS, DaisyUI, PostCSS, and Autoprefixer.

---

## Step 3 — Start the Development Server

```bash
npm run dev
```

Open your browser at: **http://localhost:5173**

---

## Step 4 — Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder, ready for deployment.

---

## Step 5 — Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
cspt-website/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx          # App entry point
    ├── App.jsx           # Root component
    ├── index.css         # Global styles + claymorphism utilities
    ├── data/
    │   └── lessons.js    # All 16 lesson data
    └── components/
        ├── Header.jsx        # Fixed top header
        ├── Drawer.jsx        # Slide-in navigation drawer
        ├── Hero.jsx          # Hero / landing section
        ├── LessonOverview.jsx # 4-col grid of all lessons
        ├── LessonCard.jsx    # Individual lesson detail section
        ├── PPTCompilation.jsx # PPT downloads section
        ├── Proprietors.jsx   # Team section
        └── Footer.jsx        # Site footer
```

---

## macOS 11 Compatibility Notes

- Vite 5 + React 18 works on macOS 11 (Big Sur) and above.
- If you encounter issues with Node.js version, use **nvm** to manage versions:

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

# Restart terminal, then:
nvm install 18
nvm use 18
```

---

## Customization

### Updating Proprietors
Edit `src/components/Proprietors.jsx` — replace the `proprietors` array with real names and roles.

### Updating Lesson Content
Edit `src/data/lessons.js` — update descriptions, topics, icons, and Cloudinary image URLs.

### Adding Real Cloudinary Images
Replace the `image` field in `src/data/lessons.js` with your actual Cloudinary URLs:
```js
image: "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v.../your-image.jpg"
```
