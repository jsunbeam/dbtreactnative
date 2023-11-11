import auth from "@react-native-firebase/auth";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

class FirebaseService {
  constructor() {
    this.auth = auth();
    this.authStateListener = null;
  }

  initialize() {
    const firebaseConfig = {
      apiKey: "AIzaSyCcZqTLxh7eipBBOLEImgQYOXzghqrMNwg",
      authDomain: "dbt-panda-rn.firebaseapp.com",
      projectId: "dbt-panda-rn",
      storageBucket: "dbt-panda-rn.appspot.com",
      messagingSenderId: "515315568223",
      appId: "1:515315568223:web:e4cf26cf38f76ca61755ea",
      measurementId: "G-F16DX91GNC",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    console.log(app);
    // Initialize Firebase if not already initialized
    if (!this.auth) {
      // Initialize Firebase
    }
  }

  onAuthStateChanged(callback) {
    // Set up the auth state change listener
    this.authStateListener = this.auth.onAuthStateChanged(callback);
  }

  removeAuthStateListener() {
    // Remove the auth state change listener
    if (this.authStateListener) {
      this.authStateListener();
    }
  }

  getCurrentUser() {
    // Get the current user
    return this.auth.currentUser;
  }

  // Other authentication methods as needed (signIn, signOut, etc.)
}

const firebaseService = new FirebaseService();
export default firebaseService;
