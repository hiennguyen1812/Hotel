// Selectors
let header=document.querySelector('.header')
let hamburgerMenu=document.querySelector('.hamburger-menu')
let grid = document.getElementById('grid')
grid.innerHTML = ''
for(let i = 0; i < 7; i+=3) {
    let ele = `
    <div class="grid-item featured-hotels" data-aos="fade-right" data-aos-duration="2000">
        <img src="${dataHotel[i].image}" alt="" class="hotel-image">
        <h5 class="hotel-name">${dataHotel[i].tenKS}</h5>
        <span class="hotel-price">From ${dataHotel[i].giaThue}/Night</span>
        <div class="hotel-rating">
            <i class="fas fa-star rating"></i>
            <i class="fas fa-star rating"></i>
            <i class="fas fa-star rating"></i>
            <i class="fas fa-star rating"></i>
            <i class="fas fa-star-half rating"></i>
        </div>
        <a id="${dataHotel[i].idKS}" href="booking.html" class="btn bookBtn btn-gradient">Book now
            <span class="dots"><i class="fas fa-ellipsis-h"></i></span>
        </a>
    </div>`
    grid.innerHTML += ele
}


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



//
let bookBtn=document.getElementsByClassName('bookBtn')

for(let btn of bookBtn){
    btn.addEventListener('click',() => {
        event.preventDefault()
        for(let item of dataHotel){
            if(item.idKS == event.target.id) {
                localStorage.setItem('infoCheck',JSON.stringify(item))
                location.href = "booking.html"     
            }
        }
    })
}



