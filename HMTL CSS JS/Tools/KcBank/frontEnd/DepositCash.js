import { depositBalance, getLocally, checkLoginDetail } from "./UtilsFunction.js"
checkLoginDetail()


let depositFormNode = document.querySelector("#deposit-form");
let depositDetailNode = document.querySelector("#deposit-details")

let data = getLocally()




depositFormNode.addEventListener("submit", (e) => {
    e.preventDefault();
    const balance = Number(depositFormNode.querySelector("#balance").value)
    if (isNaN(balance)) {
        alert("Enter valid amount");
        return;
    }
    else {

        depositBalance(data.user_name, data.pass_code, balance, (result) => {
            console.log(result);
            depositDetailNode.innerHTML =
                `
            <p>Deposited ${result.depositingBalance}</p>
            <p>Balance ${result.totalBalance}</p>
            `
        })
    }
})




