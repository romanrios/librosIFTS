const links = document.querySelectorAll("a");
links.forEach((link) => link.setAttribute("target", "_blank"));

const loginBtn = document.getElementById("login-btn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    window.open(
      "https://aulasvirtuales.bue.edu.ar/login/index.php",
      "_blank",
      "noopener,noreferrer"
    );
  });
}