const iconToggle = document.querySelector('.toggle_icon');
const nevbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon');


iconToggle.addEventListener('click', ()=>{
    nevbarMenu.classList.toggle('active');
})

nevbarMenu.addEventListener('click', ()=>{
    nevbarMenu.classList.remove('active');
})

menuLinks.forEach((menuLinks) =>{
    menuLinks.addEventListener('click', ()=>{
        nevbarMenu.classList.remove('active');
    })
})