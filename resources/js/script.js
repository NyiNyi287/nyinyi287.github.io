const categoriesTag=document.getElementsByClassName("categories")[0];
const categories=['Front-end',' PhP', 'Phyton','React','Node' ];
const  categoriesItemsTag=document.getElementsByClassName("categories-items")[0];
const iconTAg=document.getElementsByClassName("cate-icon")[0];


const subBoxTag=document.querySelectorAll('.sub-box');
const subImgTag=document.querySelectorAll('.sub-img');

const iconContainerTag=document.getElementsByClassName("iconContainer")[0];
const stick1Tag=document.getElementsByClassName("stick1")[0];
const stick2Tag=document.getElementsByClassName("stick2")[0];
const stick3Tag=document.getElementsByClassName("stick3")[0];

const navBarTag=document.getElementsByClassName("nav-bar")[0];

// -------------------------------------courses.html-------------------------------------


// ---------------------------------------------------------------------------------------

categoriesTag.addEventListener('click',()=>{
categoriesFunc();
});
iconTAg.addEventListener("click",()=>{
    categoriesFunc(); 
})
const categoriesFunc=()=>{
    if(categoriesItemsTag.classList.contains("opened")){
        categoriesItemsTag.classList.add("display-none");
        categoriesItemsTag.classList.remove("cateDiv-block");
         categoriesItemsTag.classList.remove("opened");
         setTimeout(()=>{ iconTAg.classList.add("fa-chevron-down");},100);
         setTimeout(()=>{ iconTAg.classList.remove("fa-chevron-up");},100);
     }else{
        categoriesItemsTag.classList.remove("display-none");
        setTimeout(()=>{
            categoriesItemsTag.classList.add("cateDiv-block");
        },100);
        
     
         categoriesItemsTag.classList.add("opened");
         
         
     setTimeout(()=>{ iconTAg.classList.remove("fa-chevron-down");},100);
     setTimeout(()=>{ iconTAg.classList.add("fa-chevron-up");},100);
     
     }
     
};

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

//   ------------------------------------------for mobile nav animattio------------------------------
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
// -------------------------------------courses.html-------------------------------------


// ---------------------------------------------------------------------------------------