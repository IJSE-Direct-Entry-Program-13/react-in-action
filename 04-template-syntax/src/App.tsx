import './App.css'
import Second from "./second/Second.tsx";
import Third from "./third/Third.tsx";
import Last from "./last/Last.tsx";

// function getRandom(){
//     return Math.random();
// }

// function getValue() {
//     if (false) {
//         return <h1>I am false 1</h1>
//     } else if (false) {
//         return <h1>I am false 2</h1>
//     } else {
//         return <h1>I am true</h1>
//     }
// }
function App() {
    // function getRandom() {
    //     return Math.random();
    // }
    return (<>
            <h1>React: Template Syntax</h1>
            <hr/>
            <Third />
            <Second/>
            <hr/>
            <Last />
        </>
        // <>
        //     <h1>React: Template Syntax</h1>
        //     <hr/>
        //     <h3 className="abc">Text Interpolation</h3>
        //     <p>10 + 15 = {10 + 15}</p>
        //     <p>Random Value = {getRandom()}</p>
        //     <p>Random Value = {Math.random()}</p>
        //     <p>PI Value = {Math.PI}</p>
        //     <hr/>
        //     <First />
        //     <First />
        //     <First />
        //     <hr />
        //     {/*if (false){*/}
        //     {/*    <h1>I am false 1</h1>*/}
        //     {/*}else if (false){*/}
        //     {/*    <h1>I am false 2</h1>*/}
        //     {/*}else{*/}
        //     {/*    <h1>I am true</h1>*/}
        //     {/*}*/}
        //     {
        //     (false ?
        //         <h1>I am false 1</h1>
        //     : false ?
        //         <h1>I am false 2</h1>
        //     :
        //         <h1>I am true</h1>)
        //     }
        //     {
        //         (()=>{
        //           if (false){
        //               return (<h1>I am false 1</h1>)
        //           }else if (false){
        //               return (<h1>I am false 2</h1>)
        //           }else{
        //               return (<h1>I am true</h1>)
        //           }
        //         })()
        //     }
        //     { true ? '<h1>Hi 1 !</h1>' : '' }
        //
        //     { true ? (<h1>Hi 1 !</h1>) : '' }
        //     { true && (<h1>Hi 2 !</h1>) }
        //
        //     <hr />
        //     { getValue() }
        // </>
    )
}

export default App
