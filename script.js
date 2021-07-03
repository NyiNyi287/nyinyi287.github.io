const pic1=document.querySelector(".pic1");
const pic2=document.querySelector(".pic2");
const pic3=document.querySelector(".pic3");
const mobile=document.querySelector(".mobile");
const body=document.getElementsByTagName("BODY")[0];
const final=document.querySelector(".final");




mobile.classList.add("flex");
// }

const pic1f=()=>{
    setTimeout(()=>{
        pic1.classList.add("hiding2");
    },100);
    setTimeout(()=>{
        pic1.classList.remove("hiding2");
    },2500);
    setTimeout(pic2f,3000);

};
const pic2f=()=>{
setTimeout(()=>{
    pic2.classList.add("hiding2");
},100);
setTimeout(()=>{
    pic2.classList.remove("hiding2");
},2500);
setTimeout(pic3f,3000);

};
const pic3f=()=>{

setTimeout(()=>{
    pic3.classList.add("hiding2");
},100);
setTimeout(()=>{
    pic3.classList.remove("hiding2");
},2500);
setTimeout(pic1f,3000);

}
setTimeout(pic1f,100);
   
const cookies=document.createElement("div");
cookies.classList.add("cll");
final.append(cookies);
const button=document.createElement("button");
button.append("Agree");
button.classList.add("clls");
cookies.append("Cookies section text");
cookies.append(button);


button.addEventListener("click",()=>{
    cookies.classList.remove("show");
});
const finl=()=>{
    cookies.classList.add("show");
}
    
window.load=setTimeout(finl,5000);
     
    
   

    


