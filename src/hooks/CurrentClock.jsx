import React, { useState } from "react";

export default function CurrentClock() {
    function getTime() {
        return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }

    var [dateTime, setDateTime] = useState(getTime());
    var [counter, setCounter] = useState(0);

    setTimeout(() => {
        setDateTime(getTime());
        setCounter(counter + 1); 
    }, 1000);

    return (
        <div>
            <h1>The Current Time is: {dateTime}</h1>
            <ShowCounter counter={counter}></ShowCounter>
        </div>
    )
}

function ShowCounter(props) {
    return <h1>The Current Counter {props.counter}</h1>
}