  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDEsnk20HnsvUsZWJcxm91FbCaMCVwpR18",
    authDomain: "checkpoint-gmc-7c68e.firebaseapp.com",
    databaseURL: "https://checkpoint-gmc-7c68e.firebaseio.com",
    projectId: "checkpoint-gmc-7c68e",
    storageBucket: "checkpoint-gmc-7c68e.appspot.com",
    messagingSenderId: "934976227969",
    appId: "1:934976227969:web:ea0288cce442e3c9599b80",
    measurementId: "G-DVCH6071WR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
var messagesRef =firebase.database().ref('mydatabase');
function submitForm(e){
  e.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var number = document.getElementById('number').value;
  var track = document.getElementById('track').value;
  console.log(name);
  console.log(email);
  console.log(number);
  console.log(track);
  saveMessage(name, email, number, track);
}
document.getElementById('contactForm').addEventListener('submit', submitForm)
function saveMessage(name,email,number,track){
  var newMessageRef = messagesRef.push();
    newMessageRef.set({
    name: name,
    email: email,
    number: number,
    track: track
  })
}