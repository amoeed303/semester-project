import "./styles/myform.css";
import React from "react";
import bellstate from "../images/bell.png";
import bell1 from "../images/bellstate1.png";
import bell2 from "../images/bellstate2.png";
import bell3 from "../images/bellstate3.png";
import bell4 from "../images/bellstate4.png";

function MyForm() {
  return (
    <>
      <h1>The Bell States</h1>
      <p>
        Bell states are the four states that can be created when two qubits are
        maximally entangled. The four states are represented as so:{" "}
      </p>
      <img src={bellstate} alt="bell states" />
      <div className="bg-container">
        <div className="grid-container">
          <img src={bell1} alt="bell 1" className="img grid-item" />
          <img src={bell2} alt="bell 2" className="img grid-item" />
          <img src={bell3} alt="bell 3" className="img grid-item" />
          <img src={bell4} alt="bell 4" className="img grid-item" />
        </div>
      </div>
      <h4>
        For more info about Entanglement visit :{" "}
        <a
          href="https://quantumcomputinguk.org/tutorials/introduction-to-bell-states"
          target="_blank"
        >
          Into to bell states
        </a>
      </h4>
      <h4>
        Explore Quantum Circuits in Simulated Enviorment in :{" "}
        <a href="https://qiskit.org/" target="_blank">
          Qiskit
        </a>
      </h4>
      <h4>
        Vislulaize Quantum Circuits and bloch Sphere in :{" "}
        <a href="https://algassert.com/quirk" target="_blank">
          quirk Simulator
        </a>
      </h4>
    </>
  );
}

export default MyForm;
