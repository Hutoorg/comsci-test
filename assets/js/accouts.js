const user = netlifyIdentity.currentUser.user_metadata
document.getElementById("name").innerHTML = user.full_name;
