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
  return (
    <>
      <Nav />
      <Gates 
        secondLineGates={secondLineGates}
        firstLineGates={firstLineGates}
        setFirstLineGates={setFirstLineGates}
        setSecondLineGates={setSecondLineGates} 
      />
      <GateLine gates={firstLineGates} setGates={setFirstLineGates} />
      <GateLine gates={secondLineGates}  setGates={setSecondLineGates}/>
      <Menu />
      <MyForm />/
    </>
  );
}

export default App;
