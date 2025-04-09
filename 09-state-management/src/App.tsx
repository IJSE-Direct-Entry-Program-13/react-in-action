import './App.css'
import {useContext, useRef} from "react";
import {ProgressContext, useProgress} from "./ProgressProvider.tsx";

export function App() {
    const progress = useContext(ProgressContext);

    return (
        <>
            <h1 className="p-2 text-center">React: State Management</h1>
            <div className="d-flex p-2 justi
            fy-content-between align-items-center">
                <Spinner/>
                <h2 className="flex-grow-1 text-center">
                    Progress {progress}%
                </h2>
            </div>
            <div className="d-flex p-2">
                <HSlider/>
                <VSlider/>
            </div>
            <div className="d-flex p-2 justify-content-center mt-5 pt-5">
                <ProgressWrapper/>
            </div>
        </>
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
                 borderRadius: `${progress / 2}%`,
                 width: '250px',
                 height: '250px'
             }}>
            <ProgressBar/>
        </div>
    </>)
}

export function VSlider() {
    // const progress = useContext(ProgressContext);
    // const setProgress =
    //     useContext(SetProgressContext)!;
    const [progress, setProgress] = useProgress();
    const ref =
        useRef<HTMLInputElement>(null);
    return (<>
        <input min={0} max={100} value={progress}
               ref={ref}
               onInput={() => setProgress(+ref.current!.value)}
               type="range" style={
            {transform: 'rotate(90deg) translateX(50px)'}}/>
    </>)
}

export function HSlider() {
    const [progress, setProgress] = useProgress();
    const ref
        = useRef<HTMLInputElement>(null);
    return (<>
        <input ref={ref}
               onInput={() => setProgress(+ref.current!.value)}
               type="range" min={0} max={100} value={progress}/>
    </>)
}

export function Spinner() {
    const [progress, setProgress] = useProgress();
    const ref = useRef<HTMLInputElement>(null);

    return (<div>
        A number between 0 - 100
        <input onInput={() => {
            setProgress!(+ref.current!.value)
        }}
               ref={ref} className="form-control" type="number"
               min={0} max={100} value={progress}/>
    </div>)
}
