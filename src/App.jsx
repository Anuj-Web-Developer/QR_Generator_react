import React, { useState } from "react";

const App = () => {

const [text, setText] = useState("");
const [data, setData] = useState();

const handleChange = (event) =>{
  setText(event.target.value);
};

 const  clickHandle = async ()=>{
  if (text.trim()===""){
    alert("Please enter text to generate a QR code!");
    return;

  }

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    text
)}`;

  setData(qrUrl);
  setText("");
}


  return (
    <>
    
      <div
        style={{
          border: "2px solid black",
          margin: "30%",
          display: "flex",
          justifyContent:"center",
          flexDirection:"column",
          alignContent:"center",
          padding: "20px"
        }}
      >
        <h1 className="text-red-500">QR Generator </h1><br/>
        <input
        type="text"
        placeholder="Enter text..."
        onChange = {handleChange}
        value={text}
        style={{
          padding:"10px",
          border:"1px solid gray",
          borderRadius:"5px",
          textAlign:"center",
          backgroundColor:"lightblue"
        }}
        />
        <button
        style={{
          border:"1px solid black",
          borderRadius:"5px",
          padding:"3px",
          marginTop:"10px",
          backgroundColor:"lightgray"
        }}
        onClick={clickHandle}
        >Click Here</button>

{data && (
          <div 
          style={{
            display:"flex", 
            justifyContent:"center",
            marginTop:"5%"
          }}>
            <img src={data} alt="QR Code" />
            
          </div>
        )}
        
      </div>
    </>
  );
};
export default App;
