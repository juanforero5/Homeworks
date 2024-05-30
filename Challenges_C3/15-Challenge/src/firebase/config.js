import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyCGQ0tYppWFJkuSxBhOpkH0xVDmX245Vdc",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "637908496727",
  appId: "2:637908496727:web:a4284b4c99e329d5",
  measurementId: "G-9VP01NDSXJ"
};

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const firebaseStorage = getStorage(firebaseApp);


export {auth,firebaseApp,firebaseStorage }