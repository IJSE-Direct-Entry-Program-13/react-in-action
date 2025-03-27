import './App.css'
import {useRef, useState} from "react";

function App() {
    const [date, setDate] = useState('monday');
    const ref =
        useRef<HTMLSelectElement>(null);

    return (
        <>
            <h1>React: Template Syntax</h1>
            <hr/>
            <select ref={ref} value={date}
                    onChange={() => setDate(ref.current!.value)}>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
            </select>
            <h2>Selected date: {date.toUpperCase()}</h2>
            {
                (() => {
                    switch (date) {
                        case 'monday':
                            return <h1>Monday: Oh god! Five more days to suffer</h1>
                        case 'tues' + 'day':
                            return <h1>Tuesday: Another frustrating day</h1>;
                        case getDay():
                            return <h1>Wednesday: Is earth spinning? Why is it so slow?</h1>
                        case 'thursday':
                            return <h1>Thursday: C'mon can't help till tomorrow</h1>
                        case 'friday':
                            return <h1>Friday: Finally, time to relax</h1>
                        case 'saturday':
                        default:
                            // return (<>
                            //     <h1>Weekend: It is party time</h1>,
                            //     <h1>Weekend: It is fun</h1>
                            // </>);
                            return [
                                <h1>Weekend: It is party time</h1>,
                                <h1>Weekend: It is fun</h1>
                            ]
                    }
                })()
            }
            {myFn()}
        </>
    )

    function getDay() {
        return 'Wednesday';
    }

    function myFn(){
        switch (date) {
            case 'monday':
                return <h1>Monday: Oh god! Five more days to suffer</h1>
            case 'tues' + 'day':
                return <h1>Tuesday: Another frustrating day</h1>;
            case getDay():
                return <h1>Wednesday: Is earth spinning? Why is it so slow?</h1>
            case 'thursday':
                return <h1>Thursday: C'mon can't help till tomorrow</h1>
            case 'friday':
                return <h1>Friday: Finally, time to relax</h1>
            case 'saturday':
            default:
                // return (<>
                //     <h1>Weekend: It is party time</h1>,
                //     <h1>Weekend: It is fun</h1>
                // </>);
                return [
                    <h1>Weekend: It is party time</h1>,
                    <h1>Weekend: It is fun</h1>
                ]
        }
    }
}

export default App
