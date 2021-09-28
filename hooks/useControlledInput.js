import React from "react";

export default function Input(initValue) {
    var [value,setValue] = React.useState(initValue)
    var handleChange = (evt) => {
        setValue(evt.target.value)
    }
    var reset = () => {
        setValue('')
    }
    return {value,reset,handleChange}
}
