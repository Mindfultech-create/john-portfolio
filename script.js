function sayHello() {
    document.body.style.backgroundColor = "lightgreen";

    alert("Welcome to John's portfolio! 🎉");
}

function sendMessage(event) {
    event.preventDefault();

    document.getElementById("response").textContent =
        "Thank you! Your message has been received.";
}