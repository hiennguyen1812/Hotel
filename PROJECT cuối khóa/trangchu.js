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

// function sendEmail() {
// 	Email.send({
// 	Host: "smtp.gmail.com",
// 	Username : "78d6de2ac69ee5",
// 	Password : "41e867d1d1532d",
// 	To : 'dat9d3@gmail.com',
// 	From : "<sender’s email address>",
// 	Subject : "<email subject>",
// 	Body : "<email body>",
// 	}).then(
// 		message => alert("mail sent successfully")
// 	);
// }
