# Kiran D T — Portfolio Website

A modern, responsive personal portfolio website for a Python Full Stack Developer, built with **React.js**.

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   └── index.html            # HTML entry point + Google Fonts
├── src/
│   ├── components/
│   │   ├── LoadingScreen.jsx  # Animated loading screen
│   │   ├── LoadingScreen.css
│   │   ├── Navbar.jsx         # Sticky navbar with dark/light toggle
│   │   ├── Navbar.css
│   │   ├── Hero.jsx           # Hero section with CTA
│   │   ├── Hero.css
│   │   ├── About.jsx          # About section
│   │   ├── About.css
│   │   ├── Skills.jsx         # Skills with animated progress bars
│   │   ├── Skills.css
│   │   ├── Projects.jsx       # Project cards with live/GitHub links
│   │   ├── Projects.css
│   │   ├── Resume.jsx         # Resume highlights + download
│   │   ├── Resume.css
│   │   ├── Contact.jsx        # Contact form + social links
│   │   ├── Contact.css
│   │   ├── Footer.jsx         # Footer with socials
│   │   ├── Footer.css
│   │   └── useScrollReveal.js # Custom scroll animation hook
│   ├── App.jsx                # Root component with theme state
│   ├── App.css
│   ├── index.js               # React DOM entry
│   └── index.css              # Global styles & CSS variables
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16 or above
- npm v8 or above

### Installation

```bash
# 1. Navigate to the project folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The site will be available at **http://localhost:3000**

---

## 📧 Enabling the Contact Form (EmailJS)

1. Go to [https://www.emailjs.com](https://www.emailjs.com) and create a free account
2. Create a **Service** (e.g., Gmail), a **Template**, and note your **Public Key**
3. Install EmailJS:
   ```bash
   npm install @emailjs/browser
   ```
4. Open `src/components/Contact.jsx` and update the `handleSubmit` function:
   ```js
   import emailjs from '@emailjs/browser';
   
   // Replace the simulated send with:
   await emailjs.sendForm(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     e.target,
     'YOUR_PUBLIC_KEY'
   );
   ```

---

## 📄 Adding Your Resume PDF

Place your resume PDF at:
```
public/Kiran_DT_Resume.pdf
```
The "Download Resume" button in the Resume section links to this file automatically.

---

## 🌐 Deploying to Vercel

### Option 1 — Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project root
vercel

# Follow the prompts and your site goes live!
```

### Option 2 — GitHub + Vercel Dashboard

1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your GitHub repo
3. Framework Preset: **Create React App**
4. Click **Deploy** — done! 🎉

### Vercel Configuration (optional)
Create `vercel.json` in project root for SPA routing:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## 🎨 Customization

| Thing to change | File | What to edit |
|---|---|---|
| Name, title, tagline | `Hero.jsx` | Text content |
| Projects | `Projects.jsx` | `projects` array |
| Skills | `Skills.jsx` | `skillGroups` array |
| Contact info | `Contact.jsx` | `contactLinks` array |
| Colors / theme | `index.css` | CSS variables in `:root` |
| Fonts | `public/index.html` | Google Fonts link |

---

## 🛠️ Tech Stack

| Category | Tech |
|---|---|
| Frontend | React.js 18, CSS3 |
| Fonts | Syne (headings), DM Sans (body) |
| Icons | Font Awesome 6 |
| Animations | CSS Keyframes, IntersectionObserver |
| Deployment | Vercel |

---

## 📬 Contact

**Kiran D T**
- Email: [kirand09876@gmail.com](mailto:kirand09876@gmail.com)
- LinkedIn: [linkedin.com/in/kirandt](https://www.linkedin.com/in/kirandt/)
- GitHub: [github.com/MrGroot01](https://github.com/MrGroot01)
