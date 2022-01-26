const alertPrimaryBtn = document.querySelector("#alert-code-btn");
const alertPrimaryDiv = document.querySelector("#alert-div-code");
const avatarCodeBtn = document.querySelector("#avatar-code-btn");
const avatarDiv = document.querySelector("#avatar-div-code");

alertPrimaryBtn.addEventListener("click",()=>{
    alertPrimaryDiv.style.display =="block"?alertPrimaryDiv.style.display ="none":alertPrimaryDiv.style.display ="block";
})

//  avatar code start here............................
avatarCodeBtn.addEventListener("click",()=>{
    console.log("click");
    avatarDiv.style.display =="block"?avatarDiv.style.display ="none":avatarDiv.style.display ="block";
})