// Selectors
let header=document.querySelector('.header')
let hamburgerMenu=document.querySelector('.hamburger-menu')


window.addEventListener('scroll',function(){
    let windowPosition=window.scrollY>0
    header.classList.toggle('active',windowPosition)
})

hamburgerMenu.addEventListener('click',function(){
    header.classList.toggle('menu-open')
})

let nameId = document.getElementById('name')
console.log(dataUsers)

for(data of dataUsers) {
    if(data.isLogin == true) {
        nameId.innerHTML = data.userName
    }
}

let nameText=document.getElementById('name')