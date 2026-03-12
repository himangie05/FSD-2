# MST1: React Login Authentication

A lightweight React application featuring a secure login form with real-time validation for email formats and password complexity.

## 🚀 Features
* **Email Validation:** Uses Regex to ensure a proper `example@domain.com` format.
* **Password Security:** Strict requirement of at least 6 characters.
* **Dynamic Feedback:** Instant error and success messages for the user.
* **Responsive UI:** Clean, centered form layout.

---

## 🛠️ Tech Stack
* **Frontend:** React.js
* **Styling:** Inline CSS
* **Deployment:** Ready for Vercel/Netlify

---

## 🏃 Getting Started

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone <your-repo-url>
cd mst1
npm install

### 2. Run the App
Start the development server:

Bash
npm start
The app will be available at http://localhost:3000.

📦 Build & Deployment
Create a Production Build
To minify and optimize the app for production:

Bash
npm run build
Deploying to GitHub Pages
Install the package: npm install gh-pages --save-dev

Add the deploy script to package.json:
"deploy": "gh-pages -d build"

Run: npm run deploy

📝 Validation Logic
Email: Checked against /^[^\s@]+@[^\s@]+\.[^\s@]+$/

Password: Verified using .length >= 6

Developed by: Himangi Bhatt

UID: 23BCC70020

Course: B.E. (Hons) Cloud Computing