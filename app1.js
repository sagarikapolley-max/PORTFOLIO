function toggleMode() {
    document.body.classList.toggle("dark");
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let error = document.getElementById("error");

    if (name === "" || email === "") {
        error.innerText = "Please fill all fields!";
        error.style.color = "red";
        return false;
    }

    alert("Message sent successfully!");
    return true;
}
