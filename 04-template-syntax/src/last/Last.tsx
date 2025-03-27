import './Last.css';
import {useState} from "react";

function Last() {
    const [flag1, setFlag1] = useState(true);
    const [flag2, setFlag2] = useState(true);

    function myFn(){
        if (flag1)
            return (<>
                <h1>Flag 1</h1>
                <h1>true</h1>
                {flag2 && <h1>Flag 2</h1>}
            </>)
        else if (flag2)
            return (<>
                <h1>Flag 2</h1>
                <h1>true</h1>
            </>)
        else
            return (<>
                <h1>No Flags</h1>
            </>)
    }

    return (
        <>
            <h1>Complex Conditional Rendering</h1>
            <label><input type='checkbox' checked={flag1}
                          onInput={() => setFlag1(!flag1)}/>
                Flag 1
            </label>
            <label><input type='checkbox' checked={flag2}
                          onInput={() => setFlag2(!flag2)}/>
                Flag 2
            </label>
            {myFn()}
            <hr/>
            {
                (()=>{
                    if (flag1)
                        return (<>
                            <h1>Flag 1</h1>
                            <h1>true</h1>
                            {flag2 && <h1>Flag 2</h1>}
                        </>)
                    else if (flag2)
                        return (<>
                            <h1>Flag 2</h1>
                            <h1>true</h1>
                        </>)
                    else
                        return (<>
                            <h1>No Flags</h1>
                        </>)
                })()
            }
            <hr/>
            {
                flag1 ?
                    (<>
                        <h1>Flag 1</h1>
                        <h1>true</h1>
                        {flag2 && <h1>Flag 2</h1>}
                    </>)
                : flag2 ?
                    (<>
                        <h1>Flag 2</h1>
                        <h1>true</h1>
                    </>)
                :
                <h1>No Flags</h1>
            }
        </>
    );
}

export default Last;