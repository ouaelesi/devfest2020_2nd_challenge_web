showmore = () =>{
    // document.getElementById("more").style.display ="block";
    document.getElementById("more").style.opacity = "100%";
    document.getElementById("btmore").style.display ="none";
    document.getElementById("btless").style.display ="block";
    document.getElementById("cardmodal").style.height = "50%"
    
};

showless = () =>{
    // document.getElementById("more").style.display ="none";
    document.getElementById("more").style.opacity = "0%";
    document.getElementById("btmore").style.display ="block";
    document.getElementById("btless").style.display ="none";
    document.getElementById("cardmodal").style.height = "25%"
};