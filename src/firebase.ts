import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyAmy2gspTNk6RhQdRur73iNAnmjQDWyTmA",
  authDomain: "movies-2023-develop.firebaseapp.com",
  databaseURL: "https://movies-2023-develop-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "movies-2023-develop",
  storageBucket: "movies-2023-develop.appspot.com",
  messagingSenderId: "271100415204",
  appId: "1:271100415204:web:c8b5b8aa319eb8ed4570f1",
}

export const app = initializeApp(firebaseConfig)
