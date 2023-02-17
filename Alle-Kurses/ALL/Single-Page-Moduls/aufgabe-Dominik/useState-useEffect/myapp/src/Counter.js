
import { useEffect } from "react";
function Counter({ counter ,testProp}) {
    console.log("render Counter");
    useEffect(() => {
        console.log("mounted");
    }, []);

    useEffect(() => {
        if(counter === 5){

            console.log("updata");
        }
    }, [counter]);

    useEffect(() => {
        console.log("testProp"); 
    }, [testProp]);

    useEffect(
        () => () => {
            console.log("unmounted");
        },
        []
    );
    return <p>counter :{counter}</p>;
}
export default Counter;
