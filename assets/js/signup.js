var signupForm = document.getElementById('signup');
signupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('full-name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  netlifyIdentity.signup(email, password, {
    name: name
  }, function(err) {
    if (err) {
      console.error('Error signing up:', err);
      document.getElementById('signuperr').innerHTML = "Error signing up: " + err
    } else {
      console.log('Signed up successfully');
      netlifyIdentity.login(email, password, function(err) {
        if (err) {
          console.error('Error logging in:', err);
          document.getElementById('signuperr').innerHTML = "Error logging in: " + err
        } else {
          console.log('Logged in successfully');
          window.location.href = '/user.html';
        }
      });
    }
  });
});