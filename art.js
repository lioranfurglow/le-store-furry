function openArt(img){
let viewer = document.getElementById("viewer")
let bigArt = document.getElementById("bigArt")

viewer.style.display = "flex"
bigArt.src = img.src
}

function closeArt(){
document.getElementById("viewer").style.display = "none"
}