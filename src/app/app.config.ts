import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {getAuth, provideAuth} from "@angular/fire/auth";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";

const firebaseConfig = {
  apiKey: "AIzaSyAjWlLuuKhgpyLYhc0m6w0qULnEtzFG8VU",
  authDomain: "test-firebase-64f94.firebaseapp.com",
  projectId: "test-firebase-64f94",
  storageBucket: "test-firebase-64f94.firebasestorage.app",
  messagingSenderId: "397784378866",
  appId: "1:397784378866:web:6a3937e17f2986cbd64f6b"
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideFirebaseApp( () => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()), provideAnimationsAsync(),
  ]
};
