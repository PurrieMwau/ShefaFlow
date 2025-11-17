function showAlert() {
  alert("Welcome to ShefaFlow!");
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return false;
  }
  alert("Thank you for contacting ShefaFlow!");
  return true;
}
(function(){
  emailjs.init("2gDhp_h10LQ5Yid0V"); // from API Keys
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_jqv091j", "template_kvq8kh8", this)
    .then(() => {
      alert("Message sent successfully!");
    }, (error) => {
      alert("Failed to send message: " + JSON.stringify(error));
    });
});
