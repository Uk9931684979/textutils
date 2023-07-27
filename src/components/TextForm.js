import React, {useState} from "react"


export default function TextForm(props) {
  const handaleUpClick = ()=>{
    // console.log("Uppercase was clicked"+ text);
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","Success");
  }
  const handaleLowClick = ()=>{
    // console.log("Lowercase was clicked"+ text);
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","Success");
  }
  const handaleClearClick = ()=>{
    let newText='';
    setText(newText); props.showAlert("Clear Text","Success");
  }
  const handaleCopy= ()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy text","Success");
  }
  const handaleExtraSpaces = ()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Spaces","Success");
    
  }
  const handaleOnChange = (event)=>{
    // console.log("On Change"); 
    setText(event.target.value);
  }
    const [text, setText] = useState('');
    //text="new text";
    // wrong way to change the state
   
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#085584'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="Form Control" value = {text} onChange={handaleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'black' }} id="myBox"rows="10" cols="100"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick= {handaleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick= {handaleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1" onClick= {handaleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick= {handaleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick= {handaleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summry</h2>
      <p>{text.split(" ").length}words and {text.length-1} characters </p>
      <p>
        {0.008*text.split(" ").length} minutes time take to read it
      </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter somthing on the above textbox for prevew it here"}</p>
    </div>
    </>
  );
}
 