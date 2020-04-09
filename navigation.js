const navSlide = () => {
    const burger = document.querySelector('.burger'); 
    const nav = document.querySelector('.navitems');
    const navLinks = document.querySelectorAll('.navitems > li'); 

    burger.addEventListener('click',()=>{
        //Toggle Navigation
        nav.classList.toggle('navitems-active')

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
            link.style.animation ='';
            } else {
            link.style.animation = `navitemsFade 0.5s ease forwards ${index/5+0.3}s`;
            }

    });
    });
}

navSlide();