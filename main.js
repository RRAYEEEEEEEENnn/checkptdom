// declaration 

var favs = Array.from(document.querySelectorAll(".fa-heart"));
var cards = Array.from(document.querySelectorAll(".card"))
var deletBnts = Array.from(document.querySelectorAll(".fa-trash-alt"))
var plusBtns = Array.from(document.querySelectorAll(".fa-plus-circle"))
var minusBtns = Array.from(document.querySelectorAll(".fa-minus-circle"))
// favourites
for (let fav of favs) {
    fav.addEventListener("click", function () {
        if (fav.style.color=="black") {
            fav.style.color = "red";
        } else {
            fav.style.color = "black";
        }
    });
}

for (let i in deletBnts) {
    deletBnts[i].addEventListener("click", function() {
        cards[i].remove();
        total();
    });
}


// Add button 
for (let plus of plusBtns) {
    plus.addEventListener("click" , function(){
        plus.nextElementSibling.innerHTML++
        total();
    })
}

for (let minus of minusBtns ) {
    minus.addEventListener("click", function() {
        minus.previousElementSibling.innerHTML > 0 
        ?minus.previousElementSibling.innerHTML-- 
        : null;
        total();
    
        
    })

}

function total() {
    let qte = Array.from(document.querySelectorAll(".qute"))
    let price = Array.from(document.querySelectorAll(".unitt-price"))
    let s = 0 
    for ( let i = 0 ; i< price.length; i++){
        s = s + price[i].innerHTML * qte[i].innerHTML;
    }
    document.getElementById("total-price").innerHTML = s;
}