import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load credentials
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '.env.local') });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seedData() {
  console.log('--- Initializing Seed to Firestore ---');

  // 1. CREATE SECTIONS
  const sections = {
    'hero-1': {
      id: 'hero-1',
      type: 'hero',
      order: 1,
      content: {
        title: "Hi, I'm Rishabh | Architecting the Future of Web",
        subtitle: "Designing and building innovative, high-performance web experiences that empower businesses and users alike.",
        cta: "Explore My Work",
      },
      metadata: { lastUpdated: new Date().toISOString(), published: true }
    },
    'about-1': {
      id: 'about-1',
      type: 'about',
      order: 2,
      content: {
        heading: "Crafting Digital Excellence",
        description: "I am a passionate Full-Stack Developer specializing in modern web ecosystems. My approach combines technical precision with creative design to deliver scalable and intuitive digital solutions.",
        skills: ["Next.js 15", "Typescript", "Node.js", "Firebase", "Tailwind CSS v4", "Framer Motion", "Scalable Architecture"]
      },
      metadata: { lastUpdated: new Date().toISOString(), published: true }
    }
  };

  try {
    console.log('⏳ Attempting to connect to Firestore collection...');
    
    // Upload sections
    for (const [id, data] of Object.entries(sections)) {
      console.log(`📡 Sending Section: ${id}...`);
      await setDoc(doc(db, 'sections', id), data);
      console.log(`✅ Uploaded Section: ${id}`);
    }


    // 2. CREATE HOME PAGE
    const homePage = {
      id: 'home-page',
      slug: 'home',
      title: "Rishabh Portfolio",
      description: "Welcome to my innovative web experience portfolio.",
      sections: ['hero-1', 'about-1'], // Link IDs from our sections collection
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await setDoc(doc(db, 'pages', 'home'), homePage);
    console.log('✅ Uploaded Page: home');

    console.log('\n🌟 Seeding complete! Check your Firebase Console now.');
    process.exit(0);
  } catch (err) {
    console.error('❌ Failed to seed database:', err);
    process.exit(1);
  }
}

seedData();
