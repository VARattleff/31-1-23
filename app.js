function sayHello() {
  document.querySelector("h3").textContent =
    "Hej " +
    document.querySelector("#name").value +
    " Du er " +
    document.querySelector("#age").value +
    " år gammel Din mail er: " +
    document.querySelector("#email").value;
}
document.querySelector("button").addEventListener("click", sayHello);
