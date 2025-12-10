let menuicon = document.getElementById("menuicon")
let sidenav = document.getElementById("sidenav")
let navclose = document.getElementById("nav-close")
menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})

navclose.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})


let input = document.getElementById("input")
let productbox = document.getElementById("productlist")
let productlist = productbox.querySelectorAll("div")

input.addEventListener("keyup", function(){

    let enteredvalue = event.target.value.toUpperCase()
    for(count=0; count<productlist.length; count=count+1) 
        {
        let productname = productlist[count].querySelector("h1").textContent
        if (productname.toUpperCase().indexOf(enteredvalue) == -1) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }

})


























