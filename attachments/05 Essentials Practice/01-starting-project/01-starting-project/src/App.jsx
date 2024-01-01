
import { useState } from "react";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {
 const[inputs,setInputs] = useState({initial:'',annual:'',expected:'',duration:''})
  const dataIsValid = (inputs.initial>0 && inputs.annual>0 && inputs.expected>0 && inputs.duration>0);
  function handleChange(inputIdentifier,newVal){
    setInputs((prevInput)=>{
      return {
        ...prevInput,
        [inputIdentifier]:+newVal
      }
    });
    console.log(inputs);
  }
  
  return (
    <> <Header onChanging={handleChange} changedData={inputs}></Header>
       {dataIsValid ? <Table data={inputs}/> : <p className="center">Please Enter Valid Input values</p>} 
    </>
  )
}

export default App
