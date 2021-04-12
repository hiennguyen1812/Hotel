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






