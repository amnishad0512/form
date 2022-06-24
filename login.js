//======================= LOGIN =============================

document.querySelector(".email").addEventListener("focus", function (e) {
  document.querySelector(".error").style.visibility = "hidden";
});

document.querySelector(".password").addEventListener("focus", function (e) {
  document.querySelector(".error").style.visibility = "hidden";
});

const loginButton = document.querySelector(".login");
loginButton.addEventListener("click", authenticate);

const urlParams = new URLSearchParams(window.location.search);
const refEmail = urlParams.get("email");
const refPass = urlParams.get("password");
const refFirst = urlParams.get("first");
const refLast = urlParams.get("last");
document.querySelector(".email").value =  refEmail;
document.querySelector(".password").value =  refPass;
function authenticate(e) {
  e.preventDefault();
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;
  let users = JSON.parse(localStorage.getItem("users"));
  for (const user of users) {
    if (email === user.email && password === user.password) {
      location.href = `http://127.0.0.1:5500/home.html?first=${refFirst}&last=${refLast}`;
    }
  }
  document.querySelector(".error").style.visibility = "visible";
}
