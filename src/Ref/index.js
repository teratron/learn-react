import React, { useState, useEffect, useRef } from 'react'

function Hook() {
    const [value, setValue] = useState('')
    const prevValue = useRef('')
    const renderCount = useRef(1)
    const inputRef = useRef(null)

    useEffect(() => {
        renderCount.current++
    })

    useEffect(() => {
        prevValue.current = value
    }, [value])

    return (
        <div>
            <h1>Количество рендеров: {renderCount.current}</h1>
            <h2>Прошлое состояние: {prevValue.current}</h2>
            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
            <button onClick={() => inputRef.current.focus()}>Фокус</button>
        </div>
    )
}

export default Hook
