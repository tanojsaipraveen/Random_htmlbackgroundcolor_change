firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        alert("HI");
      document.getElementById("user_login").style.display="block";
      document.getElementById("login_div").style.display="none";
    } else {
      alert("Hello");
      document.getElementById("user_login").style.display="none";
      document.getElementById("login_div").style.display="block";
    }
  });

function login(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    alert("ggg");
    firebase.auth().signInWithEmailAndPassword(user, pass).catch(function(error) {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       window.alert(errorMessage);
   
});  
}