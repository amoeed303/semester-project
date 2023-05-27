import "./styles/gateline.css";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const GateLine2 = ({ gates, setGates,dataarray ,setDataArray}) => {
  const [bit, setBit] = useState(0);
  let clickHandler = () => {
    if (bit === 0) {
      setBit(1);
      setDataArray({ q2: "1"});
    } else {
      setBit(0);
      setDataArray({ q2: "0"});
      
    }
  };
  

  return (
    <>
    <div className="gateline">
      <h1 className="h1" onClick={clickHandler}>
        q1{`|`}
        {bit}
        {`>`}
      </h1>
      <div className="line-box"><span className="line">------</span>
        {gates?.map((gate, idx) => (
          <>
          <Gate setGates={setGates} index={idx} gate={gate} gates={gates} />
          <span className="line">------</span>
          </>
        ))}
        
      </div>
    </div>
    
    </>

  );
};

const Gate = ({ gates, gate, index, setGates }) => {
  console.log(gate);
  console.log(index);

  function leftHandler() {
    if (index > 0) {
      let temp = gates[index];
      let newArr = [...gates]; // make a copy of the array

      newArr[index] = newArr[index - 1];
      newArr[index - 1] = temp;
      console.log(newArr);
      setGates(newArr);
    }
  }

  function rightHandler(e) {
    console.log(gate);
    console.log(index);

    if (index < gates.length - 1) {
      let temp = gates[index];
      let newArr = [...gates]; // make a copy of the array

      newArr[index] = newArr[index + 1];
      newArr[index + 1] = temp;
      console.log(newArr);
      setGates(newArr);
    }
  }

  return (
    <>
      <div data-tooltip-id={`${index}`} className="gate-box">
        <span className="span-gate">{gate}</span>
      </div>
      {gate === "." ? (
        <>
        <Tooltip id={`${index}`} effect="solid" place="bottom" clickable={true}>
          <div>
            <button className="line-btn" onClick={leftHandler}>
              Move Left
            </button>
          </div>
          <div>
            <button className="line-btn" onClick={rightHandler}>
              Move Right
            </button>
            <button className="line-btn">Place target</button>
          </div>
        </Tooltip>
        </>
      ) : (
        <Tooltip id={`${index}`} effect="solid" place="bottom" clickable={true}>
          <div>
            <button className="line-btn" onClick={leftHandler}>
              Move Left
            </button>
          </div>
          <div>
            <button className="line-btn" onClick={rightHandler}>
              Move Right
            </button>
          </div>
        </Tooltip>
      )}
      
    </>
  );
};

export default GateLine2;
