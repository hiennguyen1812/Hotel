// var username=document.forms['form']['username'];
// var password=document.forms['form']['password'];

// var userError=document.getElementById('user-error');
// var passError=document.getElementById('pass-error');

// function validated() {
//     if(username.value.lenght < 9){
//         username.style.border ="1px solid red";
//         username.focus();
//         return false;
//     }
// }

let obj=[
    {
        username:"sam",
        password:"1234"
    }
]

let usernameInput=document.getElementById('username');
let passwordInput=document.getElementById('password');
let submitBtn=document.getElementById('submit');
function getInfor() {
    for(item of obj){
        if(usernameInput.value==item.username){
            alert('true');
        }
    }
}
submitBtn.addEventListener('click',getInfor());
