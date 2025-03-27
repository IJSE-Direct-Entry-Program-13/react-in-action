import './First.css';

let value = 1;
function getValue(){
    console.log("Working");
    return value++;
}

function First() {
    // let value = 1;
    // function getValue(){
    //     console.log("Working");
    //     return value++;
    // }
    return (
        <>
            <h3>First Component: {getValue()}</h3>
        </>
    );
}
export default First;