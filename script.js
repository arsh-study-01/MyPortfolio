function myInfoShow() {
  let elm = document.querySelector(".myInfo-container");
  elm.classList.toggle("showInfo");
  if (elm.classList[1] == "showInfo")
    document.querySelector(".show-conatacts span.text").innerHTML =
      "Hide Contacts";
  else
    document.querySelector(".show-conatacts span.text").innerHTML =
      "Show Contacts";
}
let Nav_Btns_Box = document.querySelector("nav>ul");
console.log(Nav_Btns_Box);
Nav_Btns_Box.addEventListener("click", (e) => {
  if (e.target.localName == "button") {
    document.querySelector(".active").classList.remove("active");
    document.querySelector("main.show").classList.remove("show");
    e.target.classList.add("active");
    document.querySelector("#title").innerHTML = `${e.target.getAttribute(
      "id"
    )} <span></span>`;
    document
      .querySelector(`main#${e.target.getAttribute("id")}`)
      .classList.add("show");
    switch (e.target.getAttribute("id")) {
      case "resume":
        document.querySelector(".slider-container").classList.add("resume");
        break;

      default:
        break;
    }
  }
});
