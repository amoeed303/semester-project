import "./styles/gates.css";
import logo from "./logo.png";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';


const Gates = ({firstLineGates, setFirstLineGates, secondLineGates, setSecondLineGates}) => {

  function plusBtnHandler1(){
    setFirstLineGates([...firstLineGates, '+'])
  }
  function plusBtnHandler2(){
    setSecondLineGates([...secondLineGates, '+'])
  }
  function HBtnHandler1() {
    setFirstLineGates([...firstLineGates, 'h'])
  }
  function HBtnHandler2() {
    setSecondLineGates([...secondLineGates, 'h'])
  }
  function YBtnHandler1() {
    setFirstLineGates([...firstLineGates, 'y'])
  }
  function YBtnHandler2() {
    setSecondLineGates([...secondLineGates, 'y'])
  }
  function ZBtnHandler1() {
    setFirstLineGates([...firstLineGates, 'z'])
  }
  function ZBtnHandler2() {
    setSecondLineGates([...secondLineGates, 'z'])
  }
  function MBtnHandler1(){
    setFirstLineGates([...firstLineGates, 'm'])
  }
  function MBtnHandler2(){
    setSecondLineGates([...secondLineGates, 'm'])
  }

  return (
    <>
      <div className="toolBox">
        <button         
        data-tooltip-id="plus-btn-handler" className="btn">+</button>
        <button data-tooltip-id="h-btn-handler"  className="btn">H</button>
        <button data-tooltip-id="y-btn-handler"  className="btn">Y</button>
        <button data-tooltip-id="z-btn-handler"  className="btn">Z</button>
        <button data-tooltip-id="m-btn-handler"  className="btn">M</button>
      </div>
      <Tooltip
        id="plus-btn-handler"
        effect="solid"
        place="bottom"
        clickable={true}
      >
        <div>
        <button className="line-btn" onClick={plusBtnHandler1}>
          1st GateLine
        </button>
        </div>
        <div>
        <button className="line-btn" onClick={plusBtnHandler2}>
          2nd GateLine
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
          1st GateLine
        </button>
        </div>
        <div>
        <button className="line-btn" onClick={HBtnHandler2}>
          2nd GateLine
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
          1st GateLine
        </button>
        </div>
        <div>
        <button className="line-btn" onClick={YBtnHandler2}>
          2nd GateLine
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
          1st GateLine
        </button>
        </div>
        <div>
        <button className="line-btn" onClick={ZBtnHandler2}>
          2nd GateLine
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
          1st GateLine
        </button>
        </div>
        <div>
        <button className="line-btn" onClick={MBtnHandler2}>
          2nd GateLine
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
