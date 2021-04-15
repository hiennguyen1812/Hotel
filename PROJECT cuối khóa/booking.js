// document.getElementById('submit').onclick = function(){
//         swal("Here's a message!");
// };

// document.getElementById('form1').addEventListener('submit',myFunction)

// function myFunction(e){
//     let formData={
//         name:document.getElementById('name').value,
//         email:document.getElementById('email').value,
//         phone:document.getElementById('phone').value,
//         request:document.getElementById('request').value
//     }
//     localStorage.setItem('formData',JSON.stringify(formData));
//     e.preventDefault();
// }



// let nameInput=document.getElementById('name')
// let submitBtn=document.getElementById('submit')
// function update(params) {
//     let newName=nameInput.value;
//     console.log(newName);
// }
// submitBtn.addEventListener('click',update())





//add thông tin khách hàng vào localstorage
var submitBtn=document.getElementById('submit');


function booking(){
    event.preventDefault()
    var nameInput=document.getElementById('name').value
    var emailInput=document.getElementById('email').value
    var phoneInput=document.getElementById('phone').value
    var requestInput=document.getElementById('request').value

    dataCustomer.push({
        name:`${nameInput}`,
        email:`${emailInput}`,
        phoneNumber:`${phoneInput}`,
        request:`${requestInput}`

        
    })
    localStorage.setItem('Customer',JSON.stringify(dataCustomer))
    let data=JSON.parse(localStorage.getItem('Customer'))
    console.log(data);
}

// ấn submit hiện thông báo
const openButton=document.querySelectorAll('[data-modal-target]')
const closeButton=document.querySelectorAll('[data-close-button]')
const overlay=document.getElementById('overlay')

openButton.forEach(button =>{
    button.addEventListener('click', () =>{
        const modal=document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeButton.forEach(button =>{
    button.addEventListener('click', () =>{
        const modal=button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal){
    if(modal==null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal){
    if(modal==null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}



