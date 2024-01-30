import { createNewAccount } from './UtilsFunction.js';
const user_details = document.querySelector("#user_details")

user_details.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(user_details)

    let formDataObject = {}
    formData.forEach(function (value, key) {
        formDataObject[key] = value;
    });

    const firstNameLength = formDataObject.first_name.length
    const PassCodeLength = String(formDataObject.pass_code).length
    const phoneNoLength = String(formDataObject.phone_no).length
    const initialBalance = formDataObject.balance

    if (firstNameLength < 4) {
        alert("first name must be equal or greater than 4 characters");
        return
    }
    if (PassCodeLength != 6) {
        alert("Password must be 6 characters");
        return
    }

    if (phoneNoLength != 10) {
        alert("Phone number must be 10 digits");
        return
    }

    if (initialBalance < 1000) {
        alert("Initial balance must be at least Rs. 1000");
        return

    }
    console.log(formDataObject)
    createNewAccount(formDataObject)
})
