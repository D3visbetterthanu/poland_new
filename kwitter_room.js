
 var firebaseConfig = {
      apiKey: "AIzaSyC455f4ZKeud8Rk-maPlk692_7syvTgZn0",
      authDomain: "kwitterrrr-b8e27.firebaseapp.com",
      databaseURL: "https://kwitterrrr-b8e27-default-rtdb.firebaseio.com",
      projectId: "kwitterrrr-b8e27",
      storageBucket: "kwitterrrr-b8e27.appspot.com",
      messagingSenderId: "303908782239",
      appId: "1:303908782239:web:52ca8f27c76f9a814f22aa",
      measurementId: "G-P7H5B40PJW"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      });});}
getData();
