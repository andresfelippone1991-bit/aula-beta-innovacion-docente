import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, Auth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

console.log("🔥 Firebase Config:", firebaseConfig.apiKey ? "API Key Present" : "Missing API Key");

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize auth only if API key is valid to prevent crash
let authInstance: Auth | null = null;
try {
    if (firebaseConfig.apiKey) {
        authInstance = getAuth(app);
    } else {
        console.warn("⚠️ Firebase Auth not initialized: Missing API Key");
    }
} catch (error) {
    console.error("Error initializing auth:", error);
}

export const auth = authInstance;
export const googleProvider = new GoogleAuthProvider();
