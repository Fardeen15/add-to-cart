function pageChng1() {
    window.location.href = "index.html"
}
function pagechng() {
    window.location.href = "order.html"
}

function add() {
    // event.preventDefault()
    var div1 = document.querySelector("#bodyDiv2");
    var obj3 = JSON.parse(localStorage.getItem("data"));
    var total = 0
    var grandtotal = 0;
    console.log(obj3);
    for (var i = 0; i < obj3.length; i++) {
         total = obj3[i].price * obj3[i].quantity;
         grandtotal += total;
        div1.innerHTML +=
            `<div class = "cardDiv1" id = "${i}">
        <p><img src ="${obj3[i].src}"> 
         <span>NAME  (${obj3[i].name}) <span>  
          <span>PRICE (${obj3[i].price})<span> 
          <span>QUANTITY (${obj3[i].quantity})<span> 
          <span>EACH TOTAL (${total})<span></p><hr/>
        </div>`
        console.log(total)
    }
    div1.innerHTML += `
    <div id = "total">GRAND TOTAL (${grandtotal})</div>
    `
}
add()

var zero = document.querySelector(".counter");
var get1 = localStorage.getItem("counter")
console.log(get1);
zero.innerHTML = get1

