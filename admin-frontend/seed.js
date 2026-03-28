// // seed.js

const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "civicawareness-53e58.firebaseapp.com",
  projectId: "civicawareness-53e58",
  storageBucket: "civicawareness-53e58.firebasestorage.app",
  messagingSenderId: "726721172844",
  appId: "1:726721172844:web:04cf2c76ea0be339c60f49",
  measurementId: "G-ES3JZR9LRN",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seedReports() {
  try {
    const reportsCollection = collection(db, "reports");

    await addDoc(reportsCollection, {
      date: "2024-01-15",
      type: "Broken Streetlight",
      location: "Main St & 5th Ave",
      status: "submitted",
      priority: "High",
      description: "Streetlight not working, creating safety hazard at night",
      reporter: "Anonymous",
      department: "Utilities",
      image: "https://your-domain.com/broken-streetlight.jpg" // Use a placeholder URL
    });

    await addDoc(reportsCollection, {
      date: "2024-01-18",
      type: "Pothole",
      location: "Oak Street, near school",
      status: "in-progress",
      priority: "Critical",
      description: "Large pothole causing damage to vehicles",
      reporter: "Community Member",
      department: "Roads & Infrastructure",
      image: "https://your-domain.com/pothole-in-road.png"
    });

    await addDoc(reportsCollection, {
      date: "2024-01-20",
      type: "Graffiti",
      location: "City Park entrance",
      status: "submitted",
      priority: "Medium",
      description: "Vandalism on park entrance sign",
      reporter: "City Resident",
      department: "Parks",
      image: "https://your-domain.com/graffiti-on-sign.jpg"
    });

    console.log("Sample reports added successfully! ✅");
  } catch (err) {
    console.error("Error adding reports:", err);
  }
}

seedReports();
