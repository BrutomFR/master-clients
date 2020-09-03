import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Observable } from "rxjs";
import { IClient } from "src/Core/Interfaces/IClient";
// INITIALIZE
export default firebase.initializeApp({
  apiKey: "AIzaSyALcqqu9aCOXsV5JfA_laL5xQjUp3j3rTI",
  authDomain: "master-clients.firebaseapp.com",
  databaseURL: "https://master-clients.firebaseio.com",
  projectId: "master-clients",
  storageBucket: "master-clients.appspot.com",
  messagingSenderId: "844618249232",
  appId: "1:844618249232:web:9efbd858b033224475c695",
  measurementId: "G-DXM1DW8BG3",
});

export const db = firebase.firestore();

export function GetClient() {
  return new Observable((sub) => {
    db.collection("clients").onSnapshot((o) => {
      sub.next(
        o.docs.map((d) => {
          return {
            ...d.data(),
            id: d.id,
          };
        })
      );
    });
  });
}
export function UpdateClient(client: IClient) {
  return db.collection("clients").doc(client.id).update(client);
}

export function UpdateClients(clients: IClient[]) {
  const batch: firebase.firestore.WriteBatch = db.batch();
  clients.forEach((doc) => {
    const docRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData> = db
      .collection("clients")
      .doc(); //automatically generate unique id
    batch.set(docRef, doc);
  });
  return batch.commit();
}
