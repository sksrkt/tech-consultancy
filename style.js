document.getElementById("lead-form").addEventListener("submit", function(e) {
    var name = document.querySelector("input[name='name']").value;
    var email = document.querySelector("input[name='email']").value;
    var phone = document.querySelector("input[name='phone']").value;
    var message = document.querySelector("textarea[name='message']").value;

    if (!name || !email || !phone || !message) {
        e.preventDefault(); // Prevent form submission
        alert("All fields are required.");
    }
});
