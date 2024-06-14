import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyB7_Rc3Ie92Ujt-5OY5kX_ZaAeiTbwbAP4",
  authDomain: "stride-1-job-tasks.firebaseapp.com",
  projectId: "stride-1-job-tasks",
  storageBucket: "stride-1-job-tasks.appspot.com",
  messagingSenderId: "223226787002",
  appId: "1:223226787002:web:85e25bf2ee8b3fe62afe83"
};

const app = initializeApp(firebaseConfig);

export default app;
