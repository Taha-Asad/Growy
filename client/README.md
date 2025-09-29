# Growy

A modern and responsive web design project built with **React (Vite)**.  
The project showcases multiple layouts (Home, Jobs, Services, Pricing) and reusable components such as Navbar, Footer, and CTA banners.

This was developed as part of the **Social Swirl Web Developer Assessment**.

---

## 🚀 Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Material Ui
- **Tooling:** ESLint, Vite

---

## ✨ Features

- Responsive layouts for all screen sizes
- Modular components (Navbar, Footer, Auth page, Hero sections, etc.)
- Optimized image assets for performance
- Smooth navigation and scrolling between sections

---

## 📂 Project Structure

```
client/
 ├── public/              # Static assets
 ├── src/
 │   ├── assets/          # Images and design assets
 │   ├── components/      # Reusable components (Navbar, Footer, AuthPage)
 │   ├── layout/          # Page layouts (Home, Jobs, Services, Pricing)
 │   ├── pages/           # Page-level views (Home, About, Ecommerce, etc.)
 │   ├── App.jsx          # App entry point
 │   └── main.jsx         # React root
 ├── package.json
 └── vite.config.js
```

---

## ⚡ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Taha-Asad/Growy.git

# Navigate into project
cd Growy/client

# Install dependencies
npm install
```

### Run Development Server

```bash
npm run dev
```

This will start the Vite dev server. Open [http://localhost:5173](http://localhost:5173) to view in the browser.

### Build for Production

```bash
npm run build
```

---

## 🔑 Future Milestones

Although this project is currently frontend-only, the next steps will include adding backend functionality:

- **Authentication & Authorization**

  - User registration & login with JWT
  - Secure password storage (bcrypt)
  - Role-based access (admin, standard user)

- **Backend API**

  - Built with Node.js + Express
  - RESTful endpoints for jobs, services, and user data
  - MongoDB or PostgreSQL for persistent storage

- **User Features**

  - Profile management with profile pictures
  - Bookmarks/saved jobs or services
  - Contact form connected to backend email service

- **Deployment**
  - Deploy frontend to Vercel/Netlify
  - Deploy backend to Render/Heroku/DigitalOcean

---

## 📘 Notes

This project was created as part of the **10-Day Assessment for Social Swirl**.  
Focus areas: clean React structure, responsive UI, and forward-thinking for scalability.

---

## 📄 License

This project is licensed under the MIT License.
