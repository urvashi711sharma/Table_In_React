import React, { useState } from "react";
import 'semantic-ui-css/semantic.min.css'
import "./components/style.css";
import TableUsingBootstrap from "./components/TableUsingBootstrap";
// import Input from "./components/input";
// import Table from "./components/Table";
// import TableUsingBootstrap2 from "./components/TableUsingBootstrap2";

function App() {
  // const [item, setItem] = useState('');
  // const [boxColor, setBoxColor] = useState('');
  const [visiblity,setvisiblity] = useState(false);

  // const handleEvent = (event) => {
  //   const newItem=event.target.value;
  //   console.log('the color is:', event.target.value);
  //   setItem(newItem)
  //   setvisiblity(newItem)
  //   setBoxColor(newItem)
  // }
  const handelKeyDown=(event)=>{
    if (event.key === 'enter'){
      setvisiblity(true)
    }
  }
  
  // const boxstyle={
  //   height: '200px',
  //   width: '250px',
  //   background: boxColor,
    
  // }
  return (
    <>
      {/* <Input
        item={item}
        setItem={setItem}
        handleEvent={handleEvent}
        handelKeyDown={handelKeyDown}
        boxstyle={boxstyle}
      /> */}
      {/* <Table
      handelKeyDown={handelKeyDown}
      /> */}
      <TableUsingBootstrap/>
      {/* <App/> */}
    </>
  );
}

export default App;
