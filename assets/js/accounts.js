const userMeta = netlifyIdentity.currentUser().user_metadata;
document.getElementById(
  "welcome"
).textContent = `Welcome, ${userMeta.full_name}!`;
document.getElementById("email").textContent = userMeta.email;
