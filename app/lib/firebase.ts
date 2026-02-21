import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCITw9wJpzXlJTuR34FBfPFYUq7R3WNros",
  authDomain: "portfolio-309c7.firebaseapp.com",
  databaseURL: "https://portfolio-309c7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-309c7",
  storageBucket: "portfolio-309c7.firebasestorage.app",
  messagingSenderId: "777868345700",
  appId: "1:777868345700:web:2e94ab65b998481e46ba71",
  measurementId: "G-P7VVG34SS0"
};

// Initialize Firebase (safely handling Next.js server-side rendering)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Analytics only on the client side
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
