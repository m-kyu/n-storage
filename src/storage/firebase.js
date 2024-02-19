import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDIYfd341igAf3OW3gjmfCF91KGVUWI5D8",
  authDomain: "gallery-ca6cc.firebaseapp.com",
  projectId: "gallery-ca6cc",
  storageBucket: "gallery-ca6cc.appspot.com",
  messagingSenderId: "19095802754",
  appId: "1:19095802754:web:ecd6d81b338e002db1759b",
  measurementId: "G-69K0MPF4FY"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);