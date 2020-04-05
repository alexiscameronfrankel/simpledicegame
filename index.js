
//below picks a random number 1-6
let randomNumber1 = Math.floor(Math.random() * 6 + 1)
console.log(randomNumber1)

let b = document.querySelector("img"); 

b.setAttribute("src", `/images/dice${randomNumber1}.png` )

let randomNumber2 = Math.floor(Math.random() * 6 + 1)
console.log(randomNumber2)

let c = document.querySelectorAll("img")[1]

c.setAttribute("src", `/images/dice${randomNumber2}.png` )

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins"
} 
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins"
}
else {document.querySelector("h1").innerHTML = "Draw!"}