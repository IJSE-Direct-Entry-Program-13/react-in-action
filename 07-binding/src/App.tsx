import './App.css'
import * as React from "react";
import {useState} from "react";
import {Legacy} from "./view/Legacy.tsx";

function handleClick2(event:React.MouseEvent){
    console.log(event);
    alert("Okay 2");
}

function App() {

    function handleClick1(event:React.MouseEvent){
        console.log(event.clientX);
        console.log(event.clientY);
        alert("Okay 1");
    }

    let buttonText = "hello";
    const [buttonText1, setButtonText1] = useState('hello');
    const [color, setColor] = useState('#e66465');
    // let color = '#e66465';
    function handleInput(e:React.FormEvent){
        //color = (e.target as HTMLInputElement).value;
        setColor((e.target as HTMLInputElement).value);
    }
    return (
        <>
            <input type="color" value={color} onInput={handleInput}/>
            <h1 style={
                {
                    color: color,
                    textDecoration: 'underline'
                }
            }>Welcome to React Binding</h1>
            <Legacy />
            <h2>Property Binding</h2>
            <input type="button" value={buttonText1 + 10}/>
            <button onClick={()=>setButtonText1('abc')}>
                Change Text</button>

            <h2>Property Assigning</h2>
            <input type="button" value={buttonText + 10}/>
            <button onClick={()=>buttonText = 'abc'}>
                Change Text</button>

            <h2>Event Binding</h2>
            <button onClick={handleClick1}>Click Me 1</button>
            <button onClick={handleClick2}>Click Me 2</button>
            <button onClick={()=>alert("Okay 3")}>Click Me 3</button>
        </>
    )
}

export default App
