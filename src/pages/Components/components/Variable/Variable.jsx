import { useState } from 'react'

import './Variable.css'
function Variable({type, name, value, setValue}) {

    //let value = props.value
    //const [value, setValue] = useState(props.value || 0)

    return (
    <div className='counter-container'>
        <h3 className='title'>{name || "Counter"}</h3>
        <button className='btn btn-danger' onClick={() => setValue(value - 1)}>-</button>
        <span className='value'>{type && type === 'int' ? value : value.toFixed(2)}</span>
        <button className='btn btn-success' onClick={() =>setValue(value + 1)}>+</button>
    </div>
)
}

export default Variable;