const input=document.querySelector('input')
const h1=document.querySelector('h1')


// let comment ='Nur Ali'
let soz=/ jind/i
console.log(sozdor.test(comment));
console.log(comment.match(sozdor));
console.log(comment.replace(sozdor,'*****'));

let sozdor=['jindi','eshek','chochko','mal']





input.onchange=()=>{
    
if(sozdor.test(input.value)){
    h1.innerHTML=input.value.replace(sozdor,'****')
}else{
    h1.innerHTML=input.value 
}


}