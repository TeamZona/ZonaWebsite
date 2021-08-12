const aboutusbtn = document.querySelector("aboutus_btn");
const aboutuspara = document.querySelector("aboutus_para");

aboutusbtn.addEventListener('click',() =>{
    aboutuspara.classList.remove('inactive');
} )