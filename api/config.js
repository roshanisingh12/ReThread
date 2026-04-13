export default function handler(request, response) {
    // This runs on Vercel's servers, so it CAN access process.env
    // We return these to the frontend so the static site can initialize
    response.status(200).json({
        GEMINI_API_KEY: process.env.GEMINI_API_KEY,
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || "rethread-e7afe.firebaseapp.com",
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || "rethread-e7afe",
        FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET || "rethread-e7afe.firebasestorage.app",
        FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID || "1089027360405",
        FIREBASE_APP_ID: process.env.FIREBASE_APP_ID || "1:1089027360405:web:fb93dea92ed00b57217d9c",
        FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID || "G-HKXHS3NSFG"
    });
}
