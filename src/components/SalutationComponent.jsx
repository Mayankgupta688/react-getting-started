export default function SalutationComponent(props) {
    debugger;
    return (
        <div>
            <h1>Welcome to the Session { props.userName }...</h1>
            <h2>Employee Age is { props.userAge }</h2>
            <h3>{ props.inputFunction() }</h3><hr/>
        </div>
    )
}

export var userName = "Mayank Gupta"