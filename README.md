# ♻️ ReThread: Revolutionizing Textile Waste into Human Dignity

> **"Bridging the gap between fashion waste and social welfare with AI-driven hyperlocal logistics."**

[![Google Solution Challenge](https://img.shields.io/badge/Google_Solution_Challenge-2026-4285F4?logo=google&logoColor=white)](https://developers.google.com/community/solutions-challenge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

---

## 📌 Problem Statement
The fashion industry produces **92 million tons of textile waste** annually. Paradoxically, millions of people worldwide lack access to basic clothing. Traditional donation systems fail due to:
- **High Logistics Costs**: Shipping small clothing bundles across states is expensive and carbon-heavy.
- **Resource Mismatch**: NGOs often receive winter clothes in summer or torn items they cannot use.
- **Lack of Transparency**: Donors rarely know if their items actually reached someone in need.

## 💡 Solution
**ReThread** is an AI-powered ecosystem that decentralizes clothing donations. By leveraging **Google Gemini AI**, we instantly analyze garments for type and quality, matching them to the precise needs of local NGOs. Our **Hyperlocal Micro-Hub** model reduces shipping costs by 90% by utilizing existing neighborhood infrastructure and volunteer fleets.

---

## 🌍 UN Sustainable Development Goals (SDGs)
ReThread is built to advance the following UN 2030 targets:
- **SDG 1: No Poverty** — Empowering marginalized communities with high-quality, matched clothing.
- **SDG 12: Responsible Consumption & Production** — Transforming the "take-make-waste" model into a circular economy.
- **SDG 13: Climate Action** — Drastically reducing carbon footprints by matching 80% of donations within a 5km radius.

---

## 🧠 Key Features
- **🤖 Gemini AI Vision Scan**: Instant categorization and quality check using Gemini 2.5 Flash.
- **📍 Real-Time Demand Map**: Interactive heatmap of clothing needs across 500+ Indian cities.
- **🆔 Digital Clothing Passport**: QR-based tracking of an item's lifespan from "purchase to donation."
- **🏪 Micro-Hub Network**: Drop-off points at local kirana stores, apartments, and petrol pumps.
- **🛵 Zero-Cost Logistics**: Integration with partner return-trips (Zomato/Flipkart) for "free" shipping.

---

## 🏗️ Technical Architecture
1. **CAPTURE**: Donor takes a photo of the clothing item.
2. **ANALYZE**: Gemini 2.5 Flash identifies fabric, type, and condition.
3. **MATCH**: Algorithm compares item data with the `Urgency Score` of nearest NGOs.
4. **TRACK**: Firebase updates the item's `Digital Passport` status in real-time.

---

## 🛠️ Tech Stack
| Category | Technology |
| :--- | :--- |
| **AI Engine** | Google Gemini 2.5 Flash (Vision & Reasoning) |
| **Backend** | Firebase (Firestore, Auth, Storage) |
| **Frontend** | Vanilla HTML5, CSS3, JavaScript (ES6+) |
| **Maps** | Leaflet.js (Interactive Geolocation) |
| **QR Engine** | qrcodejs (Dynamic QR Generation) |
| **Deployment** | Vercel (CI/CD) |

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (>=18.0.0)
- Firebase Account
- Google AI Studio API Key (Gemini)

### Local Configuration
1. **Clone the Project**:
   ```bash
   git clone https://github.com/roshanisingh12/ReThread.git
   ```
2. **Configure Environment**:
   Create `env.json` in the root directory:
   ```json
   {
     "GEMINI_API_KEY": "YOUR_KEY",
     "FIREBASE_API_KEY": "YOUR_KEY",
     "FIREBASE_AUTH_DOMAIN": "rethread-e7afe.firebaseapp.com",
     "FIREBASE_PROJECT_ID": "rethread-e7afe"
   }
   ```
3. **Launch the App**:
   ```bash
   npx serve .
   ```

---

## ▶️ Usage Instructions
1. **For Donors**: Upload a photo → Get AI Match → Drop at nearest Micro-Hub.
2. **For Volunteers**: View nearby pickup requests → Drop at assigned NGO.
3. **For NGOs**: Update "Real-Time Needs" → Receive sorted, high-quality donations.

---

## 🌍 Future Scope
- **AI Fabric Recycling Router**: Automatically routing "unwearable" items to textile recycling plants.
- **Blockchain Transparency**: Immutable logs for large-scale corporate donation tax credits.
- **Voice-Activated Donations**: Multilingual AI support for illiterate/differently-abled users.

---

## 🤝 Team Details
| Name | Role | Contact |
| :--- | :--- | :--- |
| **Pranav Mohan Suryawanshi** | Team Leader & Full Stack | [pranavms09@gmail.com](mailto:pranavms09@gmail.com) |
| **Roshani Jagdeep Singh** | UI/UX & Content | [2007roshanisingh@gmail.com](mailto:2007roshanisingh@gmail.com) |
| **Rupesh Sanjay Patil** | Frontend Developer | [rupeshpatil14042006@gmail.com](mailto:rupeshpatil14042006@gmail.com) |
| **Mahi Bhavikkumar Soni** | AI Researcher | [soni.mahi3011@gmail.com](mailto:soni.mahi3011@gmail.com) |

---
© 2026 ReThread Team | Developed with ❤️ for **Google Solution Challenge**
