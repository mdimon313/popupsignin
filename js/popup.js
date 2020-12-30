let popUpBtn = document.querySelector(".button");
let popUpForm = document.querySelector(".login");
let popUpCloseBtn = document.querySelector("#close");

popUpBtn.addEventListener("click", ()=> {
    popUpForm.style.transform = "translateY(0)";
    popUpForm.style.visibility = "visible";
});
popUpCloseBtn.addEventListener("click", ()=> {
    popUpForm.style.transform = "translateY(-100%)";
    popUpForm.style.visibility = "hidden";
})