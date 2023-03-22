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

const userName = document.getElementById('userName').value
const userPassword = document.getElementById('userPassword').value
const form = document.getElementById('form')

function isUserValid(userName,userPassword){
    for(var i=0; i < database.length; i++){
        if(database[i].username === userName &&
             database[i].password === userPassword) {
            return true;
        }
    }
    return false;
};

form.addEventListener('submit', (e) => {
    if(isUserValid(userName,userPassword)){
        alert("welcome")
    }else{alert("wrong username or password")}
    e.preventDefault()
})