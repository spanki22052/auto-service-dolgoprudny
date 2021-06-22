import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDU0Sttm_NYx8GRrkpF0gRQ4-488cdQGvk',
  authDomain: 'dolgoprudny-autoservice.firebaseapp.com',
  projectId: 'dolgoprudny-autoservice',
  storageBucket: 'dolgoprudny-autoservice.appspot.com',
  messagingSenderId: '789676358308',
  appId: '1:789676358308:web:a50bed5c4f17ce894ec431',
  measurementId: 'G-KGY8ER72J4',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase.firestore();
export const firebaseAuth = firebase.auth();
