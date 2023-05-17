document.getElementsById("submit-btn").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
  
    // Perform validation (if required)
  
    // Create the response message
    const responseMessage = "Thank you, " + name + "! Your message has been received.";

     // Display the response message
  const responseElement = document.getElementById("response");
  responseElement.innerText = responseMessage;

  // Clear the form inputs
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
});