
const iconContainerTag=document.getElementsByClassName("iconContainer")[0];
const stick1Tag=document.getElementsByClassName("stick1")[0];
const stick2Tag=document.getElementsByClassName("stick2")[0];
const stick3Tag=document.getElementsByClassName("stick3")[0];

const navBarTag=document.getElementsByClassName("nav-bar")[0];

const liveVideoTag=document.getElementsByClassName("lives")[0];
const discountTag =document.getElementsByClassName("discount")[0];

const discountDivTag=document.getElementsByClassName("discount-body")[0];
const livesDivTag=document.getElementsByClassName("lives-body")[0];

const subBoxTag=document.querySelectorAll('.sub-box');
const subImgTag=document.querySelectorAll('.sub-img');

iconContainerTag.addEventListener("click",()=>{
    if(stick1Tag.classList.contains("isOpened")){
      stick2Tag.classList.remove("hiding");
      stick1Tag.classList.remove("T1");
      stick3Tag.classList.remove("T2");
      stick1Tag.classList.remove("isOpened");
     navBarTag.classList.remove("display-block");
     navBarTag.classList.remove("nav-animate");
    
    }else{
      stick2Tag.classList.add("hiding");
      stick1Tag.classList.add("T1");
      stick3Tag.classList.add("T2");
       stick1Tag.classList.add("isOpened");
       navBarTag.classList.add("display-block");
       navBarTag.classList.add("nav-animate");
       
    
    }
});


liveVideoTag.addEventListener("click",()=>{
    if(livesDivTag.classList.contains("margin-right")){
        livesDivTag.classList.remove("margin-right");
        discountDivTag.classList.add("margin-left");
    }else{
        discountDivTag.classList.add("margin-left");
    };
   
});
discountTag.addEventListener("click",()=>{
    if(discountDivTag.classList.contains("margin-left")){
        discountDivTag.classList.remove("margin-left");
       
    }else{
        livesDivTag.classList.add("margin-right"); 
    }
  
 });


 //---------------------------- for subjects Animation-----------------------------------------
for(let i=0;i<subBoxTag.length;i++ ){
    console.log(subImgTag.length);
    subBoxTag[i].addEventListener("mouseenter",()=>{
        subImgTag[i].classList.add("animate");
    });
    subBoxTag[i].addEventListener("mouseleave",()=>{
        subImgTag[i].classList.remove("animate");
    });
}