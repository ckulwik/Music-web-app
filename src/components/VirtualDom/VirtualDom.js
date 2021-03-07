import { useState } from "react";
import { getRandomColors } from "../../scripts/domScripts";

import "../../styles/section.css"
import '../../styles/VirtualDom.css';


const VirtualDom = () => {
    const LIST_LEN = 5;

    const startingColors = ["rgb(24,100,121)", "rgb(161,162,253)", "rgb(18,162,48)", "rgb(223,132,202)", "rgb(63,214,57)"];

    const [leftColor1, setLeftColor1] = useState(startingColors[0]);
    const [leftColor2, setLeftColor2] = useState(startingColors[1]);
    const [leftColor3, setLeftColor3] = useState(startingColors[2]);
    const [leftColor4, setLeftColor4] = useState(startingColors[3]);
    const [leftColor5, setLeftColor5] = useState(startingColors[4]);

    const leftColors = [leftColor1, leftColor2, leftColor3, leftColor4, leftColor5];
    const leftColorStateSetters = [setLeftColor1, setLeftColor2, setLeftColor3, setLeftColor4, setLeftColor5];

    const listElements = ['one', 'two', 'three', 'four', 'five'];
    const [numRecolors, setNumRecolors] = useState(50000);



    const randomizeLeftColors = () => {
        for (let i = 0; i < numRecolors; i++) {
            const colors = getRandomColors(LIST_LEN);
            for (var j = 0; j < LIST_LEN; j++) {
                leftColorStateSetters[j](colors[j]);
            }
        }
    }

    const randomizeRightColors = () => {
        for (let i = 0; i < numRecolors; i++) {
            const colors = getRandomColors(LIST_LEN);
            var ol = document.querySelector(".right-side ol")
            for (var j = 0; j < LIST_LEN; j++) {
                ol.children[j].style.background = colors[j]
            }
        }
    }

    const [leftStart, setLeftStart] = useState(0);
    const [leftEnd, setLeftEnd] = useState(0);
    const [rightStart, setRightStart] = useState(0);
    const [rightEnd, setRightEnd] = useState(0);


    const leftHandleClick = () => {
        setLeftStart(new Date())
        randomizeLeftColors();
        setLeftEnd(new Date())
    }

    const rightHandleClick = async () => {
        setRightStart(new Date());
        randomizeRightColors();
        setRightEnd(new Date())
    }

    const list = (side) => {
        const getColor = (side, index) => {
            if (side === "left") {
                return leftColors[index];
            }
            else {
                return startingColors[index];
            }
        }

        return (
            <>
                <ol>
                    {
                        listElements.map((value, index) => {
                            return <li key={index}
                                className="small-box"
                                style={{ background: getColor(side, index) }}>
                                {value}
                            </li>
                        })
                    }
                </ol>
                <button
                    onClick={() => side === "left" ? leftHandleClick() : rightHandleClick()}
                >
                    randomize colors {numRecolors} times
            </button>
            </>
        )
    }

    return (
        <div className="page-container">
            <h1 className="page-title">VirtualDom Demo</h1>
            <div className="input-container">
                <p>select the number of random recolors: </p>
                <input className="numRecolors-input" value={numRecolors} onChange={event => setNumRecolors(event.target.value)}></input>
            </div>
            <div className="demo-container">
                <div className="left-side">
                    <div className="header-container">
                        <h2>Using React's Virtual Dom</h2>
                    </div>
                    <div className="list-contents">
                        <div className="list">
                            {list("left")}
                        </div>
                        <div>
                            <p>
                                In this example, the color of the items is being stored as a state variable. The color state variable is updated, and then the new style is applied
                                via in-line styling. The VD allows changes to be applied on it first, before actually changing the DOM.
                                B/c the VD is not rendered, changes to it are cheap. Along with batching changes, the VD approach is much faster.
                                
                            </p>
                            <div>
                                <p className="code">
                                    const [leftColor1, setLeftColor1] = useState(startingColors[0]);
                                </p>
                                <p>...</p>
                                <p className="code">
                                    setLeftColor1(newColor)
                                </p>
                                <p>timer: {leftEnd - leftStart} ms </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="header-container">
                        <h2>Direct DOM Manipulation</h2>
                    </div>
                    <div className="list-contents">
                        <div className="list">
                            {list("right")}
                        </div>
                        <div>
                            <p>
                                This side is using direct DOM manipulation to change the styling
                                of the items. Updating the DOM after manipulation is inneficient, 
                                and has a slower performance than React's Virtual DOM.
                            </p>
                            <div>
                                <p className="code">
                                    document.querySelector(...).style.background = newColor;
                                </p>
                                <p>timer: {rightEnd - rightStart} ms </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VirtualDom;