const ckulwikImg = document.querySelector(".img-container")

ckulwikImg.addEventListener("mousemove", (e) => {
    console.log("-e.offsetX: ", -e.offsetX)
    console.log("-e.offsetY: ", -e.offsetY)
    // ckulwikImg.style.left = -e.offsetX + "px";
    // ckulwikImg.style.top = -e.offsetY + "px";
});