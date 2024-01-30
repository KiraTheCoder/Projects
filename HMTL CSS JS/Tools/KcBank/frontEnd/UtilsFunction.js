const loaderContainer = document.querySelector(".loader-container")

function loader() {
    loaderContainer.style.display = "flex"
}
function unLoader() {
    loaderContainer.style.display = "none"
}


function setLocally(user_name, pass_code) {
    const details = {
        user_name: user_name,
        pass_code: pass_code,
    }

    localStorage.setItem("accountDetails", JSON.stringify(details));
    console.log("setLocally");
}

function getLocally() {
    let accountDetails = JSON.parse(localStorage.getItem("accountDetails"));
    return accountDetails;
}

function clearLocally() {
    localStorage.removeItem("accountDetails");
}

function checkLoginDetail() {
    if (!getLocally()) {
        window.location.href = "./index.html"
    }

}

// Logout


// createAccount.html
async function createNewAccount(formDataObject) {
    loader()
    try {
        const response = await fetch('http://localhost:3000/addCustomer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataObject)
        })
        console.log('Success:', response.status);
        unLoader()
        location.href = `./showsAccountDetails.html?email=${formDataObject.email}&pass_code=${formDataObject.pass_code}`;
    }
    catch (error) {
        unLoader()
        alert("Something Went Wrong...")
        console.error('Error:', error);
    }
}

// createNewAccount()

// =======================================

async function getDetails() {
    loader()

    try {
        const response = await fetch('http://localhost:3000/AccountDetails');
        const data = await response.json();
        console.log(data);
        unLoader()
    }
    catch (error) {
        unLoader()
        console.log(error);
    }
}
// getDetails()






async function getUserDetail(user_name = null, pass_code = null, callback) {
    loader()

    try {
        const response = await fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_name: user_name,
                pass_code: pass_code
            })
        })
        console.log(response.status);
        const result = await response.json()
        unLoader()

        // console.log(result);
        callback(result)
    }
    catch (error) {
        unLoader()
        alert("Something Went Wrong...")
        console.error('Error:', error);
    }
}


// getUserDetail(customer_id, account_no, pass_code)



async function checkBalance(user_name = null, pass_code = null, callback) {
    loader()
    try {
        const response = await fetch('http://localhost:3000/balance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_name: user_name,
                pass_code: pass_code
            })
        })
        console.log(response.status);
        const result = await response.json()
        console.log(result);
        unLoader()

        callback(result)
    }
    catch (error) {
        unLoader()
        alert("Something Went Wrong...")
        console.error('Error:', error);
    }
}


// checkBalance(customer_id, account_no, pass_code)




async function depositBalance(user_name = null, pass_code = null, balance = 0, callback) {
    loader()

    try {
        const response = await fetch('http://localhost:3000/deposit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_name: user_name,
                pass_code: pass_code,
                balance: balance
            })
        })
        console.log(response.status);
        const result = await response.json()
        console.log(result);
        unLoader()

        callback(result)
    }
    catch (error) {
        unLoader()
        alert("Something Went Wrong...")
        console.error('Error:', error);
    }
}


// depositBalance(customer_id, account_no, pass_code, 3000)



async function withdrawBalance(user_name = null, pass_code = null, balance = 0, callback) {
    loader()
    try {
        const response = await fetch('http://localhost:3000/withdraw', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_name: user_name,
                pass_code: pass_code,
                balance: balance
            })
        })
        console.log(response.status);
        const result = await response.json()
        unLoader()

        console.log(result);
        callback(result)
    }
    catch (error) {
        unLoader()

        alert("Something Went Wrong...")
        console.error('Error:', error);
    }
}


// depositBalance(customer_id, account_no, pass_code, 500)


export { createNewAccount, getDetails, getUserDetail, checkBalance, depositBalance, withdrawBalance, setLocally, getLocally, clearLocally, checkLoginDetail }