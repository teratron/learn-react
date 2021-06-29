import React, {useEffect, useRef, useState} from 'react'

function useLogger(value) {
    useEffect(() => {
        console.log('Value changed: ', value)
    }, [value])
}

function useInput(initialValue) {
    //console.log('2')
    const [value, setValue] = useState(initialValue)
    const ref = useRef(null)

    function onChange(event) {
        setValue(event.target.value)
    }

    function clear() {
        setValue('')
    }

    function focused() {
        ref.current.focus()
        ref.current.style.backgroundColor = 'red'
    }

    return {
        attr: {
            ref,
            value,
            onChange
        },
        clear,
        focused
    }
}

function Hook() {
    //console.log('1')
    const input = useInput('')

    useLogger(input.attr.value)

    function handleClear() {
        input.clear()
        input.focused()
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
