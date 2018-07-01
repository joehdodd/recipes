import * as firebase from 'firebase';
import 'firebase/firestore';
firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  projectId: ''
});
const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);
export default db;
