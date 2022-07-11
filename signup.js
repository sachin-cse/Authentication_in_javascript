function store(){
  var username=document.getElementById("username");
  var pass=document.getElementById("pass");

  var lowerCaseLetters=/[a-z]/g;
  var upperCaseLetters=/[A-Z]/g;
  var numbers=/[0-9]/g;

  if(username.value.length==0){
    alert("please fill in username ");
  }
  else if(pass.value.length==0){
    alert("please fill in password!");
  }
  
  else if(username.value.length==0 && pass.value.length==0){
    alert("please fill in username and password");
  }
  else if(pass.value.length > 8){
    alert("Max 8 characters required");
  }
  else if(!pass.value.match(numbers)){
    alert("Add 1 number");
  }
  else if(!pass.value.match(upperCaseLetters)){
    alert("Add 1 uppercase");
  }
  else if(!pass.value.match(lowerCaseLetters)){
    alert("Add 1 lowercaseletter");
  }
  else{
    localStorage.setItem('username', username.value);
    localStorage.setItem('pass', pass.value);
    alert('Your account has been created');
  }
}

//
function check(){
  var storedName = localStorage.getItem('username');
  var storedPw = localStorage.getItem('pass');
  var userRemember = document.getElementById("rememberMe");

  var user1 = document.getElementById('user1');
  var pass2 = document.getElementById('pass2');

  if(user1.value == storedName && pass2.value == storedPw){
      alert('You are logged in.');
  }else{
      alert('Error on login');
  }
}
