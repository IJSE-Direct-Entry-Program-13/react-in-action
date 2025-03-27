import './Loop.css';

function Loop() {
    return (
        <>
            <h1>Loops in React</h1>
            {
                ['Kasun', 'Nuwan', 'Ruwan', 'Supun', 'Upul']
                    .map(((e, index) => {
                        const result = [];
                        result.push(<h1 key={index}>{index}. {e}</h1>);
                        if (index === 4) result.push(<h1>Names Count: 5</h1>);
                        return result;
                    }))
            }
            <hr/>
            {
                ['Kasun', 'Nuwan', 'Ruwan', 'Supun', 'Upul']
                    .map((e => {
                        return <h1>Hello {e}</h1>
                    }))
            }
            <hr/>
            {
                (()=>{
                    let x = 0;
                    const result = [];
                    while (x++ < 5){
                        result.push(<h1>Hello {x}</h1>);
                    }
                    return result;
                })()
            }
            <hr/>
            {
                ['Nuwan', 'Ruwan', 'Nimal', 'Supun']
                    .filter(e => e.startsWith("N"))
                    .map(e => <h1>{e}</h1>)
            }
        </>
    );
}

export default Loop;