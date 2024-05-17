
const modal = document.querySelector(".modal")
const phoneNumber=document.querySelector("input");
const userName=document.querySelector(".username");
const error=document.querySelector("small");
const sabtButton=document.querySelector(".sabtBtn");
// const enterButton=document.querySelector(".enter-btn");
const modalTitle=document.querySelector(".modaltitle");
const closeBtn=document.querySelector(".okBtn");
const backdrop=document.querySelector(".backdrop");



phoneNumber.addEventListener("input",(e)=>{
    const{target}=e;
    error.hidden=true;
    if(target.validity.patternMismatch){
        error.hidden=false;
    phoneNumber.classList.add("error") }
    else{
    phoneNumber.classList.remove("error");}

})

const p=document.createElement("h2");
p.textContent=`welcome ${localStorage.getItem("userName")}`;
modalTitle.appendChild(p);


sabtButton.addEventListener("click",()=>{
    localStorage.setItem("userName",userName.value)
    modal.style.top="50%";
    modal.style.transform=transform= "translateY(20vh)";
    modal.style.visibility= "visible";
    modal.style.opacity="1";
    backdrop.style.display="block"
})
closeBtn.addEventListener("click",()=>{
    modal.style.top="0";
    modal.style.transform=transform= "translateY(-100vh)";
    modal.style.visibility= "hidden";
    modal.style.opacity="0";
    backdrop.style.display="none"
})
backdrop.addEventListener("click",()=>{
    modal.style.top="0";
    modal.style.transform=transform= "translateY(-100vh)";
    modal.style.visibility= "hidden";
    modal.style.opacity="0";
    backdrop.style.display="none"
})

