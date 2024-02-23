function passwordValidator(password) {
    // Check the length of the password
    if (password.length < 6 || password.length > 10) {
      console.log("Password must be between 6 and 10 characters");
    }
    // Check if the password contains only letters and digits
    var lettersAndDigits = /^[A-Za-z0-9]+$/;
    if (!password.match(lettersAndDigits)) {
      console.log("Password must consist only of letters and digits");
    }
    // Check if the password contains at least 2 digits
    var digitCount = 0;
    for (var i = 0; i < password.length; i++) {
      if (password[i] >= "0" && password[i] <= "9") {
        digitCount++;
      }
    }
    if (digitCount < 2) {
      console.log("Password must have at least 2 digits");
    }
    // If all the conditions are met, print "Password is valid"
    if (password.length >= 6 && password.length <= 10 && password.match(lettersAndDigits) && digitCount >= 2) {
      console.log("Password is valid");
    }
  }
  
  // Test the function with some examples
  passwordValidator("logIn"); // Password must be between 6 and 10 characters
                              // Password must have at least 2 digits
  passwordValidator("MyPass123"); // Password is valid
  passwordValidator("Pa$s$s"); // Password must consist only of letters and digits
                               // Password must have at least 2 digits
  