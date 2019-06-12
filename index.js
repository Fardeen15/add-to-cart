var obj = [
    {
        src: "./images/watch1.jpg",
        name: "rado",
        id : 0,
        price: 500
    },
    {
        src: "./images/watch1.jpg",
        name: "rado",
        id : 1,
        price: 500
    },
    {
        src: "./images/watch2.jpg",
        name: "rado",
        id : 2,
        price: 500
    },
    {
        src: "./images/watch3.jpg",
        name: "rado",
        id : 3,
        price: 500
    },
    {
        src: "./images/watch4.jpg",
        name: "rado",
        id : 4,
        price: 500
    },
    {
        src: "./images/watch5.jpg",
        name: "rado",
        id : 5,
        price: 500
    },
    {
        src: "./images/watch6.jpg",
        name: "rado",
        id : 6,
        price: 500
    },
    {
        src: "./images/watch7.jpg",
        id : 7,
        name: "rado",
        price: 500
    },
    {
        src: "./images/watch8.jpg",
        name: "rado",
        id : 8,
        price: 500
    },
    {
        src: "./images/watch9.jpg",
        name: "rado",
        id : 9,
        price: 500
    },
    {
        src: "./images/watch10.jpg",
        name: "rado",
        id : 10,
        price: 500
    },
    {
        src: "./images/watch11.jpg",
        name: "rado",
        id : 11,
        price: 500
    },
    {
        src: "./images/watch12.jpg",
        name: "rado",
        id : 12,
        price: 500
    },
    {
        src: "./images/watch13.jpg",
        name: "rado",
        id : 13,
        price: 500
    },
    {
        src: "./images/watch14.jpg",
        name: "rado",
        id : 14,
        price: 500
    }
]

var div = document.querySelector("#bodyDiv");
for (var i = 0; i < obj.length; i++) {
    div.innerHTML +=
        `<div class = "cardDiv" id = "${i}">
        <img src = "${obj[i].src}"></img>
        <p>${obj[i].name}<br><br> ${obj[i].price}<br><br><span class= "icon" onclick = "remove(${i})">-</span> <span class = "icon" onclick = "add(${i})">+</span></p>
    </div>`
}
function add(i) {
    // console.log(obj[i])

    var obj2 = JSON.parse(localStorage.getItem("data"));
    // var obj2 = [get]
    if (obj2 === null) {
        obj2 = [];
    }
    obj[i].id1 = i;
    obj2.push(obj[i]);
    console.log(obj2)
    localStorage.setItem("data", JSON.stringify(obj2));

    counter()
}

var counter1 = document.querySelector(".counter");
var get = localStorage.getItem("counter");
if (get === null) {
    counter1.innerHTML = 0
} else {
    counter1.innerHTML = get

}
console.log(get)


function counter() {
    var counter1 = document.querySelector(".counter");
    var counter2 = document.querySelector(".counter").innerHTML;
    var plus = ++counter2;
    counter1.innerHTML = plus

    console.log(plus)


    localStorage.setItem("counter", plus);
}

function remove(i) {
    var counter3 = document.querySelector(".counter");
    var counter4 = document.querySelector(".counter").innerHTML;
    var less = --counter4;
    if(less >= 0){
        counter3.innerHTML = less
    }
    console.log(less)

    if(less >= 0){
        localStorage.setItem("counter", less);
    }
    removeobj(i)
    
}

function removeobj(i){
    // console.log(i);
    var data1 = JSON.parse(localStorage.getItem("data"));
    // if(i === obj[i].id){
        data1.splice(obj[i].id,1);
        console.log(data1);
        localStorage.setItem("data", JSON.stringify(data1)) 
    // }
    
}
function pageChng1() {
    window.location.href = "index.html"
}

function pagechng() {
    window.location.href = "order.html"
}



