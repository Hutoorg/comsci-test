document.getElementById("welcome").textContent = `Welcome, ${
  netlifyIdentity.currentUser().user_metadata.full_name
}!`;
document.getElementById("email").textContent =
  netlifyIdentity.currentUser().user_metadata.email;
