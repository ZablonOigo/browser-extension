const myarr=[];
const link=document.querySelector('#link');
const input=document.querySelector('#input-el');
const  button=document.querySelector('#save-btn').addEventListener('click',()=>{
console.log('button clicked');
myarr.push(input.value);
input.value=' ';
renderLeads()
}) ;
function renderLeads(){
    for(let i in myarr){
        link.innerHTML+=`<li>${myarr[i]}</li>`;
    }
}
