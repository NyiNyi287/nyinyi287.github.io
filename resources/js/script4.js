const iconContainerTag=document.getElementsByClassName("iconContainer")[0];
const stick1Tag=document.getElementsByClassName("stick1")[0];
const stick2Tag=document.getElementsByClassName("stick2")[0];
const stick3Tag=document.getElementsByClassName("stick3")[0];

const navBarTag=document.getElementsByClassName("nav-bar")[0];




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
