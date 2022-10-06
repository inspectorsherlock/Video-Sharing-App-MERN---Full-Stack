import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCcvK8q2eXn6x071lEGy-piAu7RJTMZjeM",
  authDomain: "video-e3901.firebaseapp.com",
  projectId: "video-e3901",
  storageBucket: "video-e3901.appspot.com",
  messagingSenderId: "18051065281",
  appId: "1:18051065281:web:21cb7ab8906bc528e9fb40"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app;