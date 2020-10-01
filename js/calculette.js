//*************  Ma calculatrice ************//

// création de ma div Principale

let part1 = document.createElement("div");

// j'ai mis ma div dans le body grace à l'append child

let body = document.querySelector('body')
body.appendChild(part1)

// je cible ma div principale

let divPrincipale = document.getElementsByTagName('div')[0];
console.log(divPrincipale);

divPrincipale.classList = "div1"



// Créer une div enfant de la div principale

let divChild1 = document.createElement('div')

// j'ai mis ma div dans la div principale grace à l'append child
let myDivChild1 = document.querySelector('div')
myDivChild1.appendChild(divChild1);

// je cible ma div enfant

let cibleMydivEnfant =  document.getElementsByTagName('div')[1]
console.log(cibleMydivEnfant);

cibleMydivEnfant.classList = "div2"

// div pour caclulatrice

let myDivForInput = document.createElement('div');
let myDivPremièreRangée =  document.createElement('div');
let myDivDeuxièmeRangée =  document.createElement('div');
let myDivTroisièmeRangée =  document.createElement('div');
let myDivQuatrièmeRangée =  document.createElement('div');


// class for my div 

myDivForInput.classList = "row1";
myDivPremièreRangée.classList = "row1"; 
myDivDeuxièmeRangée.classList = "row1";
myDivTroisièmeRangée.classList = "row1"
myDivQuatrièmeRangée.classList = "row1"




// j'ai mis ma div dans la div principale grace à l'append child

cibleMydivEnfant.appendChild(myDivForInput);
cibleMydivEnfant.appendChild(myDivPremièreRangée)
cibleMydivEnfant.appendChild(myDivDeuxièmeRangée)
cibleMydivEnfant.appendChild(myDivTroisièmeRangée)
cibleMydivEnfant.appendChild(myDivQuatrièmeRangée)

//création de mon input enfant de mydivformyinput

let myInput = document.createElement('input')
myDivForInput.appendChild(myInput);
myInput.classList = "myInput"

//création de mes boutons pour ma calculatrice première rangée
let mybutton1_1 =document.createElement('button')
let mybutton1_2 =document.createElement('button')
let mybutton1_3 =document.createElement('button')
let mybutton1_4 =document.createElement('button')



myDivPremièreRangée.appendChild(mybutton1_1)
myDivPremièreRangée.appendChild(mybutton1_2)
myDivPremièreRangée.appendChild(mybutton1_3)
myDivPremièreRangée.appendChild(mybutton1_4)

  
let myButton1Select = document.querySelectorAll('.row1')[1];
console.log(myButton1Select);

let is = Array.from(myButton1Select.children)
console.log(is);

is.forEach(element => {
    element.className = 'bouton'
    
});






// myDivPremièreRangée.appendChild(mybutton1_1)
// myDivPremièreRangée.appendChild(mybutton1_2)
// myDivPremièreRangée.appendChild(mybutton1_3)
// myDivPremièreRangée.appendChild(mybutton1_4)

mybutton1_1.innerText = "1";
mybutton1_2.innerText = "2";
mybutton1_3.innerText = "3";
mybutton1_4.innerText = "+";

//création de mes boutons pour ma calculatrice deuxième rangée
let mybutton2_1 =document.createElement('button')
let mybutton2_2 =document.createElement('button')
let mybutton2_3 =document.createElement('button')
let mybutton2_4 =document.createElement('button')

myDivDeuxièmeRangée.appendChild(mybutton2_1)
myDivDeuxièmeRangée.appendChild(mybutton2_2)
myDivDeuxièmeRangée.appendChild(mybutton2_3)
myDivDeuxièmeRangée.appendChild(mybutton2_4)

let myButton2Select = document.querySelectorAll('.row1')[2];
console.log(myButton2Select);

let bouton2 = Array.from(myButton2Select.children)
console.log(bouton2);

bouton2.forEach(element => {
    element.className = 'bouton2'
    
});

mybutton2_1.innerText = "4";
mybutton2_2.innerText = "5";
mybutton2_3.innerText = "6";
mybutton2_4.innerText = "-";

//création de mes boutons pour ma calculatrice deuxième rangée

let mybutton3_1 =document.createElement('button')
let mybutton3_2 =document.createElement('button')
let mybutton3_3 =document.createElement('button')
let mybutton3_4 =document.createElement('button')

myDivTroisièmeRangée.appendChild(mybutton3_1)
myDivTroisièmeRangée.appendChild(mybutton3_2)
myDivTroisièmeRangée.appendChild(mybutton3_3)
myDivTroisièmeRangée.appendChild(mybutton3_4)

let myButton3Select = document.querySelectorAll('.row1')[3];
console.log(myButton3Select);

let bouton3 = Array.from(myButton3Select.children)
console.log(bouton3);

bouton3.forEach(element => {
    element.className = 'bouton3'
    
});

mybutton3_1.innerText = "7";
mybutton3_2.innerText = "8";
mybutton3_3.innerText = "9";
mybutton3_4.innerText = "*";

//création de mes boutons pour ma calculatrice troisième rangée

let mybutton4_1 =document.createElement('button')
let mybutton4_2 =document.createElement('button')
let mybutton4_3 =document.createElement('button')
let mybutton4_4 =document.createElement('button')

myDivQuatrièmeRangée.appendChild(mybutton4_1)
myDivQuatrièmeRangée.appendChild(mybutton4_2)
myDivQuatrièmeRangée.appendChild(mybutton4_3)
myDivQuatrièmeRangée.appendChild(mybutton4_4)

let myButton4Select = document.querySelectorAll('.row1')[4];
console.log(myButton3Select);

let bouton4 = Array.from(myButton4Select.children)
console.log(bouton4);

bouton4.forEach(element => {
    element.className = 'bouton4'
    
});

mybutton4_1.innerText = "C";
mybutton4_2.innerText = "0";
mybutton4_3.innerText = "=";
mybutton4_4.innerText = "/";



















