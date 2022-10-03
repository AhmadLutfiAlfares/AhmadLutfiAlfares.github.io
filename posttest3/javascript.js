const press = document.getElementById("about")
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

function Cursor () {
    document.getElementById("btnWarna").style.cursor = "pointer"
    document.getElementById("about").style.cursor = "pointer"
    document.getElementById("dark-mode").style.cursor = "pointer"
    document.getElementById("reload").style.cursor = "pointer"
}

const refresh = document.getElementById("reload")
refresh.addEventListener("click", function(){
    location.reload()
})

