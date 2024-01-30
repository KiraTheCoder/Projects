import { withdrawBalance, getLocally, checkLoginDetail } from "./UtilsFunction.js"
checkLoginDetail()


let withdrawFormNode = document.querySelector("#withdraw-form");
let withdrawDetailNode = document.querySelector("#withdraw-details")
let data = getLocally()



withdrawFormNode.addEventListener("submit", (e) => {
    e.preventDefault();
    const balance = Number(withdrawFormNode.querySelector("#balance").value)
    if (isNaN(balance)) {
        alert("Enter valid amount");
        return;
    }
    else {
        if (balance < 500) {
            alert("Minimum withdrawal amount should be Rs. 500");
            return
        }

        withdrawBalance(data.user_name, data.pass_code, balance, (result) => {
            console.log(result);
            withdrawDetailNode.innerHTML =
                `
            <p>Withdrawn ${result.withdrawingBalance}</p>
            <p>Balance ${result.remainingBalance}</p>
            `
        })
    }
})




