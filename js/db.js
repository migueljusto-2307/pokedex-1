import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
import { db } from "./firebase.js";

async function quickstartListen(db) {
    const snapshot = await getDocs(collection(db, 'users'));
    snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
    });

}
quickstartListen(db)