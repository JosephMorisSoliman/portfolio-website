document.getElementById("colorbtn").addEventListener("click", function (){
    document.body.style.backgroundColor = getRandomColor();
})
function getRandomColor() {
    const letters = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}