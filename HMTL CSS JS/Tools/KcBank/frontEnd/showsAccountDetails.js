import { getUserDetail, getLocally } from './UtilsFunction.js';

const accountDetailsNode = document.querySelector(".box")



// take params from url
const queryString = window.location.search;
// Create a object  from  params
const params = new URLSearchParams(queryString);
let user_name, pass_code;

if (params.size != 0) {
    user_name = params.get("email")
    pass_code = params.get("pass_code")
}
else {
    let data = getLocally()
    user_name = data.user_name;
    pass_code = data.pass_code;
}

getUserDetail(user_name, pass_code, (result) => {
    console.log(result[0]);
    const details = result[0]

    accountDetailsNode.innerHTML = `
<div id="account-details">
     <center>
         <H4>Account Details</H4>
     </center>
     <p>Name :    ${details.first_name + " " + details?.last_name}  </p>
     <p>Customer Id :  ${details.customer_id} </p>
     <p>Account No :   ${details.account_no} </p>
     <p>Branch :    Faridabad</p>
     <p>Email :   ${details.email}  </p>
     <p>Phone :  ${details.phone_no}  </p>

</div>
    `
})
