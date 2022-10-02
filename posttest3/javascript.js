const press = document.getElementById("btnHilang")
press.addEventListener("click", function(){
    const x = document.getElementsByClassName("footer")[0]
    if(x.style.display == "none"){
    x.style.display = "block"
    } else {
        x.style.display = "none"
    }
});

const warna = document.getElementById("btnWarna")
warna.addEventListener("click", function(){
    const x = document.getElementsByClassName("isi-diri")[0]
    x.style.color = "red"
});
