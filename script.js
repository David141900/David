document.addEventListener("DOMContentLoaded", function() {
    const button = document.createElement("button");
    button.textContent = "Klikněte na mě";
    document.body.appendChild(button);

    button.addEventListener("click", function() {
        alert("Ahoj, světe!");
    });
});
</body><script src="script.js"></script>
