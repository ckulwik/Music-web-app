import "../styles/section.css"
import "../styles/TwoCols.css"
import "../styles/LetVsVar.css"


const LetVsVar = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">Let vs Var Comparison</h1>
            <div className="demo-container">
                <div className="left-side">
                    <div className="header-container">
                        <h2>About Var</h2>
                    </div>
                    <ul>
                        <li>The standard before Let, can only be Global or Function scope</li>
                        <li>Global variables should never be used, Function scoped was a major source of bugs before Let</li>
                        <li>Var is hoisted and initialized as undefined, variable can be used before declared + other weird functionality</li>
                        <li>Just should not be used</li>
                    </ul>
                    <div className="small-two-col">
                        <p className="code var-ex-1">
                            name = "Chris";
                            alert(name);
                            var name;
                        </p>
                        <p className="margin-left">
                            This will not cause an error, Chris will be alerted. Var allows you to write sloppy code.
                        </p>
                    </div>
                    <div className="small-two-col">
                        <p className="code var-ex-2">
                            {`{var name = "Mike";} 
                            alert(name);`}
                        </p>
                        <p className="margin-left">
                            Even though name is not in the block scope, it is in function scope. Mike is alerted with no errors, when you
                            would expect to see an error.
                        </p>
                    </div>

                </div>
                <div className="right-side">
                    <div className="header-container">
                        <h2>About Let</h2>
                    </div>
                    <ul>
                        <li>Introduced in ES2015</li>
                        <li>Block scoped, more standard</li>
                        <li>Let is hoisted but not initialized, will error if used before declared -> better for debugging + clean code</li>
                        <li>Preferable to Var, but using Const if possible is better</li>
                    </ul>
                    <div className="small-two-col">
                        <p className="code let-ex-1">
                            name = "Chris";
                            alert(name);
                            let name;
                        </p>
                        <p className="margin-left">
                            This WILL error: Cannot access 'name' before initialization. This error is good,
                            it prevents you from writing sloppy code. Clean code is easier to maintain.
                        </p>
                    </div>
                    <div className="small-two-col">
                        <p className="code let-ex-2">
                            {`{let name = "Mike";} 
                            alert(name);`}
                        </p>
                        <p className="margin-left">
                            This WILL error: name is not defined, since name is no longer in the block scope. We want this error to help keep code clean and avoid bugs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LetVsVar;