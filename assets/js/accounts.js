const auth = netlifyIdentity.init();

if (auth && typeof auth.on === "function") {
  auth.on("login", (user) => {
    const userName = user.user_metadata.full_name;
    document.getElementById("welcome").textContent = `Welcome, ${userName}!`;
  });
} else {
  console.error("Error: Netlify Identity widget is not loaded properly.");
}
