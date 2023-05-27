import React, { useState, useEffect } from "react";

const ModalScreen = ({ onStart }) => {
  return (
    <div className="splash-screen">
      <h1>Welcome to Qubitrix</h1>
      <h1>disclaimer:</h1>
      <ol>
        <li>
          1. This website is in beta mode and may have limitations and potential
          inaccuracies.
        </li>
        <li>2. Calculations are currently limited to two qubits.</li>
        <li>
          3. We are working on improving accuracy and expanding capabilities.
        </li>
        <li>
          4. Please note that results may not reflect precise real-world quantum
          computations.
        </li>
        <li>
          5. Use for educational purposes and avoid critical or production-level
          calculations.
        </li>
      </ol>

      <button onClick={onStart} className="spbutton">
        Dive into Qubitrix
      </button>
    </div>
  );
};

export default ModalScreen;
