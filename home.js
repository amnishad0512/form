const urlParams = new URLSearchParams(window.location.search);
const refFirst = urlParams.get("first");
const refLast = urlParams.get("last");
document.querySelector("h1").innerHTML = `Welcome ${refFirst} ${refLast}`;