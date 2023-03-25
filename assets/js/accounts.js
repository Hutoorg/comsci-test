const auth = netlifyIdentity.init();

netlifyIdentity.on("init", () => {
  // Netlify Identity widget is loaded and ready to use
});

if (auth && typeof auth.on === "function") {
  auth.on("login", (user) => {
    const userName = netlifyIdentity.currentUser().user_metadata.full_name;
    document.getElementById("welcome").textContent = `Welcome, ${userName}!`;
  });
} else {
  console.error("Error: Netlify Identity widget is not loaded properly.");
}
