import "./styles/gates.css";
import logo from "./logo.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Gates = ({
  firstLineGates,
  setFirstLineGates,
  secondLineGates,
  setSecondLineGates,
}) => {
  function cnotBtnHandler1() {
    setFirstLineGates([...firstLineGates, "."]);
  }
  function cnotBtnHandler2() {
    setSecondLineGates([...secondLineGates, "."]);
  }
  function xBtnHandler1() {
    setFirstLineGates([...firstLineGates, "x"]);
  }
  function xBtnHandler2() {
    setSecondLineGates([...secondLineGates, "x"]);
  }
  function plusBtnHandler1() {
    setFirstLineGates([...firstLineGates, "+"]);
  }
  function plusBtnHandler2() {
    setSecondLineGates([...secondLineGates, "+"]);
  }
  function HBtnHandler1() {
    setFirstLineGates([...firstLineGates, "H"]);
  }
  function HBtnHandler2() {
    setSecondLineGates([...secondLineGates, "H"]);
  }
  function YBtnHandler1() {
    setFirstLineGates([...firstLineGates, "y"]);
  }
  function YBtnHandler2() {
    setSecondLineGates([...secondLineGates, "y"]);
  }
  function ZBtnHandler1() {
    setFirstLineGates([...firstLineGates, "z"]);
  }
  function ZBtnHandler2() {
    setSecondLineGates([...secondLineGates, "z"]);
  }
  function MBtnHandler1() {
    setFirstLineGates([...firstLineGates, "-"]);
  }
  function MBtnHandler2() {
    setSecondLineGates([...secondLineGates, "-"]);
  }

  return (
    <>
      <div className="toolBox">
        <button data-tooltip-id="plus-btn-handler" className="btn">
          +
        </button>
        <button data-tooltip-id="cnot-btn-handler" className="btn">
          cnot
        </button>
        <button data-tooltip-id="h-btn-handler" className="btn">
          H
        </button>
        <button data-tooltip-id="x-btn-handler" className="btn">
          X
        </button>
        <button data-tooltip-id="y-btn-handler" className="btn">
          Y
        </button>
        <button data-tooltip-id="z-btn-handler" className="btn">
          Z
        </button>
        <button data-tooltip-id="m-btn-handler" className="btn">
          -
        </button>
      </div>
      <Tooltip
        id="plus-btn-handler"
        effect="solid"
        place="bottom"
        clickable={true}
      >
        <div>
          <button className="line-btn" onClick={plusBtnHandler1}>
            1st Qubit
          </button>
        </div>
        <div>
          <button className="line-btn" onClick={plusBtnHandler2}>
            2nd Qubit
          </button>
        </div>
      </Tooltip>
      <Tooltip
        id="h-btn-handler"
        effect="solid"
        place="bottom"
        clickable={true}
      >
        <div>
          <button className="line-btn" onClick={HBtnHandler1}>
            1st Qubit
          </button>
        </div>
        <div>
          <button className="line-btn" onClick={HBtnHandler2}>
            2nd Qubit
          </button>
        </div>
      </Tooltip>
      <Tooltip
        id="x-btn-handler"
        effect="solid"
        place="bottom"
        clickable={true}
      >
        <div>
          <button className="line-btn" onClick={xBtnHandler1}>
            1st Qubit
          </button>
        </div>
        <div>
          <button className="line-btn" onClick={xBtnHandler2}>
            2nd Qubit
          </button>
        </div>
      </Tooltip>
      <Tooltip
        id="y-btn-handler"
        effect="solid"
        place="bottom"
        clickable={true}
      >
        <div>
          <button className="line-btn" onClick={YBtnHandler1}>
            1st Qubit
          </button>
        </div>
        <div>
          <button className="line-btn" onClick={YBtnHandler2}>
            2nd Qubit
          </button>
        </div>
      </Tooltip>
      <Tooltip
        id="z-btn-handler"
        effect="solid"
        place="bottom"
        clickable={true}
      >
        <div>
          <button className="line-btn" onClick={ZBtnHandler1}>
            1st Qubit
          </button>
        </div>
        <div>
          <button className="line-btn" onClick={ZBtnHandler2}>
            2nd Qubit
          </button>
        </div>
      </Tooltip>
      <Tooltip
        id="m-btn-handler"
        effect="solid"
        place="bottom"
        clickable={true}
      >
        <div>
          <button className="line-btn" onClick={MBtnHandler1}>
            1st Qubit
          </button>
        </div>
        <div>
          <button className="line-btn" onClick={MBtnHandler2}>
            2nd Qubit
          </button>
        </div>
      </Tooltip>
      
      <Tooltip
        id="cnot-btn-handler"
        effect="solid"
        place="bottom"
        clickable={true}
      >
        <div>
          <button className="line-btn" onClick={cnotBtnHandler1}>
            1st Qubit
          </button>
        </div>
        <div>
          <button className="line-btn" onClick={cnotBtnHandler2}>
            2nd Qubit
          </button>
        </div>
      </Tooltip>
      <BlochSphere />
    </>
  );
};

const BlochSphere = () => {
  return <img src={logo} alt="" className="bloch-sphere" />;
};

export default Gates;
