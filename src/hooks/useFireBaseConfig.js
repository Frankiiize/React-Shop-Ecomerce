import { initializeApp } from "firebase/app";


const useFireBaseConfig = () => {

    // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDeobB1f2qUNySlHqC7cXJ2Cs7d5ABLhpo",
    authDomain: "react-shop-ecomerce.firebaseapp.com",
    projectId: "react-shop-ecomerce",
    storageBucket: "react-shop-ecomerce.appspot.com",
    messagingSenderId: "110140620777",
    appId: "1:110140620777:web:9b70c9ea681fab7f69d578"
  };

  // Initialize Firebase
  const FireApp = initializeApp(firebaseConfig);
  return {
    FireApp
  }

}

export { useFireBaseConfig };