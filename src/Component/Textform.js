import React, { useState } from 'react'

export default function Textform(props) {
    
    //this is the way to declare usestate
    const [text, setText] = useState("Enter your text here!!");
    const handleUpClick = () => {
        //console.log("Button Clicked");
        //to convert it in uppercase
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is Converted into Uppercase!!","success");
    }
    const handleLoClick = () => {
        
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text is Converted into Lowercase!!","success");
    }

    const handleOnChange = (e) => {
        //console.log("ON CHANGE");
        setText(e.target.value); //to change the text in textarea
    }

    //function to copy
    const handleCopy =()=>{
        let text=document.getElementById('mybox');
        navigator.clipboard.writeText(text.value);
         props.showAlert("Text is Copied!!","success");
    }
    //function to clear text
    const handleClear=()=>{
        setText("");
        props.showAlert("Text is Cleared!!","success");
    }
    //function to remove extra spaces 
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!!","success");
    }
    // function to remove default text while clicking text area
    // const removeText =()=>{
    //     setText("");
    // }

    return (
        <>

            <div className="mb-3 container my-3" style={{color:props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='light'?'black':'white'}} 
                    onChange={handleOnChange}  id="mybox" rows="8"></textarea>
            
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy To Clipboard</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 *text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>

                

            </div>
        </>

    )
}
