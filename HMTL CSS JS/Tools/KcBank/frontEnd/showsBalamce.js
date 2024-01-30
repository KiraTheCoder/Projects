import { checkBalance, getLocally, checkLoginDetail } from "./UtilsFunction.js"
checkLoginDetail()


const balanceDetailNode = document.querySelector("#balance_details")
let data = getLocally()



checkBalance(data.user_name, data.pass_code, (result) => {
    console.log(result[0]);
    balanceDetailNode.innerHTML =
        `
    <p>Account balance : ${result[0].balance} </p>
    `

})