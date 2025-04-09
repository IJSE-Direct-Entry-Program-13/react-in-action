import './App.css'
import {useRef, useState} from "react";
import {useForm} from "react-hook-form";

function App() {
    const txtRef1 =
        useRef<HTMLInputElement>(null);
    const [text, setText] = useState('ijse');
    const {register, watch, getFieldState} = useForm({
        mode: "onChange"
    });

    return (
        <>
            <h1 className="p-2 text-center">React Hook Forms</h1>
            <h3 className="text-center">Uncontrolled Form Element</h3>

            <div className="p-2">
                <input ref={txtRef1}
                       placeholder="Enter something here"
                       className="form-control text-center"
                       type="text"/>
                <p className="pt-2 text-center">
                    {txtRef1.current?.value}
                </p>
            </div>
            <h3 className="text-center">Controlled Form Element</h3>
            <div className="p-2">
                <input value={text}
                       onInput={(e)=>
                           setText((e.target as HTMLInputElement).value)}
                       placeholder="Enter something here"
                       className="form-control text-center"
                       type="text"/>
                <p className="pt-2 text-center">
                    {text}
                </p>
            </div>

            <h3 className="text-center">React Hook Forms</h3>
            <div className="p-2">
                <input {...register('txt', {value: 'ijse',
                        minLength: 4, required: true})}
                       placeholder="Enter something here"
                       className="form-control text-center"
                       type="text"/>
                <p className="pt-2 text-center">
                    {watch('txt')} <br />
                    {getFieldState('txt').invalid ? 'Invalid': 'Valid'}
                </p>
            </div>
        </>
    )
}

export default App
