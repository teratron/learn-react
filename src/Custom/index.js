import React, { useRef, useEffect, useState } from 'react'

function useLogger(value) {
    useEffect(() => {
        console.log('Value changed: ', value)
    }, [value])
}

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)
    const ref = useRef(null)

    function onChange(event) {
        setValue(event.target.value)
    }

    function clear() {
        setValue('')
    }

    function focus() {
        ref.current.focus()
    }

    return {
        attr: {
            ref,
            value,
            onChange
        },
        clear,
        focus
    }
}

function Hook() {
    const input = useInput('')

    useLogger(input.attr.value)

    function handleClear() {
        input.clear()
        input.focus()
    }

    return (
        <div>
            <input type="text" {...input.attr} />
            <button onClick={handleClear}>Очистить</button>
            <h1>{input.attr.value}</h1>
        </div>
    )
}

export default Hook
