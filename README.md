# 🚀 Taskero

**Taskero** is a freelance task marketplace connecting clients with freelancers for small and quick jobs. The platform enables users to post tasks, browse available opportunities, and manage their freelance engagements with ease.

---

## ✨ Features

- ✅ Post and browse tasks with detailed **descriptions, categories, budgets, and deadlines**.
- ✅ **User authentication** using Email/Password and Google login (via Firebase).
- ✅ Fully **responsive design** for mobile, tablet, and desktop.
- ✅ **Dark/Light theme toggle** for enhanced accessibility and user comfort.
- ✅ **Secure CRUD operations** for task and bid management.
- ✅ **Bid tracking** for both clients and freelancers.

---

## 📦 Tech Stack

- ⚛️ React 19 (with Vite)
- 🔥 Firebase Authentication
- 🎨 Tailwind CSS + DaisyUI
- 🚀 AOS (Animate On Scroll)
- 🍞 React Toastify
- 🧠 React Helmet Async
- 🎯 React Icons
- 🧠 SweetAlert2
- 🧭 React Router v7
- 💬 React Simple Typewriter
- 🎡 Swiper Slider

---

## 🌐 Live Website

🔗 **Frontend Live Site**: [https://taskero-60a20.web.app/](https://taskero-60a20.web.app/)  
🔗 **Backend Live Server API**: [https://taskero-server.vercel.app/](https://taskero-server.vercel.app/)

---

## ⚙️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/zeon/taskero-client-side.git
cd taskero-client-side
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env.local` and fill in your Firebase and API configuration:

```bash
# Windows
copy .env.example .env.local
# macOS / Linux
cp .env.example .env.local
```

The `.env.local` file should include:
```env
VITE_FIREBASE_apiKey=your_api_key
VITE_FIREBASE_authDomain=your_project_id.firebaseapp.com
VITE_FIREBASE_projectId=your_project_id
VITE_FIREBASE_storageBucket=your_project_id.appspot.com
VITE_FIREBASE_messagingSenderId=your_sender_id
VITE_FIREBASE_appId=your_app_id
VITE_API_URL=https://your-api.vercel.app
```

- `VITE_FIREBASE_*` variables come from your Firebase project → Project Settings → Your app.
- `VITE_API_URL` points to your backend. Leave it empty to use the default production URL, or set it to `http://localhost:5000` when running the server locally.

4. Run the Development Server
```bash
npm run dev
```
Visit: http://localhost:5173
