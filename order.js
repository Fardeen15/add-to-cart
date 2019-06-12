function pageChng1() {
    window.location.href = "index.html"
}
function pagechng() {
    window.location.href = "order.html"
}

function add() {
    1
    // event.preventDefault()
    var div1 = document.querySelector("#bodyDiv2");
    var obj3 = JSON.parse(localStorage.getItem("data"));
    console.log(obj3);
    for (var i = 0; i < obj3.length; i++) {
        console.log(i);
        div1.innerHTML +=
            `<div class = "cardDiv1" id = "${i}">
        <p><img src ="${obj3[i].src}">  <span>NAME  (${obj3[i].name}) <span>   <span>PRICE (${obj3[i].price})<span> </p><hr/>
        </div>`
    }
}
add()

var zero = document.querySelector(".counter");
var get1 = localStorage.getItem("counter")
console.log(get1);
zero.innerHTML = get1

