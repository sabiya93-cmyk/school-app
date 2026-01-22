// Include Firebase SDK in HTML:
// <script src="https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js"></script>
// <script src="https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"></script>
// <script src="https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"></script>
// <script src="https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js"></script>

const firebaseConfig = {
  apiKey: "AIzaSyCaHjvIQUOF2OtsdIqZp45RCKYTFKh8QwM",
  authDomain: "aps-belagavi.firebaseapp.com",
  projectId: "aps-belagavi",
  storageBucket: "aps-belagavi.firebasestorage.app",
  messagingSenderId: "858834476044",
  appId: "1:858834476044:web:944b457fd2a7b0c0e42229",
  measurementId: "G-B4729784Q4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
