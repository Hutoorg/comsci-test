const authinit = netlifyIdentity.init();

netlifyIdentity.on("init", () => {
  // Netlify Identity widget is loaded and ready to use
});

if (authinit && typeof authinit.on === "function") {
  authinit.on("login", (user) => {
    const userName = user.user_metadata.full_name;
    document.getElementById("welcome").textContent = `Welcome, ${userName}!`;
  });
} else {
  console.error("Error: Netlify Identity widget is not loaded properly.");
}
