
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNkzUQHwDbeK8JLu34a_UTsouDXEBiiqQ",
    authDomain: "chat-app-c45a2.firebaseapp.com",
    databaseURL: "https://chat-app-c45a2-default-rtdb.firebaseio.com",
    projectId: "chat-app-c45a2",
    storageBucket: "chat-app-c45a2.appspot.com",
    messagingSenderId: "636558614174",
    appId: "1:636558614174:web:fc182dfb5054daba58258f"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({purpose:"adding user"})
  }