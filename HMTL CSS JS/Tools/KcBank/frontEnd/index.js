import { setLocally, getLocally, clearLocally, getUserDetail } from './UtilsFunction.js'
const loginForm = document.getElementById("loginForm")
// clearLocally()
let data = getLocally()
if (data) {
    console.log(data)
    getUserDetail(data.user_name, data.pass_code, (result) => {
        if (result.length !== 0 && result[0].pass_code, data.pass_code) {
            location.href = './userOptions.html';
        }
    })
}

else {
    loginForm.addEventListener('submit',
        (e) => {
            e.preventDefault();
            const data = new FormData(loginForm)
            // console.log(data.get("user_name"), data.get("pass_code"));
            let user_name = data.get("user_name"), pass_code = data.get("pass_code")
            if (pass_code.length != 6) {
                alert("Password must be 6 Numbers");
                return
            }
            pass_code = Number(data.get("pass_code"))
            if (isNaN(pass_code)) {
                alert("Password must be Numbers");
                return
            }

            let userId = Number(user_name)
            if (!isNaN(userId)) {
                user_name = userId;
            }

            console.log(user_name, pass_code)

            getUserDetail(user_name, pass_code, (result) => {
                if (result.length > 0) {
                    console.log(result);
                    setLocally(user_name, pass_code)
                    location.href = './userOptions.html';
                }
                else {
                    alert("Invalid credentials");
                    console.log("Invalid credentials");
                }
            })
        }
    )
}