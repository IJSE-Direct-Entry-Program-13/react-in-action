import './Second.css';
import {useState} from "react";

function Second() {
    //let flag = true;
    const [flag, setFlag] = useState(true);
    function getValue(){
        if (flag) return <h1>I am h1-4</h1>
    }
    return (
        <>
            <h1>Simple Conditional Rendering</h1>
            <hr/>
            <button onClick={()=> setFlag(!flag)}>Show/Hide</button>
            <h1>1)</h1>
            { flag ? <h1>I am h1-1</h1> : ''}
            <h1>2)</h1>
            { flag && <h1>I am h1-2</h1>}
            <h1>3)</h1>
            { (()=> {if(flag) return <h1>I am h1-3</h1>})()}
            <h1>4)</h1>
            {getValue()}
        </>);
}

export default Second;