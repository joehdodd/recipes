import * as firebase from 'firebase';
import 'firebase/firestore';
import * as constants from './constants';

firebase.initializeApp({
  apiKey: constants.FBK,
  authDomain: constants.FBD,
  projectId: constants.FBID
});
const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);
export default db;
