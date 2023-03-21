    const database =[
        {
            username : "George",
            password : "pass1"
        },
        {
            username : "Amy",
            password : "pass2"
        },
        {
            username : "Luka",
            password : "pass3"
        }
    ];

const userName = document.getElementById('userName')
const userPassword = document.getElementById('userPassword')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    let errorMessage = []
    if (userName.value ==='' || userName.value === null){
        errorMessage.push('Please enter valid username or password')
        alert("Please enter valid username or password")
    }else if(userName.value === database[0].username && userPassword.value === database[0].password){
        alert("welcome George")
    }
    e.preventDefault()
})

const validUser =()=>{
    for(var i=0; i<database.length; i++){
        if(database[i].username === userName.value && database[i].password === userPassword.value){
            
        }
    }

};