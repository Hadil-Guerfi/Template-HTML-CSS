

    let list =document.querySelector("header .container i");

    let bar=document.querySelector(".main-page-small");

    let media =window.matchMedia("(max-width: 768px)");

    bar.classList.add("invisible");

    console.log("hello");



function myFunction(){


if(media.matches){ 

    // bar.classList.remove("invisible");

    list.onclick=function(){
    
    bar.classList.toggle("displayed");
    
    }
    console.log("if");

}

else{
    bar.classList.remove("displayed");
    bar.classList.add("invisible");
    console.log("else");

}
}


myFunction(media) ;// Call listener function at run time
media.addListener(myFunction);