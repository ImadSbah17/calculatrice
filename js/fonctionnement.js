import {body,myDivForInput,myDivPremièreRangée,myDivDeuxièmeRangée,myDivTroisièmeRangée,myDivQuatrièmeRangée,mybutton4_1,mybutton4_2,mybutton4_3,mybutton4_4,mybutton3_1,mybutton3_2,mybutton3_3,mybutton3_4,mybutton1_1,mybutton1_2,mybutton1_3,mybutton1_4,mybutton2_1,mybutton2_2,mybutton2_3,mybutton2_4 } from "./calculette.js"

console.log(body);
console.log("c'est mon input");
console.log(myDivForInput );

// pour ma première rangée convertis en tableau à fin de le mettre sur l'input



let bouton = document.querySelectorAll('button')
console.log(bouton);
let tab1 = Array.from(bouton);
console.log(tab1);

let restult =0;
let stock1 = 0;
let stock2 = 0;


tab1.forEach(element => {
    element.addEventListener('click',()=>{
        if(element.innerText == "C"){
            myDivForInput.firstChild.value = ""
        }else if (element.innerText == "="){
            
        }
        else {
            myDivForInput.firstChild.value += element.innerText

        }
    
    })
    
});


let boutonPlus = document.getElementById('plus')
let boutonMoins = document.getElementById('moins')
let boutonDiviser = document.getElementById('diviser')
let boutonFois = document.getElementById('fois')
let boutonEgal = document.getElementById('egal')
console.log(boutonPlus);
console.log(boutonMoins);
console.log(boutonDiviser);
console.log(boutonFois);
console.log(boutonEgal);


boutonPlus.addEventListener("click",()=>{
 
   stock1= myDivForInput.firstChild.value
    
});


boutonMoins.addEventListener('click', ()=>{
   stock1= myDivForInput.firstChild.value
 
});


boutonFois.addEventListener('click',()=>{
    stock1= myDivForInput.firstChild.value
 
});

boutonDiviser.addEventListener('click',()=>{
    stock1= myDivForInput.firstChild.value
 
});







boutonEgal.addEventListener("click",()=>{
    if(myDivForInput.firstChild.value.includes('+')){
        let indexPlus = myDivForInput.firstChild.value.indexOf("+");
        stock2 = myDivForInput.firstChild.value.slice(indexPlus+1, myDivForInput.firstChild.value.length);
        myDivForInput.firstChild.value += boutonEgal.innerText;
        myDivForInput.firstChild.value = parseInt(stock1) + parseInt(stock2);
    }else if (myDivForInput.firstChild.value.includes('-')){
        let indexMoins = myDivForInput.firstChild.value.indexOf("-");
        stock2 = myDivForInput.firstChild.value.slice(indexMoins+1, myDivForInput.firstChild.value.length);
        myDivForInput.firstChild.value += boutonEgal.innerText;
        myDivForInput.firstChild.value = parseInt(stock1) - parseInt(stock2);
    }
    else if (myDivForInput.firstChild.value.includes('*')){
        let indexFois = myDivForInput.firstChild.value.indexOf("*");
        stock2 = myDivForInput.firstChild.value.slice(indexFois+1, myDivForInput.firstChild.value.length);
        myDivForInput.firstChild.value += boutonEgal.innerText;
        myDivForInput.firstChild.value = parseInt(stock1) * parseInt(stock2);

    }
    else if (myDivForInput.firstChild.value.includes('/')){
        let indexDiviser = myDivForInput.firstChild.value.indexOf("/");
        stock2 = myDivForInput.firstChild.value.slice(indexDiviser+1, myDivForInput.firstChild.value.length);
        myDivForInput.firstChild.value += boutonEgal.innerText;
        myDivForInput.firstChild.value = parseInt(stock1) / parseInt(stock2);

    }
})



console.log(myDivForInput.value);