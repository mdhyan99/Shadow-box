

function Helloworld ({handleClick}) {
    console.log("render HelloWorld");
    return (
        <>
        <h2>Helloworld</h2>
        <button onClick={handleClick}>click me</button>
        </>
    )
}
export default Helloworld ;