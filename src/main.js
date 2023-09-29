import App from "./app.js";

function render() {
    let page = document.querySelector(".root").getAttribute("page-name");
    document.querySelector(".root").innerHTML = App(page);
}

render();