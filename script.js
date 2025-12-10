let menuicon = document.getElementById("menuicon")
let sidenav = document.getElementById("sidenav")
let navclose = document.getElementById("nav-close")
menuicon.addEventListener("click", function(){
    sidenav.style.right= 0
})

navclose.addEventListener("click", function(){
    sidenav.style.right= "-50%"
})
