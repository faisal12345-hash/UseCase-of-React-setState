import React, { useState } from 'react';

function TextForm(props) {
    const [text, setText] = useState(" ")

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to upper case","success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to lower case","success");
    }
    const handleClear = () => {
        setText("");
        props.showAlert("Text cleared","success")
    }
    const handleCopy =()=> {
        var text=document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied","success")
    }
    const handleExtraSpace = ()=> {
        let newText =text.split(/[ ]*/);
        setText(newText.join(""))
        props.showAlert("Extra spaces removed","success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className='container'
                style={{color: props.mode==="dark"?"white":"#042743"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        onChange={handleOnChange}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="8"
                        style={{bacgroundColor: props.mode==="dark"?"grey":"white"}}
                        value={text}>
                    </textarea>
                </div>
                <button
                    onClick={handleUpClick}
                    className="btn btn-primary m-2">
                    Conert to Uppercase
                </button>
                <button
                    onClick={handleLowClick}
                    className="btn btn-primary m-2">
                    Conert to Lowercase
                </button>
                <button
                    onClick={handleClear}
                    className="btn btn-primary m-2">
                    Clear Text
                </button>
                <button
                    onClick={handleCopy}
                    className="btn btn-primary m-2">
                    Copy Text
                </button>
                <button
                    onClick={handleExtraSpace}
                    className="btn btn-primary m-2">
                    Remove Extra space
                </button>
            </div>
            <div className="container my-3" 
            style={{color: props.mode==="dark"?"white":"#042743"}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>

            </div>
        </>
    )
}

export default TextForm;
