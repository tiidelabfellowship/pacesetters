//here i passed all parameters i need into variables

const username = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
let responseMessage = document.getElementById("response");

document.getElementById("submit-btn").addEventListener("click", function (event){
  event.preventDefault(); //prevent form submission
  if (username.value && email.value && message.value) {
    swal(
      "Message received!" + " " + username.value, "We'll get back to you via your email address!", "success");
   
    //responseMessage.innerHTML = "<span> Thank you," + username.value + "! Your message has been received. </span>";

    username.value = "";
    email.value ="";
    message.value ="";

    //display the response message
    //responseMessage.style.color = "green";
  } else {
    swal(
      "All input must be filled Please!"," ", "error");
      
    //responseMessage.innerHTML = "<span> All input must be filled Please!</span>";
    //responseMessage.style.color = "red";
  }
});