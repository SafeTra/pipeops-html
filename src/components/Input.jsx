import { useState } from "react";

const Input = ({label, name, placeholder, width = 'w-100'}) => {
    const [inputText, setInputText] = useState("");

    return (
    <div className='input d-flex flex-column align-start'>
        {label && <label>{label}</label>}
        <input required className={width} name={name} value={inputText} onChange={e => setInputText(e.target.value)} placeholder={placeholder}/>
    </div>
    );
}

export default Input;