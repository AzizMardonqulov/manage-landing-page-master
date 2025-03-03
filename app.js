let bars = document.getElementById("bars")
let NavbarItems = document.getElementById("NavbarItems")
var num =1;
bars.addEventListener('click' , function(){
    bars.classList.toggle('res');
    NavbarItems.classList.toggle("item")
})