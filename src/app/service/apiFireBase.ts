import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDz-TAGkStbeWK9eyJwBe6Fda_MW6Ni4bw",
  authDomain: "topline-crud.firebaseapp.com",
  databaseURL: "https://topline-crud-default-rtdb.firebaseio.com",
  projectId: "topline-crud",
  storageBucket: "topline-crud.appspot.com",
  messagingSenderId: "523002163853",
  appId: "1:523002163853:web:7c1902c27c98c74c7528c4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();