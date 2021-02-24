const animateMainImage = () => {
    const root = document.querySelector("#root");

    const ckulwikImg = document.querySelector(".img-container");

    const windowHeight = window.innerHeight;
    const windowWidth = window.outerWidth;

    const halfWinWidth = windowWidth / 2;
    const halfWinHeight = windowHeight / 2;

    const maxWiggleHorz = 15;
    const maxWiggleVert = 15;

    const imgWidth = document.querySelector(".img-container").offsetWidth;
    const imgHeight = document.querySelector(".img-container").offsetHeight;

    const vertAdjustment = 150;

    
    // clientX at 0 -> want to move img right 100
    // clientX at width/2, no move 
    // clientX at WinWidth -> move img left 100

    // const horizPos = halfWinWidth + maxWiggleHorz((e.clientX - halfWinWidth) / halfWinWidth)

    root.addEventListener("mousemove", (e) => {
        const horizPercentAdj = (halfWinWidth - e.clientX) / halfWinWidth;
        const horizPos = halfWinWidth + maxWiggleHorz * horizPercentAdj;
        ckulwikImg.style.left = horizPos - imgWidth / 1.5 + "px";

        const vertPercentAdj = (halfWinHeight - e.clientY) / halfWinHeight;
        const vertPos = halfWinHeight + maxWiggleVert * vertPercentAdj;
        ckulwikImg.style.top = vertPos - imgHeight / 1.5 + vertAdjustment + "px";
    });
}

export default animateMainImage;