// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJJD107zKAgbkvzyVB256py-8_g_lgGus",
  authDomain: "auth-check-2e21b.firebaseapp.com",
  projectId: "auth-check-2e21b",
  storageBucket: "auth-check-2e21b.appspot.com",
  messagingSenderId: "408746150126",
  appId: "1:408746150126:web:0a8097c73e79c2534f4bff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;

