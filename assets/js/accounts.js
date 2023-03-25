const userMeta = netlifyIdentity.currentUser().user_metadata;
document.getElementById("welcome").textContent = `Welcome, ${user.full_name}!`;
document.getElementById("email").textContent = user.email;
