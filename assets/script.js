const sendButton=document.querySelector(".icon2");
const bodyTag=document.querySelector(".body");
const inputTag=document.querySelector(".input");
const teacherTag=document.querySelector(".teacher");
const learnTag=document.querySelector(".learn");
const button=document.querySelector(".confirm");
const iconContainerTag=document.getElementsByClassName("iconContainer")[0];

const stick1Tag=document.getElementsByClassName("stick1")[0];
const stick2Tag=document.getElementsByClassName("stick2")[0];
const stick3Tag=document.getElementsByClassName("stick3")[0];




const menuTag=document.querySelector(".menu");
const menuTag2=document.querySelector(".learner");

teacherTag.classList.add("none");
learnTag.classList.add("none");
button.classList.add("none");

const text=["hi","i love you","hello","ဘာလုပ်နေလဲ","ကိုကို","မောင်","မောင်လေး","ချစ်လား"];
const reply=["Hello","I love you too","hi","လိုင်းသုံးနေတယ်","ဗျာ ပြော သဲလေး","ဗျာ မမ","ဗျာ မမ ပြောလေ","ဟုတ် အရမ်းချစ်",];

button.addEventListener("click",()=>{
    let teacher=teacherTag.value;
    let learn=learnTag.value;
   if(teacher=="" && learn==""){
      return;
   }
    text.push(teacher);
    reply.push(learn);
  teacherTag.value="";
  learnTag.value="";

    stick2Tag.classList.remove("hiding");
  stick1Tag.classList.remove("T1");
  stick3Tag.classList.remove("T2");
  stick1Tag.classList.remove("isOpened");
 
    setTimeout(() => {
   menuTag2.classList.remove("hider");

}, 100);

teacherTag.classList.add("none");
learnTag.classList.add("none");
button.classList.add("none");
})
sendButton.addEventListener("click",()=>{
    let texts=inputTag.value;
    if(texts==""){
     return;
    }
   //  texter section-----------------
    const chatMessageBox=document.createElement("div");
    chatMessageBox.classList.add("messageBox");
    chatMessageBox.append(inputTag.value);
    bodyTag.append(chatMessageBox);
    
    let finalText=texts.toLowerCase();
 
   let index=text.indexOf(finalText);
   
 
    
    let counter=index;
    if(counter===-1){
        var err="Please say me what I can understand or Teach me"
    }
    if(index===counter){
       var replies= reply[counter];
    }
 if(counter===-1){
    const chatMessageBox2=document.createElement("div");
    chatMessageBox2.classList.add("messageBox2");
    chatMessageBox2.append(err);
    bodyTag.append(chatMessageBox2);
    inputTag.value="";
    bodyTag.scrollTop=bodyTag.scrollHeight;
 }else{
    const chatMessageBox2=document.createElement("div");
    chatMessageBox2.classList.add("messageBox2");
   //  const pTag=document.createElement("p");
   //  pTag.classList.add("style");
   //  pTag.append(replies);
    chatMessageBox2.append(replies);
    bodyTag.append(chatMessageBox2);
    inputTag.value="";
    bodyTag.scrollTop=bodyTag.scrollHeight;
 }
    
})
// let boolean="closed";
// menuTag.addEventListener("click",()=>{
    
//     if(boolean=="closed"){
//         menuTag2.classList.remove("none");
//         boolean="opened"
//     }else{
//         menuTag2.classList.add("none");
//         boolean="closed";
//     }
// })
// icon transition
iconContainerTag.addEventListener("click",()=>{
if(stick1Tag.classList.contains("isOpened")){
  stick2Tag.classList.remove("hiding");
  stick1Tag.classList.remove("T1");
  stick3Tag.classList.remove("T2");
  stick1Tag.classList.remove("isOpened");
 

setTimeout(() => {
   menuTag2.classList.remove("hider");

}, 100);

teacherTag.classList.add("none");
learnTag.classList.add("none");
button.classList.add("none");

}else{
  stick2Tag.classList.add("hiding");
  stick1Tag.classList.add("T1");
  stick3Tag.classList.add("T2");
   stick1Tag.classList.add("isOpened");

   
setTimeout(() => {
 
   menuTag2.classList.add("hider");
}, 100);

 
teacherTag.classList.remove("none");
learnTag.classList.remove("none");
button.classList.remove("none"); 
}

})
