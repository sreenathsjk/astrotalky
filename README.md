 🔮 AstroAI India

«🚀 AI-powered Vedic Astrology Platform with Firebase + OpenAI
Built for India 🇮🇳 with real-time predictions, OTP login, and scalable architecture.»

---

🌟 Features

- 🔐 OTP Login (Firebase Auth)
- 🔮 AI Astrology Predictions (OpenAI GPT)
- 🧠 Rule-Based Astrology Engine (1000+ rules ready)
- 📊 User Dashboard (Firestore history)
- 🌍 Multi-language Ready (Indian languages support)
- ⚡ Serverless Backend (Firebase Functions)
- 🎨 Premium UI (Glassmorphism + Dark Theme)

---

🏗️ Tech Stack

Frontend

- React (Create React App)
- CSS (Glass UI)
- Axios

Backend

- Firebase Functions
- Firestore Database
- Firebase Authentication (OTP)

AI

- OpenAI GPT API
- Custom Astrology Rules Engine (RAG-ready)

---

📁 Project Structure

astrotalky/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── Login.js
│   ├── Dashboard.js
│   ├── firebase.js
│   ├── App.css
│   └── index.js
├── functions/
│   └── index.js
├── scripts/
│   ├── generateRules.js
│   └── uploadRules.js
├── package.json
├── .gitignore
└── README.md

---

⚙️ Setup Instructions

1️⃣ Clone Repository

git clone https://github.com/YOUR_USERNAME/astrotalky.git
cd astrotalky

---

2️⃣ Install Dependencies

npm install

---

🔥 Firebase Setup

Step 1: Install Firebase CLI

npm install -g firebase-tools
firebase login

---

Step 2: Initialize Firebase

firebase init

Select:

- Functions ✅
- Firestore ✅
- Hosting (optional)

---

Step 3: Add OpenAI API Key

firebase functions:config:set openai.key="YOUR_API_KEY"
firebase deploy

---

🤖 Generate Astrology Rules (1000+)

Generate Rules

node scripts/generateRules.js

Upload to Firestore

node scripts/uploadRules.js

---

🚀 Run Frontend Locally

npm start

---

🌐 Deployment (Vercel)

Step 1:

Push your code to GitHub

Step 2:

Go to Vercel → Import Project

Step 3:

Set:

- Root Directory: "."
- Build Command: "npm run build"
- Output Directory: "build"

Step 4:

Deploy 🚀

---

🔗 Architecture

User (Frontend - Vercel)
        ↓
Firebase Auth (OTP Login)
        ↓
Firebase Functions (Backend)
        ↓
OpenAI API (AI Predictions)
        ↓
Firestore (User Data + Rules)

---

💰 Monetization Ideas

- ₹99 → Basic Prediction
- ₹299 → Full Kundli Report
- ₹999 → Premium AI Astrologer Chat
- Subscription Model (Monthly)

---

🔮 Future Features

- 🧭 Real Kundli (Swiss Ephemeris)
- 🎤 Voice-based Astrology
- 📱 Android App (APK + Play Store)
- 💳 Razorpay Payments
- 📅 Daily Horoscope Notifications
- 💑 Marriage Matching (Kundli Milan)

---

⚠️ Important Notes

- Never expose your OpenAI API key publicly
- Use Firebase config for secure backend calls
- Optimize API calls to reduce cost

---

🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first.

---

📜 License

MIT License

---

🙌 Credits

Built with ❤️ by [Your Name]

---

🚀 Final Goal

«Build India’s #1 AI Astrology Platform 🇮🇳
Scale to millions of users 💰»
