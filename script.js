var code = document.getElementById("code");
var code2 = document.getElementById("code2");
var btn = document.getElementById("btn");
var btn2 = document.getElementById("btn2");
var result = document.getElementById("result");
var result2 = document.getElementById("result2");

btn.onclick = () => {
    result.innerHTML = btoa(code.value);
}

btn2.onclick = () => {
    result2.innerHTML = atob(code2.value);
}