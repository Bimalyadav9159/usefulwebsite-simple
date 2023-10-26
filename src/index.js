import React from "react";
import ReactDOM  from "react-dom";
import './style.css';
import App from './App.js';
import MyButton from "./MyButton";
import Click from "./Click";

// Note: we can also write like this ;
// but



// function MyButton() {
//     return (
//       <button>
//         I'm a button
//       </button>
//     );
//   }
  
  export default function MyApp() {
    return (
      <div>
        {/* <h1 style={{backgroundColor: "blue"}}>Useful Website</h1>
        <p>Whic website do you want to open</p> */}
        <App/>
        <MyButton name="Google" />
        <Click/>
        <MyButton name= "Youtube" link="https://youtube.com" />
        <Click/>
      </div>
    );
  }
    
    



ReactDOM.render(<MyApp/>,document.getElementById("root"));