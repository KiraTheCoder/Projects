import express from "express";
import cors from 'cors'
import sql from './PsqlConnector.js';


const port = 3000;
const app = express();
app.use(cors())
app.use(express.json())

app.post('/addCustomer', (req, res) => {
    async function getResult() {
        let data = req.body
        console.log(data)
        const response2 = await sql`Insert INTO 
        customers(
         
            pass_code,
            first_name,
            last_name,
            email,
            phone_no,
            address,
            account_type,
            balance)
        VALUES
         (
          
            ${data.pass_code},
            ${data.first_name},
            ${data.last_name},
            ${data.email},
            ${data.phone_no},
            ${data.address},
            ${data.account_type},
            ${data.balance})`;
        console.log(response2);
        res.status(201).send('Customer Added Successfully');
    }
    getResult()

})




app.get('/AccountDetails', (req, res) => {
    async function getResult() {
        const response = await sql`SELECT * from customers `;
        console.log(response);
        res.status(200).send(JSON.stringify(response));
    }
    getResult()
})



app.post('/user', (req, res) => {
    async function getResult() {
        let { user_name, pass_code } = req.body;
        if (user_name == null || pass_code == null) {
            res.status(400).send('user name and password not matched');
            return;
        }

        const response = await sql` select * from customers where (email = ${user_name} OR phone_no = ${(typeof (user_name) == "number") ? user_name : 123} OR customer_id = ${(typeof (user_name) == "number") ? user_name : 123} OR account_no = ${typeof (user_name) == "number" ? user_name : 123}) AND pass_code = ${pass_code}`
        console.log(response);
        res.status(200).send(JSON.stringify(response));
    }
    getResult()
})

app.post('/balance', (req, res) => {
    async function getResult() {

        let { user_name, pass_code } = req.body;
        if (user_name == null || pass_code == null) {
            res.status(400).send('user name and password not matched');
            return;
        }

        const response = await sql` select balance from customers where (email = ${user_name} OR phone_no = ${(typeof (user_name) == "number") ? user_name : 123} OR customer_id = ${(typeof (user_name) == "number") ? user_name : 123} OR account_no = ${typeof (user_name) == "number" ? user_name : 123}) AND pass_code = ${pass_code}`
        console.log(response);
        res.status(200).send(JSON.stringify(response));
    }
    getResult()
})

app.post('/deposit', (req, res) => {
    async function getResult() {

        let { user_name, pass_code, balance } = req.body;
        if (user_name == null || pass_code == null) {
            res.status(400).send('user name and password not matched');
            return;
        }

        const response = await sql` select balance from customers where (email = ${user_name} OR phone_no = ${(typeof (user_name) == "number") ? user_name : 123} OR customer_id = ${(typeof (user_name) == "number") ? user_name : 123} OR account_no = ${typeof (user_name) == "number" ? user_name : 123}) AND pass_code = ${pass_code}`

        if (balance < 500) {
            res.status(400).send('Deposit balance must be greater than 499');
            return;
        }
        console.log(response)
        let newBalance = Number(response[0].balance) + balance
        console.log(newBalance)


        const response1 = await sql`UPDATE  customers  SET balance = ${newBalance} where (email = ${user_name} OR phone_no = ${(typeof (user_name) == "number") ? user_name : 123} OR customer_id = ${(typeof (user_name) == "number") ? user_name : 123} OR account_no = ${typeof (user_name) == "number" ? user_name : 123}) AND pass_code = ${pass_code}`
        console.log(response1);
        res.status(201).send(JSON.stringify({
            depositingBalance: balance,
            totalBalance: newBalance
        }));
    }
    getResult()
})

app.post('/withdraw', (req, res) => {
    async function getResult() {

        let { user_name, pass_code, balance } = req.body;
        if (user_name == null || pass_code == null) {
            res.status(400).send('user name and password not matched');
            return;
        }

        const response = await sql` select balance from customers where (email = ${user_name} OR phone_no = ${(typeof (user_name) == "number") ? user_name : 123} OR customer_id = ${(typeof (user_name) == "number") ? user_name : 123} OR account_no = ${typeof (user_name) == "number" ? user_name : 123}) AND pass_code = ${pass_code}`


        if (Number(response[0].balance) < balance) {
            res.status(400).send('Insufficient Balance');
            return
        }
        if (balance < 500) {
            res.status(400).send('Deposit balance must be greater than 499');
            return;
        }


        let newBalance = Number(response[0].balance) - balance

        await sql`UPDATE  customers  SET balance = ${newBalance} where (email = ${user_name} OR phone_no = ${(typeof (user_name) == "number") ? user_name : 123} OR customer_id = ${(typeof (user_name) == "number") ? user_name : 123} OR account_no = ${typeof (user_name) == "number" ? user_name : 123}) AND pass_code = ${pass_code}`
        res.status(201).send(JSON.stringify({
            withdrawingBalance: balance,
            remainingBalance: newBalance
        }));
    }
    getResult()
})
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
