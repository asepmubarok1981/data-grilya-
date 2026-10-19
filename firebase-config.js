// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  databaseURL: "https://battousai-multi-d24fb-default-rtdb.asia-southeast1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
