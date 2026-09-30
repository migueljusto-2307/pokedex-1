import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js"
import { auth } from "./firebase.js";

console.log("Firebase inicializado");
console.log(auth);;

onAuthStateChanged(auth, (user) => {
    if (!user){
        window.location.href = "../login/index.html";
        return;
    }
})
document
    .getElementById("logout")
    .addEventListener("click", async () => {
        await signOut(auth);
        window.location.href = "../login/index.html"
    })