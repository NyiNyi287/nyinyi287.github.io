const sendButton=document.querySelector(".icon");
const bodyTag=document.querySelector(".body");
const inputTag=document.querySelector(".input");
const teacherTag=document.querySelector(".teacher");
const learnTag=document.querySelector(".learn");
const button=document.querySelector(".confirm");




const menuTag=document.querySelector(".menu");
const menuTag2=document.querySelector(".learner");
menuTag2.classList.add("none");

const text=["hi","Hello","ဘာလုပ်နေလဲ","ကိုကို","မောင်","မောင်လေး","ချစ်လား"];
const reply=["Hello","hi","လိုင်းသုံးနေတယ်","ဗျာ ပြော သဲလေး","ဗျာ မမ","ဗျာ မမ ပြောလေ","ဟုတ် အရမ်းချစ်",];

button.addEventListener("click",()=>{
    let teacher=teacherTag.value;
    let learn=learnTag.value;

    text.push(teacher);
    reply.push(learn);
  teacherTag.value="";
  learnTag.value="";
    
})
sendButton.addEventListener("click",()=>{
    let texts=inputTag.value;
    
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
    chatMessageBox2.append(replies);
    bodyTag.append(chatMessageBox2);
    inputTag.value="";
    bodyTag.scrollTop=bodyTag.scrollHeight;
 }
    
})
let boolean="closed";
menuTag.addEventListener("click",()=>{
    
    if(boolean=="closed"){
        menuTag2.classList.remove("none");
        boolean="opened"
    }else{
        menuTag2.classList.add("none");
        boolean="closed";
    }
})