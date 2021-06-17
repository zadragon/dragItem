import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCLYbpcf4teVYrrldpn9PgZaMG7XWIbF8U",
    authDomain: "dragitem.firebaseapp.com",
    projectId: "dragitem",
    storageBucket: "dragitem.appspot.com",
    messagingSenderId: "580990101585",
    appId: "1:580990101585:web:4800b3e90ecc04056e3070",
    measurementId: "G-J4HVP0NT21"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };