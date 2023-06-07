document.addEventListener("DOMContentLoaded",()=>{
    let label=document.querySelector("#lblfecha");
    let fecha=new Date();
    label.textContent=`© Copyright ${fecha.getFullYear()} Medellin - Antioquia`
 })