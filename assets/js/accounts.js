const user = netlifyIdentity.currentUser.user_metadata;
document.getElementById("welcome").innerHTML = `Welcome, ${user.full_name}`;
