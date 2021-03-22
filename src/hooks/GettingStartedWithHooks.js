import React, { useState } from "react";

export default function GettingStartedWithHooks() {
    var data = 10;
    var [counter, setCounter] = useState(0);
    var [userName, setUserName] = useState("Mayank");

    function incremenetCounter() {
        debugger;
        setCounter(counter + 1);
        data = data + 1;
    }

    console.log(counter);

    return (
        <div>
            <h1>Data for: {userName}</h1>
            <h1>Counter Value is: {counter}</h1>
            <h2>Rendering Normal Variable: {data}</h2>
            <input type="button" onClick={incremenetCounter} value="Increment Counter" />
        </div>
    )
}