import Nav from "./components/nav";
import Gates from "./components/gates";
import GateLine from "./components/gateline";
import Menu from "./components/menu";
import MyForm from "./components/myform";
import { useState } from "react";
//importing  components for menu bar routing

function App() {
  const [firstLineGates, setFirstLineGates] = useState([]) // stack of gates
  const [secondLineGates, setSecondLineGates] = useState([]) // stack of gates
  const [dataArray, setDataArray] = useState([]);

  const clickhandler = (newData) => {
    setDataArray([...dataArray, newData]);
  };
  console.log(dataArray);
  console.log(firstLineGates);
  return (
    <>
      <Nav />
      <Gates 
        secondLineGates={secondLineGates}
        firstLineGates={firstLineGates}
        setFirstLineGates={setFirstLineGates}
        setSecondLineGates={setSecondLineGates} 
      />
      
      <GateLine dataarray={dataArray} setDataArray={setDataArray} gates={firstLineGates} setGates={setFirstLineGates} />
      <GateLine dataarray={dataArray} setDataArray={setDataArray}  setGates={setSecondLineGates}/>
      <Menu gates={firstLineGates} gate2={secondLineGates} dataarray={dataArray}/>
      <MyForm />
      <div>testign div</div>
    </>
    
  );
}

export default App;
