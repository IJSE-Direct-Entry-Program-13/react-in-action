import './App.css'
import {createContext, useContext} from "react";

const ProgressContext = createContext(0);

export function App() {
    return (
        <ProgressContext.Provider value={30}>
            <h1 className="p-2 text-center">React: State Management</h1>
            <div className="d-flex p-2 justify-content-between align-items-center">
                <Spinner/>
                <h2 className="flex-grow-1 text-center">Progress 10%</h2>
            </div>
            <div className="d-flex p-2">
                <HSlider/>
                <VSlider/>
            </div>
            <div className="d-flex p-2 justify-content-center mt-5 pt-5">
                <ProgressWrapper/>
            </div>
        </ProgressContext.Provider>
    )
}

export function ProgressBar() {
    const progress = useContext(ProgressContext);
    return (<div style={{
        width: '200px',
        height: '10px',
        backgroundColor: 'white'
    }}>
        <div style={{
            height: '100%',
            backgroundColor: 'red',
            width: `${progress}%`
        }}></div>
    </div>)
}

export function ProgressWrapper() {
    const progress = useContext(ProgressContext);
    return (<>
        <div className="border bg-primary-subtle d-flex
        justify-content-center align-items-center"
             style={{
                 borderRadius: `${progress/2}%`,
                 width: '250px',
                 height: '250px'
             }}>
            <ProgressBar/>
        </div>
    </>)
}

export function VSlider() {
    const progress = useContext(ProgressContext);
    return (<>
        <input min={0} max={100} value={progress}
               type="range" style={
            {transform: 'rotate(90deg) translateX(50px)'}}/>
    </>)
}

export function HSlider() {
    const progress = useContext(ProgressContext);
    return (<>
        <input type="range" min={0} max={100} value={progress}/>
    </>)
}

export function Spinner() {
    const progress = useContext(ProgressContext);
    return (<div>
        A number between 0 - 100
        <input className="form-control" type="number"
               min={0} max={100} value={progress}/>
    </div>)
}
