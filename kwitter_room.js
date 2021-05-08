var firebaseConfig = {
      apiKey: "AIzaSyC7CtIIo2oI-S4PWMAI3zIepY7lqQKrsJQ",
      authDomain: "medichat-49c49.firebaseapp.com",
      databaseURL: "https://medichat-49c49-default-rtdb.firebaseio.com",
      projectId: "medichat-49c49",
      storageBucket: "medichat-49c49.appspot.com",
      messagingSenderId: "905003616452",
      appId: "1:905003616452:web:8a8de0a05af5020adbe191",
      measurementId: "G-J8205T3JBD"
    };
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
