let IncEl=document.getElementById("zero")
let SavEl=document.getElementById("text")
let count=0
function i(){
count+=1
IncEl.textContent=count
}
function s(){
let stR= count + " - "
SavEl.textContent += stR
IncEl.textContent=0
count=0
}