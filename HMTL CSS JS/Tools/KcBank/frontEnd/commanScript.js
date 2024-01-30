import { clearLocally } from "./UtilsFunction.js"
const logoutNode = document.querySelector('#logout')
logoutNode.addEventListener("click", () => {
    clearLocally()
    window.location.href = "./index.html"
})