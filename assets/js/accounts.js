setTimeout(() => {
  const auth = netlifyIdentity.init();
  auth.on("login", (user) => {
    const userName = user.user_metadata.full_name;
    document.getElementById("welcome").textContent = `Welcome, ${userName}!`;
  });
}, 1000);
