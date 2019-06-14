var obj = [
    {
        src: "./images/watch1.jpg",
        name: "rado",
        quantity: 0,
        id: 0,
        price: 500
    },
    {
        src: "./images/watch1.jpg",
        name: "rado",
        id: 1,
        quantity: 0,
        price: 500
    },
    {
        src: "./images/watch2.jpg",
        name: "rado",
        id: 2,
        quantity: 0,
        price: 500
    },
    {
        src: "./images/watch3.jpg",
        name: "rado",
        id: 3,
        quantity: 0,
        price: 500
    },
    {
        src: "./images/watch4.jpg",
        name: "rado",
        id: 4,
        quantity: 0,
        price: 500
    },
    {
        src: "./images/watch5.jpg",
        name: "rado",
        id: 5,
        quantity: 0,
        price: 500
    },
    {
        src: "./images/watch6.jpg",
        name: "rado",
        id: 6,
        quantity: 0,
        price: 500
    },
    {
        src: "./images/watch7.jpg",
        id: 7,
        name: "rado",
        price: 500,
        quantity: 0,
    },
    {
        src: "./images/watch8.jpg",
        name: "rado",
        id: 8,
        quantity: 0,
        price: 500
    },
    {
        src: "./images/watch9.jpg",
        name: "rado",
        id: 9,
        quantity: 0,
        price: 500
    },
    {
        src: "./images/watch10.jpg",
        name: "rado",
        id: 10,
        quantity: 0,
        price: 500
    },
    {
        src: "./images/watch11.jpg",
        name: "rado",
        id: 11,
        quantity: 0,
        price: 500
    },
    {
        src: "./images/watch12.jpg",
        name: "rado",
        id: 12,
        quantity: 0,
        price: 500
    },
    {
        src: "./images/watch13.jpg",
        name: "rado",
        id: 13,
        quantity: 0,
        price: 500
    },
    {
        src: "./images/watch14.jpg",
        name: "rado",
        id: 14,
        quantity: 0,
        price: 500
    }
]
// var obj2 = JSON.parse(localStorage.getItem("data"));
var match = false;
var index1;
var div = document.querySelector("#bodyDiv");

if (!match) {

    for (var i = 0; i < obj.length; i++) {
        // quantity(i);
        div.innerHTML +=
            `<div class = "cardDiv" id = "${i}">
        <img src = "${obj[i].src}"></img>
        <p>${obj[i].name}<br><br> ${obj[i].price}<br><br> <span id = "quantity${i}"></span><ber><br> <span class= "icon" onclick = "remove(${i})">-</span> <span class = "icon" onclick = "add(${i})">+</span></p>
        </div>`;
    }
    match = true
}


var obj2 = [];
function getData() {
    obj2 = JSON.parse(localStorage.getItem("data"));
    if (obj2 === null) {
        obj2 = []
    }
}

getData()
function add(index) {
    // index1 = index

    let flag = true
    for (var i = 0; i < obj2.length; i++) {
        if (obj[index].id === obj2[i].id) {
            obj2[i].quantity = ++obj2[i].quantity
            flag = false
            localStorage.setItem("data", JSON.stringify(obj2));
        }

    }
    if (flag) {
        obj2.push(obj[index]);

        for (var i = 0; i < obj2.length; i++) {
            if (obj[index].id === obj2[i].id) {
                if (obj2[i].quantity >= 0) {
                    ++obj2[i].quantity
                }
            }
        }
        localStorage.setItem("data", JSON.stringify(obj2));
        console.log("else", JSON.parse(localStorage.getItem("data")));
    }
    quantity();
    counter();
}

function quantity() {

    if (match) {
        for (var i = 0; i < obj2.length; i++) {
            for (var j = 0; j < obj.length; j++) {
                if (obj2[i].id === obj[j].id) {
                    if (obj2[i].quantity <= 0) {
                        var quanty1 = document.querySelector(`#quantity${j}`)
                        console.log("aaa")
                        quanty1.innerHTML = `(Quantity)${obj2[i].quantity}`
                    }
                    // if (obj2[i].quantity <= 0) {
                    //     quanty1.innerHTML = ""
                    // }
                }
            }
        }
    }
}
// }
quantity()

var counter1 = document.querySelector(".counter");
var get = localStorage.getItem("counter");
if (get === null) {
    counter1.innerHTML = 0
    console.log(get)
} else {
    counter1.innerHTML = get

}



function counter() {
    var counter1 = document.querySelector(".counter");
    var counter2 = document.querySelector(".counter").innerHTML;
    var plus = ++counter2;
    counter1.innerHTML = plus




    localStorage.setItem("counter", plus);
}






function remove(index) {
    var counter3 = document.querySelector(".counter");
    var counter4 = document.querySelector(".counter").innerHTML;
    var less = --counter4;
    if (less >= 0) {
        counter3.innerHTML = less
    }
    if (less >= 0) {
        localStorage.setItem("counter", less);
    }
    // let flag = true
    // for (var i = 0; i < obj2.length; i++) {
    //     if (obj[index].id === obj2[i].id) {
    //         obj2[i].quantity = --obj2[i].quantity
    //         if (obj2[i].quantity  0) {
    //             obj2.splice(i, 1);
    //         }
    //         flag = false
    //         localStorage.setItem("data", JSON.stringify(obj2));
    //     }

    // }
    // if (flag) {
    //     obj2.push(obj[index]);

    //     for (var i = 0; i < obj2.length; i++) {
    //         if (obj[index].id === obj2[i].id) {
    //             --obj2[i].quantity
    //         }
    //         console.log(obj2[i].quantity)
    //         if (obj2[i].quantity === 0) {
    //             obj2.splice(i, 1);
    //             localStorage.setItem("data", JSON.stringify(obj2));
    //             console.log("splice")
    //         }
    //     }
    //     console.log("else", JSON.parse(localStorage.getItem("data")));
    // }
    
    // console.log(obj[index].quantity);
    for (var i = 0; i < obj2.length; i++) {
        if (obj[index].id === obj2[i].id) {
            obj2[i].quantity = --obj2[i].quantity;
            localStorage.setItem("data", JSON.stringify(obj2))
        }
        console.log(obj2[i].quantity);
        if (obj2[i].quantity === 0) {
            obj2.splice(i, 1);
            localStorage.setItem("data", JSON.stringify(obj2))
        }
    }
    quantity();




}


function pageChng1() {
    window.location.href = "index.html"
}

function pagechng() {
    window.location.href = "order.html"
}



