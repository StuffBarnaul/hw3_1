import React, {useEffect, useState} from "react";

function FunctionComponent(props) {

    console.log('FunctionComponent')

    const [q1, setQ1] = useState(0)

    useEffect(() => {
        console.log('useEffect')
    }, [q1])

    const handler = () => {
        let val = q1
        val++
        setQ1(val)
    }

    return(
        <>
            <div className={"App-link"}>Video1 - Function Component</div>
            <div>
                <button onClick={handler}>Button</button>
            </div>
            <div>{q1}</div>
            <div>{props.q2}</div>
        </>
    )

}

export default FunctionComponent