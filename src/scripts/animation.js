const animateMainImage = () => {
    const root = document.querySelector("#root");

    const ckulwikImg = document.querySelector(".img-container");

    const windowHeight = window.innerHeight;
    const windowWidth = window.outerWidth;

    const halfWinWidth = windowWidth / 2;
    const halfWinHeight = windowHeight / 2;

    const maxWiggleHorz = 100;
    const maxWiggleVert = 100;

    const vertAdjustment = 0;

    root.addEventListener("mousemove", (e) => {
        const horizPercentAdj = (halfWinWidth - e.clientX) / halfWinWidth;
        const horizPos = maxWiggleHorz * horizPercentAdj;
        ckulwikImg.style.marginLeft = horizPos + "px";

        const vertPercentAdj = (halfWinHeight - e.clientY) / halfWinHeight;
        const vertPos = maxWiggleVert * vertPercentAdj;
        ckulwikImg.style.marginTop = vertPos + vertAdjustment + "px";
    });
}

export default animateMainImage;