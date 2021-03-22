export default function DynamicComponent() {
    var currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    return(
        <div>
            <h1>Current Time is: {currentTime}</h1>
        </div>
    )
}