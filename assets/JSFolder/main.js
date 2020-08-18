const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav =document.querySelector('.nav-links');
    const nav2 =document.querySelector('.product-nav');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click',() =>{
        //toggle Nav
        nav.classList.toggle('nav-active');
        if(nav2)
        {
            nav2.classList.toggle('nav-gone');
        }
        

        // animasi link
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = ''
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 1}s`;
            }
        });

        // burger animation
        burger.classList.toggle('toggle');
    });
}

const app = () =>{
    navSlide();
}

app();