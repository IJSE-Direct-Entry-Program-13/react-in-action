import './App.css'

function App() {

    function handleClick(){
        alert("Okay");
    }

    return (
        <>
            <h1>Welcome to React Binding</h1>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default App
