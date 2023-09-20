// create User

function run(){fetch('http://localhost:5000/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Tony',
    role: 'Developer'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))

}

run()


// Delete user

fetch('http://localhost:5000/users/65094679cfb2ecd16b42dd9b', {
  method: 'DELETE',
})
