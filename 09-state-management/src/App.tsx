import './App.css'

export function App() {
    return (
        <>
            <h1 className="p-2 text-center">React: State Management</h1>
            <div className="d-flex p-2 justify-content-between align-items-center">
                <Spinner/>
                <h2 className="flex-grow-1">Progress 10%</h2>
            </div>
            <div className="d-flex mt-2 p-2">
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
    return (<div style={{
        width: '200px',
        height: '10px',
        backgroundColor: 'white'
    }}>
        <div style={{
            height: '100%',
            backgroundColor: 'red',
            width: '20%'
        }}></div>
    </div>)
}

export function ProgressWrapper() {
    return (<>
        <div className="border bg-primary-subtle d-flex
        justify-content-center align-items-center"
             style={{
                 width: '250px',
                 height: '250px'
             }}>
            <ProgressBar/>
        </div>
    </>)
}

export function VSlider() {
    return (<>
        <input min={0} max={100}
               type="range" style={
            {transform: 'rotate(90deg) translateX(50%)'}}/>
    </>)
}

export function HSlider() {
    return (<>
        <input type="range" min={0} max={100}/>
    </>)
}

export function Spinner() {
    return (<>
        <input className="form-control" type="number"
               min={0} max={100}/>
    </>)
}
