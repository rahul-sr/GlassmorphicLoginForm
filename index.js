const eyeIcon = document.querySelector("#eyeIcon");
const password = document.querySelector("#password");

// toggle the password to reveal and secret
eyeIcon.addEventListener("click", (event) => {
  if (password.getAttribute("type") == "password") {
    eyeIcon.classList.add("reveal");
    password.setAttribute("type", "text");
  } else {
    eyeIcon.classList.remove("reveal");
    password.setAttribute("type", "password");
  }
  return false;
});
