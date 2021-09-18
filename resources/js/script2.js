const freeCourseTag=document.getElementsByClassName("free-course")[0];
const freeCoursesTag=document.getElementsByClassName("free-courses")[0];
const paidCourseTag=document.getElementsByClassName("paid-course")[0];
const paidCoursesTag=document.getElementsByClassName("paid-courses")[0];
const webDesignTag=document.getElementById("webDesign");
const JavaScriptTag=document.getElementById("javaScript");

const mainVideosContainerTag=document.getElementsByClassName("main-vedios-container")[0];
const videoHandlerTag=document.getElementsByClassName("paid-courses")[0];
const youTubeTag=document.getElementsByClassName("youtube")[0];
const ytTitleTag=document.getElementsByClassName("yt-title")[0];

const iconContainerTag=document.getElementsByClassName("iconContainer")[0];
const stick1Tag=document.getElementsByClassName("stick1")[0];
const stick2Tag=document.getElementsByClassName("stick2")[0];
const stick3Tag=document.getElementsByClassName("stick3")[0];

const navBarTag=document.getElementsByClassName("nav-bar")[0];


freeCourseTag.addEventListener("click",()=>{
    mainVideosContainerTag.innerHTML="";
if(freeCoursesTag.classList.contains("opened")){
    freeCoursesTag.classList.remove("course-div-animate" ,"opened");
}else{
    freeCoursesTag.classList.add("course-div-animate" ,"opened");
};


   
 });


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

 
 paidCourseTag.addEventListener("click",()=>{
    if(paidCoursesTag.classList.contains("opened")){
        paidCoursesTag.classList.remove("course-div-animate" ,"opened");
    }else{
        paidCoursesTag.classList.add("course-div-animate" ,"opened");
    };   
     });
     const webDesignFunc=()=>{
        if (mainVideosContainerTag.innerHTML!=""){
            return;
         }else{
            mainVideosContainerTag.innerHTML+=`
        
                <div class="video-handler">
                <iframe  width="560" height="315" src="https://www.youtube.com/embed/--pGLMdHPC0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-handler">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/k1Txq4SzHIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div> <div class="video-handler">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/k1Txq4SzHIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-handler">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ssqV6kGe6VM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-handler">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-D0N-KLOtN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-handler">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/XP7wtb8dZZs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-handler">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/XP7wtb8dZZs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-handler">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/cTLNKOKlILY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-handler">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/l3mtAL2q83s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-handler">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/kHTJHHyPP4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-handler">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/m81Ap_qs_Bo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-handler">
                   
                </div>

           
        `;
        mainVideosContainerTag.lastElementChild.innerHTML+=`
        <div class="showMore">
        <i class="fab fa-buromobelexperte show-more-icon"></i> <p>Show more...</p>
        `;
        const showMoreTag=document.getElementsByClassName("showMore")[0];
        showMoreTag.addEventListener("click",()=>{
            mainVideosContainerTag.lastElementChild.remove();
            
                mainVideosContainerTag.innerHTML+=`
            
                <div class="video-handler">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Qq4rmI58qp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-handler">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/tJfBNv0sK1s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-handler">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/DvuxqxKb1F0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-handler">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/okj8Fz4qtlk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-handler">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4qcOTlXsutI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-handler">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Hb0nQ2hLi8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-handler">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/MzdqmWNoS9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-handler">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/tj1Px13MRa0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-handler">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/sb7R3QJB0A8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-handler">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/kqrG3RTng44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-handler">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-UaXVDSK-r8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-handler">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/CN-9sVaXmOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-handler">
                
                </div>
                
        
                `;
         
                mainVideosContainerTag.lastElementChild.innerHTML+=`
                <div class="showMore">
                <i class="fab fa-buromobelexperte show-more-icon"></i> <p>Show more...</p>
                `;
         
         
         
            });
    };
   
       
    

    };

webDesignTag.addEventListener("click",()=>{
        mainVideosContainerTag.classList.add("webDesignEnter");
        if(mainVideosContainerTag.classList.contains("javaScriptEnter")){
            mainVideosContainerTag.classList.remove("javaScriptEnter");
            mainVideosContainerTag.innerHTML='';
            webDesignFunc();
        }else{
webDesignFunc();
           
        };
     });

 const javaScriptFunc=()=>{
    if (mainVideosContainerTag.innerHTML!=""){
        return;
     }else{
        mainVideosContainerTag.innerHTML+=`
    
            <div class="video-handler">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/bnDV0TGkOxw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
            <div class="video-handler">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8z5QpZ4o7WI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div> 
            <div class="video-handler">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/vlljQOnAZ00" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
            <div class="video-handler">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/kjNCuGL2Y38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
            <div class="video-handler">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/o7-wGl5mo8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
            <div class="video-handler">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/i-BRnHjebz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
            <div class="video-handler">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Psr93R91seQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
            <div class="video-handler">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ZDQiXislwfM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
            <div class="video-handler">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wrxrLq-yT6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
            <div class="video-handler">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/I3JPXLLKK60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
            <div class="video-handler">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/mKq89whlAzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
            <div class="video-handler">
               
            </div>

       
    `;
    mainVideosContainerTag.lastElementChild.innerHTML+=`
    <div class="showMore">
    <i class="fab fa-buromobelexperte show-more-icon"></i> <p>Show more...</p>
    `;
    const showMoreTag=document.getElementsByClassName("showMore")[0];
    showMoreTag.addEventListener("click",()=>{
         mainVideosContainerTag.lastElementChild.remove();
        
            mainVideosContainerTag.innerHTML+=`
        
            <div class="video-handler">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/mJgbr-JymHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
                <div class="video-handler">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wrxrLq-yT6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
                <div class="video-handler">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wrxrLq-yT6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
                </div>
            <div class="video-handler">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wrxrLq-yT6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
            </div>
            <div class="video-handler">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wrxrLq-yT6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
            </div>
            <div class="video-handler">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wrxrLq-yT6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
            </div>
            <div class="video-handler">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wrxrLq-yT6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
            </div>
            <div class="video-handler">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wrxrLq-yT6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
            </div>
            <div class="video-handler">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wrxrLq-yT6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
            </div>
            <div class="video-handler">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wrxrLq-yT6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
            </div>
            <div class="video-handler">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wrxrLq-yT6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
            </div>
            <div class="video-handler">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wrxrLq-yT6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
            </div>
            <div class="video-handler">
            
            </div>
            
    
            `;
     
            mainVideosContainerTag.lastElementChild.innerHTML+=`
            <div class="showMore">
            <i class="fab fa-buromobelexperte show-more-icon"></i> <p>Show more...</p>
            `;
     
     
     
        });
    };
 };    
JavaScriptTag.addEventListener("click",()=>{
    mainVideosContainerTag.classList.add("javaScriptEnter");
    if(mainVideosContainerTag.classList.contains("webDesignEnter")){
        mainVideosContainerTag.classList.remove("webDesignEnter");
        mainVideosContainerTag.innerHTML='';
        javaScriptFunc();
    }else{
        javaScriptFunc();
    };
    
}) ;
   
    