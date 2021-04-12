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

let btnLoginClick = document.getElementById('btn-login')
// let nameText=document.getElementById('name')
// console.log(nameText);
function checkUser() {
    event.preventDefault()
    var userNameInput = document.getElementById('user-name').value
    var passWordInput = document.getElementById('pass-word').value
    var check
    for (i = 0; i < dataUsers.length; i++) {
        if(userNameInput == dataUsers[i].userName && passWordInput == dataUsers[i].passWord) {
            check = true
            dataUsers[i].isLogin = true
            
            //  console.log(dataUsers)
            break
        }
    }
    if(check == true) {
        alert(`Bạn đăng nhập thành công`)
        userNameInput.innerHTML=nameText;
        window.location.href = 'http://127.0.0.1:5501/trangchu.html'
    }
    else {
        alert(`Đăng nhập thất bại`)
    }
}

// localStorage.setItem('data',JSON.stringify(dataUsers))

// let dataUser=JSON.parse(localStorage.getItem('data'))
// console.log(dataUser);


