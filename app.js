let bars = document.getElementById("bars")
let NavbarItems = document.getElementById("NavbarItems")
let navbar = document.getElementById("navbar")
bars.addEventListener('click' , function(){
    bars.classList.toggle('res');
    NavbarItems.classList.toggle("item")
})
window.addEventListener('scroll' , function(){
    if(window.scrollY > 0){
        navbar.classList.add("navbarSkroll");
    }else{
        navbar.classList.remove("navbarSkroll")
    }
})