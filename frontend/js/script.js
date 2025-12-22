const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get values from input fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      const data = await response.json();
      document.getElementById("status").innerText = data.message;

      if (response.ok) {
        form.reset();
      } else {
        console.error("Validation errors:", data.errors);
      }
    } catch (error) {
      document.getElementById("status").innerText = "Error sending message.";
      console.error(error);
    }
  });
}
