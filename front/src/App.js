import React, { useState } from 'react';
import './App.css';

function App() {

  const [name,setname] = useState("");
  const [email,setemail] = useState("");
  const [subject,setsubject] = useState("");
  const [message,setmessage] = useState("");

  function shandler(e){

    setsubject(e.target.value);



  }

  function nhandler(e){

    setname(e.target.value);
    
  }

  function ehandler(e){

    setemail(e.target.value);
    
  }


  function mhandler(e){

    setmessage(e.target.value);
    
  }


  function clhandler(){

    //First perform validation on the entered values


    const getAllData = async () => {
      try {
        const getPeople = await fetch(
          `${"http://localhost:4000/api/v1/createuser"}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              // Your data here
              name:name,
              email:email,
              subject:subject,
              message:message
            })
          }


        );

        console.log("Response ",getPeople);
        alert("Mail Sent");
  
      } catch (error) {
        console.log(error);
      }
    };

    getAllData();


  }



  return (
    <div className="App">

      <form>
        <label htmlFor='name'>Name : </label>
        <input id='name' type="text" onChange={nhandler}></input>

        <br/>

        <label htmlFor='mail'>Mail-Id : </label>
        <input id='mail' type="email" onChange={ehandler}></input>

        <br/>

        <label htmlFor='subject'>Subject : </label>
        <input id='subject' type="text" onChange={shandler} ></input>

        <br/>

        <label htmlFor='message'>Message : </label>
        <input id='message' type="text" onChange={mhandler}></input>

        <br/>


      </form>

      <br/>

      <br/>

      <br/>


      <button onClick={clhandler}>Send Mail</button>
      
    </div>
  );
}

export default App;
