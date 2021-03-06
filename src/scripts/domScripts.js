export const getRandomColors = (len) => {
    let colors = [];
    for (let i = 0; i < len; i++) {
        colors.push('rgb(' + (Math.floor(Math.random() * 256)) + ',' +
            (Math.floor(Math.random() * 256)) + ',' +
            (Math.floor(Math.random() * 256)) + ')')
    }
    return colors;
}

// export const randomizeRightColors = (numRecolors) => {
//     for (let i = 0; i < numRecolors; i++) {
//         const colors = getRandomColors(6);
//         var ol = document.querySelector(".right-side ol")
//         for (var j = 0; j < ol.children.length; j++) {
//             ol.children[j].style.background = colors[j]
//         }
//     }
// }
