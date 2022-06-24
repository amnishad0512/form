//======================= SIGN UP =============================
const signUpButton = document.querySelector(".signup");
signUpButton.addEventListener("click", saveUser);

const email = document.querySelector(".email");
email.addEventListener("change", setUserName);
function setUserName() {
  const username = document.querySelector(".username");
  let flag = email.value;
  username.value = flag.split("@")[0];
  username.setAttribute("readonly", "true");
}

function saveUser(e) {
  e.preventDefault();
  const firstName = document.querySelector(".first").value.trim();
  const lastName = document.querySelector(".last").value.trim();
  const email = document.querySelector(".email").value.trim();
  const username = document.querySelector(".username").value;
  const password = document.querySelector(".password").value.trim();

  let errorContainer = document.querySelector(".error");

  document.querySelector(".first").addEventListener("focus", function (e) {
    document.querySelector(".error").style.visibility = "hidden";
  });
  document.querySelector(".last").addEventListener("focus", function (e) {
    document.querySelector(".error").style.visibility = "hidden";
  });
  document.querySelector(".email").addEventListener("focus", function (e) {
    document.querySelector(".error").style.visibility = "hidden";
  });
  document.querySelector(".username").addEventListener("focus", function (e) {
    document.querySelector(".error").style.visibility = "hidden";
  });
  document.querySelector(".password").addEventListener("focus", function (e) {
    document.querySelector(".error").style.visibility = "hidden";
  });

  if (firstName.length === 0) {
    errorContainer.innerHTML = `&#9888; first name is required`;
    errorContainer.style.visibility = "visible";
    return;
  } else if (!firstName.match(/^[A-Za-z]+$/)) {
    errorContainer.innerHTML = `&#9888; Only alphabets are allowed`;
    errorContainer.style.visibility = "visible";
    return;
  } else if (lastName.length === 0) {
    errorContainer.innerHTML = `&#9888; last name is required`;
    errorContainer.style.visibility = "visible";
    return;
  } else if (!lastName.match(/^[A-Za-z]+$/)) {
    errorContainer.innerHTML = `&#9888; Only alphabets are allowed`;
    errorContainer.style.visibility = "visible";
    return;
  } else if (!email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) {
    errorContainer.innerHTML = `&#9888; Please use a valid email address`;
    errorContainer.style.visibility = "visible";
    return;
  } else if (password.length <= 7) {
    errorContainer.innerHTML = `&#9888; Password must be at least 8 characters`;
    errorContainer.style.visibility = "visible";
    return;
  }

  const userData = { firstName, lastName, email, username, password };

  let users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    for (const user of users) {
      if (email === user.email) {
        errorContainer.innerHTML = `&#9888; An account with email ${email} already exists`;
        errorContainer.style.visibility = "visible";
        return;
      }
    }
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    location.href = `http://127.0.0.1:5500/login.html?email=${email}&password=${password}&first=${firstName}&last=${lastName}`;
  } else {
    let arr = [];
    arr.push(userData);
    localStorage.setItem("users", JSON.stringify(arr));
    location.href = `http://127.0.0.1:5500/login.html?email=${email}&password=${password}&first=${firstName}&last=${lastName}`;
  }
}
