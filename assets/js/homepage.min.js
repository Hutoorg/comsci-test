while (document.documentElement.clientWidth <= 800) {
    setInterval(() => {
        if (document.documentElement.clientWidth < 800) {document.getElementById("errgooglecal").innerHTML = "Your device is too small for Google Calendar embed.";}

    }, 10000);
}