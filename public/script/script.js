const aboutusbtn = document.getElementById("aboutus_btn");
const aboutuspara = document.getElementById("aboutus_description");

const aboutusimg1 = document.getElementById("aboutus_img1");
const aboutusimg2 = document.getElementById("aboutus_img2");

aboutusbtn.addEventListener('click',() =>{
    aboutuspara.classList.remove('inactive');
    // aboutuspara.classList.add('aboutus_para');
    aboutusbtn.classList.add('inactive');
    aboutusimg1.classList.remove('inactive');
    // aboutusimg1.classList.add('aboutus_imgonclick1');
    aboutusimg2.classList.remove('inactive');
    // aboutusimg2.classList.add('aboutus_imgonclick2');
} )



