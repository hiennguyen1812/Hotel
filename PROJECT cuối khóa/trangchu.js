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


//Login Logout
let newData = JSON.parse(localStorage.getItem('user'))
var nameId = document.getElementById('nameId')
var clearLocal = document.getElementById('clear-local')
renderUser()
//login
function renderUser() {
    if (newData) {
        nameId.innerHTML = `<a href="login/login.html" class="sm-link"><i class="fas fa-user-circle"></i></a>
        <h5 class="userName" id="nameId">${newData.userName}</h5>`
    }
}
//logout
clearLocal.addEventListener('click', clear)

function clear() {
    location.href = 'trangchu.html'
    localStorage.clear()
}


// SEARCH FILTER

// let checkIn=document.getElementById("check-in")
// checkIn.addEventListener('change',() => {
//     console.dir(checkIn)
// })

function filtersearch(){
    event.preventDefault()
    let inputName =document.getElementById('destination');
    let filter=inputName.value.toUpperCase();
    let dataNeeded = []
    for(let item of dataHotel){
        let nameKS=item.tenKS.toUpperCase();
            if(filter==nameKS){
            dataNeeded.push(item)
        }
    }
    localStorage.setItem('KS',JSON.stringify(dataNeeded))
    location.href='filterbook.html'
}

let searchButton=document.getElementById('search')
searchButton.addEventListener('click',filtersearch);


