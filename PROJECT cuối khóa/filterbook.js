let filterContainer = document.getElementById('filter')
let dataKhachsan=JSON.parse(localStorage.getItem('KS'))


for (let data of dataKhachsan) {
    let div = `
    <div class="grid-item featured-rooms">
    <div class="image-wrap">
        <img class="room-image" src="${data.image}" alt="">
        <h5 class="room-name">${data.tenKS}</h5>
    </div>
    <div class="room-info-wrap">
        <span class="room-price">${data.giaThue} <span class="per-night">Per night</span> </span>
        <p class="paragraph">
            Check In:${data.checkin}<br>
            Check Out:${data.checkout}
        </p>
        <a href="" class="btn rooms-btn" id="bookBtn">Book now &rrarr;</a>
    </div>
    </div>
    `
    filterContainer.innerHTML += div
}


let bookBtn=document.getElementById('bookBtn')
let paragraph=document.getElementsByClassName('paragraph')
function booking(){
    event.preventDefault()
    console.log(paragraph);
}
bookBtn.addEventListener('click',booking)



