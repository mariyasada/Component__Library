const alertPrimaryBtn = document.querySelector("#alert-code-btn");
const alertPrimaryDiv = document.querySelector("#alert-div-code");

alertPrimaryBtn.addEventListener("click",()=>{
    alertPrimaryDiv.style.display =="block"?alertPrimaryDiv.style.display ="none":alertPrimaryDiv.style.display ="block";
})