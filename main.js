const alertPrimaryBtn = document.querySelector("#alert-primary-btn");
const alertPrimaryDiv = document.querySelector("#alert-primary-code");

alertPrimaryBtn.addEventListener("click",()=>{
    alertPrimaryDiv.style.display =="block"?alertPrimaryDiv.style.display ="none":alertPrimaryDiv.style.display ="block";
})