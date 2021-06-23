let num1 = document.getElementById("num1-el")
let num2 = document.getElementById("num2-el")

let sumEl = document.getElementById("sum-el")
function add(){ 
    let n1 = parseInt(num1.value,10)
    let n2 = parseInt(num2.value,10)
    let result = n1+n2
    sumEl.textContent="Sum: "+ result
    console.log(n1,num2.value)
}
function subtract(){ 
    let n1 = parseInt(num1.value,10)
    let n2 = parseInt(num2.value,10)
    let result = n1-n2
    sumEl.textContent="Difference: "+ result
}
function divide(){ 
    let n1 = parseInt(num1.value,10)
    let n2 = parseInt(num2.value,10)
    let result = n1/n2
    sumEl.textContent="Quotient: "+ result
}
function multiply(){ 
    let n1 = parseInt(num1.value,10)
    let n2 = parseInt(num2.value,10)
    let result = n1*n2
    sumEl.textContent="Multiplication: " + result
}
function remainder(){
    let n1 = parseInt(num1.value,10)
    let n2 = parseInt(num2.value,10)
    let result =n1%n2
    sumEl.textContent="Remainder: " + result
}