// Load user data from JSON file
fetch("../../users.json")
  .then((response) => response.json())
  .then((data) => {
    const users = data.users;

    // Event listener for login form submission
    document
      .querySelector(".login")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Check if the username and password match a user in the JSON data
        const user = users.find(
          (user) => user.email === email && user.password === password
        );

        if (user) {
          alert("You can now proceed to the dashboard!");
          //   window.location.href = "dashboard.html";
          window.location.href =
            "dashboard.html?email=" + encodeURIComponent(email);
        } else {
          alert("Welcome to your dashboard");
        }
      });

    // Event listener for logout button click
    // document.getElementById("logoutBtn").addEventListener("click", function () {
    //   document.getElementById("username").value = "";
    //   document.getElementById("password").value = "";
    //   document.getElementById("loginForm").style.display = "block";
    //   document.getElementById("logoutDiv").style.display = "none";
    // });
  });
