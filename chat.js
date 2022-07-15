var firebaseConfig = {
    apiKey: "AIzaSyB1SozrK817KXHmTU3mgMnzt5zKuayGYKE",
    authDomain: "project-6309474482452637135.firebaseapp.com",
    databaseURL: "https://project-6309474482452637135-default-rtdb.firebaseio.com",
    projectId: "project-6309474482452637135",
    storageBucket: "project-6309474482452637135.appspot.com",
    messagingSenderId: "822195499070",
    appId: "1:822195499070:web:8ac11f1c92a64ec47f616f"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   
}

function addUser() {

    user_name = document.getElementById("user_name").ariaValueMax;

    localStorage.setItem("user_name" , user_name);

    window.location = "chat_room.html";
}

