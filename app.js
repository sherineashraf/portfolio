let up = document.querySelector(".top");
let logo = document.querySelector(".logo");
let h = document.querySelector(".h");

logo.onclick = function (){
    window.location.reload();
}
h.onclick = function (){
    window.location.reload();
}


window.onscroll = function(){
    if(this.scrollY >= 900){
        up.classList.add("show");
    }else{
        up.classList.remove("show");

    };

};
up.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth",
    });
};
