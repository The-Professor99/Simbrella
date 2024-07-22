import { FirebaseOptions } from 'firebase/app';

const config: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || '',
};

Object.keys(config).forEach((key) => {
  const typedKey = key as keyof FirebaseOptions;
  const configValue = config[typedKey] + '';
  if (configValue.charAt(0) === '"') {
    config[typedKey] = configValue.substring(1, configValue.length - 1);
  }
});

export const firebaseConfig = config;
