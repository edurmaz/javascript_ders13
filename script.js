let firstBtn = document.getElementById("btn")
console.log(firstBtn.innerHTML)  

document.getElementById("btn").innerHTML ="Tıkla" // içeriğine ulaşıp değiştrebiliyoruz.

console.log(firstBtn.class)
console.log(firstBtn.title)   // attributları yerinde görüp değiştirebiliyoruz.
firstBtn.style["color"]= "red"
firstBtn.title ="merhaba"

let img = document.getElementById("img")
img.src = "resim.jpg"  // bu şekilde ekliyoruz.
img.alt = "resim" // olmayan bir attributeyi ekliyoruz.

// img.class ="image"  


console.log(img.getAttribute("alt"))  //getAttribute olan bir attributeyi alır.
//img.setAttribute("class" , "image")     //setAttribute olmayan bir özellik atayabiliyoruz.

img.className = "mer"  // bu şekilde de class ı atayabiliyoruz.

firstBtn.setAttribute("class","second")  

firstBtn.classList.add("active") // class ekliyoruz.
firstBtn.classList.remove("active") // class silebiliyoruz.

// yeni html elemanı oluşturma

//let newList = document.createElement("li")


let paraItem = document.createElement("p");
paraItem.innerHTML ="Bu yeni paragraf";
paraItem.style.color = "red";
console.log(paraItem)

// appendChild html sayfasına eklemek için.
document.write(paraItem)  // write çalışmaz
document.write("<p>paraItem</p>")

document.body.appendChild(paraItem)

let container = document.querySelector(".container")
let card = document.querySelector(".card")
console.log(container)
container.appendChild(paraItem)
card.appendChild(paraItem) // ekler
card.removeChild(paraItem) // siler

// card.removeChild()

// attribute ekleyip kaldırabiliyoruz.

// örnek:  ekleme yapmak

const listItems = document.querySelectorAll("#list li")
// console.log(listItems)

for (let i = 0; i < listItems.length; i++) {
    listItems[i].setAttribute("class", "list-item")
    
}

const h1Items = document.getElementsByClassName("title");

for (let i = 0; i < h1Items.length; i++) {
    let newSpan = document.createElement("span")
    newSpan.innerHTML = `Bu h1 - ${i+1}`
    newSpan.style.display = "none"
    h1Items[i].appendChild(newSpan)
    
}

const ulItem = document.getElementById("list");
console.log(ulItem.childNodes)
console.log(ulItem.lastChild)

function clickF() {
    let newitem = document.createElement("li")
    let newlistitems = document.querySelectorAll("#list li")
    let newALink =document.createElement("a")
    newALink.setAttribute("href", "index.html")

    newALink.innerHTML =`Number -${newlistitems.length+1}`
    newitem.appendChild(newALink)
    ulItem.appendChild(newitem)
}