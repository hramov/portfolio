import firebase from "firebase";


// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyASXafyyyLW7ORAhdd2k-huMTcO0wbQuck",
    authDomain: "hramovportfolio.firebaseapp.com",
    databaseURL: "https://hramovportfolio-default-rtdb.firebaseio.com",
    projectId: "hramovportfolio",
    storageBucket: "hramovportfolio.appspot.com",
    messagingSenderId: "202123634917",
    appId: "1:202123634917:web:52613105dc80d636104c0c",
    measurementId: "G-HP9ZWP6JXF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const articles = firebase.database().ref('articles')
const db = firebaseApp.firestore();
export {
    db,
    articles
}