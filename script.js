const iconContainerTag=document.getElementsByClassName("iconContainer")[0];
const stick1Tag=document.getElementsByClassName("stick1")[0];
const stick2Tag=document.getElementsByClassName("stick2")[0];
const stick3Tag=document.getElementsByClassName("stick3")[0];
const bodyTag=document.getElementsByClassName("result")[0];

bodyTag.classList.add("created");
let bol=false;

iconContainerTag.addEventListener("click",()=>{
if(stick1Tag.classList.contains("isOpened")){
  stick2Tag.classList.remove("hiding");
  stick1Tag.classList.remove("T1");
  stick3Tag.classList.remove("T2");
  stick1Tag.classList.remove("isOpened");
 

}else{
  stick2Tag.classList.add("hiding");
  stick1Tag.classList.add("T1");
  stick3Tag.classList.add("T2");
   stick1Tag.classList.add("isOpened");

}
if(bol){
  bodyTag.classList.remove("created2");
  bol=false;
}else{
  bodyTag.classList.add("created2");
  bol=true;
}



})
