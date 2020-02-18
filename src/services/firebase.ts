import * as firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '../env'
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
export const googleProvider = new firebase.auth.GoogleAuthProvider();