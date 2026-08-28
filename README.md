# 🚀 Taskero

**Taskero** is a freelance task marketplace connecting clients with freelancers for small and quick jobs. The platform enables users to post tasks, browse available opportunities, and manage their freelance engagements with ease.

---

## ✨ Features

- ✅ Post and browse tasks with detailed **descriptions, categories, budgets, and deadlines**.
- ✅ Search, filter, and sort tasks by category, status, and deadline.
- ✅ **User authentication** using Email/Password and Google login (via Firebase Auth).
- ✅ **User dashboard** with overview stats, task management, and profile editing.
- ✅ **Secure CRUD operations** for task and bid management (bid increments via PATCH).
- ✅ **Bid tracking** for both clients and freelancers.
- ✅ Fully **responsive design** for mobile, tablet, and desktop.
- ✅ **Dark/Light theme toggle** for enhanced accessibility and user comfort.

---

## 📦 Tech Stack

- ⚛️ React 19 (with Vite 6)
- 🧭 React Router v7 (data APIs — loaders, `useLoaderData`)
- 🔥 Firebase Authentication (Email/Password + Google)
- 🎨 Tailwind CSS v4 (via `@tailwindcss/vite`, no config file)
- 🧩 shadcn/ui + Radix UI primitives
- 🎬 Motion (Framer Motion) for scroll animations
- 🍞 React Toastify
- 🎯 React Icons + Lucide React
- 🧠 SweetAlert2
- 💬 React Simple Typewriter
- 🧵 class-variance-authority + tailwind-merge

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

### 4. Run the Development Server

```bash
npm run dev
```

Visit: http://localhost:5173

---

## 🗺️ Routes

**Public routes**
| Route | Description |
|------------------|---------------------------------|
| `/` | Home |
| `/browse-tasks` | Browse and search all tasks |
| `/login` | Login |
| `/signup` | Create an account |
| `/about-us` | About |
| `/contact-us` | Contact |
| `/terms` | Terms and conditions |

**Protected routes**
| Route | Description |
|--------------------------|-----------------------------------|
| `/add-task` | Post a new task |
| `/task/:id` | View task details and place a bid |
| `/edit-task/:id` | Edit an owned task |
| `/my-posted-tasks` | Manage tasks you posted |
| `/dashboard` | User dashboard overview |
| `/dashboard/all-tasks` | All tasks (dashboard) |
| `/dashboard/my-tasks` | Your tasks (dashboard) |
| `/dashboard/add-task` | Add task from dashboard |
| `/dashboard/edit-profile`| Edit your profile |

Any unknown route falls through to a custom **404 NotFound** page.

---

## 🔨 Available Scripts

```bash
npm run dev      # Start the Vite dev server
npm run build    # Production build
npm run lint     # Run ESLint
npm run preview  # Preview the production build
```
