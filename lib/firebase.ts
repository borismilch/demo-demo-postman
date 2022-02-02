import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbmqVeBcrEE1JOykzXMc3EBTSw0H1-Fjg",
  authDomain: "test-31ca0.firebaseapp.com",
  projectId: "test-31ca0",
  storageBucket: "test-31ca0.appspot.com",
  messagingSenderId: "671889102512",
  appId: "1:671889102512:web:ec80446eea300fc4648d75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage()