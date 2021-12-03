//меню бургер
const menuBurger = document.querySelector('.header_burger');
 if(menuBurger){
 	const menuBody = document.querySelector('.header_menu');
 	menuBurger.addEventListener("click",function(e){
 	document.body.classList.toggle('lock');
 	menuBurger.classList.toggle('active');
 	menuBody.classList.toggle('active');
 	});

 }
