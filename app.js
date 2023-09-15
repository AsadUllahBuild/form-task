// const user ={
//     name: 'Asad Ullah',
//     age: '27',
//     loggedIn: 
// }



// const car = {
//     name: 'Civic',
//     brand: 'Honda',
//     model: '2021',
//     color: 'white',
//     accesories:['frontBumper', 'mirror'] 
// }

// console.log(car);
// Object.freeze 


// const gymmember={
//     gymName: 'gym Plus',
//     fees: '4000',
//     userDiscount20: 20,
//     userDiscount40: 40,

//     user: function(members){
//         let userDiscount;
//         this.fees = this.fees - (this.fees*this.userDiscount20)


//     user: function () {
//       if (this.userDiscount=>2) {

//       }  
//     }
// }

const email = document.querySelector(".email");
const password = document.querySelector(".password");
const result = document.querySelector(".result");


const arr = [];


function showVal(e) {
    e.preventDefault();
    result.innerHTML = "";

    // console.log(email.value);
    // console.log(password.value);
    const user = {
        email: email.value,
        password: password.value,
    };
    arr.push(user);

    // console.log(arr);
    email.value = "";
    password.value = "";

    for (let i = 0; i < arr.length; i++) {
        result.innerHTML += `
        <p>email:${arr[i].email}</p>
        <p>password:${arr[i].password}</p>
        <button onclick="remove(${i})">Delete</button>
        <button onclick="edit(${i})">Edit</button>`
    }

}





function remove(i) {
    result.innerHTML = ""

    arr.splice(i, 1)
    for (let i = 0; i < arr.length; i++) {
        result.innerHTML += `
        <p>email:${arr[i].email}</p>
        <p>password:${arr[i].password}</p>
        <button onclick="remove(${i})">Delete</button>
        <button onclick="edit(${i})">Edit</button>`
    }
}

function edit(i) {
    result.innerHTML=""

    const changeEmail = prompt("check your email" , arr[i].email)
    const changePassword = prompt("check your Password" , arr[i].password)
    arr[i].email=changeEmail;
    arr[i].password=changePassword;

    for (let i = 0; i < arr.length; i++) {
        result.innerHTML += `
        <p>email:${arr[i].email}</p>
        <p>password:${arr[i].password}</p>
        <button onclick="remove(${i})">Delete</button>
        <button onclick="edit(${i})">Edit</button>`
    }

}




// const email = document.querySelector(".email");
// const password = document.querySelector(".password");
// const result = document.querySelector(".result");

// const arr = [];

// function showVel(e) {
//     e.preventDefault();
//     result.innerHTML = "";

//     // console.log(email.value);
//     // console.log(password.value);

//     const user = {
//         email: email.value,
//         password: password.value,
//     }
//     arr.push(user)
//     // console.log(arr);

//     email.value = "";
//     password.value = "";

//     for (let i = 0; i < arr.length; i++) {
//         result.innerHTML += `<p>email: ${arr[i].email}</p>
//     <p>password: ${arr[i].password}</p>
//     <button onclick"remove(${i})">Delete</button>
//     <button onclick"edit(${i})">Edit</button>`

//     }
// }

// function remove(i) {
//     result.innerHTML = ""
//     arr.splice(i, 1)
//     for (let i = 0; i < arr.length; i++) {
//         result.innerHTML += `<p>email: ${arr[i].email}</p>
//         <p>password: ${arr[i].password}</p>
//         <button onclick="remove(${i})">Delete</button>
//         <button onclick="edit(${i})">Edit</button>`

//     }

// }


// function edit(i) {
//     result.innerHTML=""

//     const changeEmail= prompt("check your email" , arr[i].email);
//     const changePassword= prompt("check your password" , arr[i].password);

//     for (let i = 0; i < arr.length; i++) {
//         result.innerHTML += `<p>email: ${arr[i].email}</p>
//         <p>password: ${arr[i].password}</p>
//         <button onclick="remove(${i})">Delete</button>
//         <button onclick="edit(${i})">Edit</button>
        
//         `



//     }
    
// }







