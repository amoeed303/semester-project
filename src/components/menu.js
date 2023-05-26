import './styles/menu.css'
import React,{ useEffect } from 'react';
const Menu=( {dataarray,dataarray2,gates,gate2, setResult})=>{
    console.log(dataarray);
    console.log(gates);
    console.log(gate2);
    

    //all gates matrices
    var plusGate = [[1 / Math.sqrt(2)], [1 / Math.sqrt(2)]];
    var minusgate = [[1 / Math.sqrt(2)],[ -1 / Math.sqrt(2)]];
    var xgate=[[0,1],[1,0]];
    var ygate=[[0,3.14],[-3.14,0]];
    var zgate=[[1,0],[0,-1]];
    var cnotgate=[[1,0,0,0],[0,0,0,1],[0,0,1,0],[0,1,0,0]];
    var H = [[1 / Math.sqrt(2), 1 / Math.sqrt(2)], [1 / Math.sqrt(2), -1 / Math.sqrt(2)]];
    var q1=[[1],[0]];
    var q2=[[1],[0]];
    console.log(dataarray.q1);
    if(dataarray.q1>0){
        q1=  dataarray.q1==1?[[0],[1]]:[[1],[0]] ;
    }
    if(dataarray2.q2>0){
      q2=  dataarray2.q2==1?[[0],[1]] :[[1],[0]];
      
    }
    console.log(q1);
    console.log(q2);

    
    
    function multiplyMatrices(matrix1, matrix2) {
        const result = [];
        for (let i = 0; i < matrix1.length; i++) {
          const row = [];
          for (let j = 0; j < matrix2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrix1[0].length; k++) {
              sum += matrix1[i][k] * matrix2[k][j];
              console.log(sum)
            }
            row.push(sum);
          }
          result.push(row);
        }
        return result;
    }
    function kroneckerProduct(matrix1, matrix2) {
        const result = [];
      
        for (let i = 0; i < matrix1.length; i++) {
          for (let j = 0; j < matrix1[i].length; j++) {
            const newRow = [];
      
            for (let k = 0; k < matrix2.length; k++) {
              for (let l = 0; l < matrix2[k].length; l++) {
                newRow.push(matrix1[i][j] * matrix2[k][l]);
              }
            }
      
            result.push(newRow);
          }
        }
      
        // Flatten the result into a single column matrix
        const flattenedResult = result.flat(1);
        const columnMatrix = flattenedResult.map((value) => [value]);
      
        return columnMatrix;
    }
    
  
  let resultMatrix = q1;
  let resultMatrix2 = q2;
  // localStorage.setItem('resultMatrix', JSON.stringify(resultMatrix));
  // localStorage.setItem('resultMatrix2', JSON.stringify(resultMatrix2));
  
  let input=q1;
  let input1=q2;
  const calculationSteps = [];
  const calculationSteps2 = [];
  let f=0;
  let t=0;

  // Iterate over props.gates and perform matrix multiplication
  for (let i = 0; i < gates.length; i++) {
    const gate = gates[i];
    let gateMatrix;

    // Determine the corresponding matrix based on the gate value
    if (gate === "h") {
      gateMatrix = H;
    } else if (gate === "+") {
      gateMatrix = plusGate;
    } else if (gate === "-") {
      gateMatrix = minusgate;
    } else if (gate === "x") {
      gateMatrix = xgate;
    } else if (gate === "y") {
      gateMatrix = ygate;
    } else if (gate === "z") {
      gateMatrix = zgate;
    }else if (gate === ".") {
      
      gateMatrix = cnotgate;
      input=JSON.parse(localStorage.getItem('resultMatrix2'));
      
    } else {
      gateMatrix = q1;
      
    }

    if(f==0){
            // Perform matrix multiplication
        const multiplicationResult = multiplyMatrices(gateMatrix,input);

        // Update the resultMatrix with the new multiplication result
        resultMatrix = multiplicationResult;
        localStorage.setItem('resultMatrix', JSON.stringify(resultMatrix));

        // Store the intermediate result in calculationSteps
        calculationSteps.push({
        input,
        gateMatrix,
        resultMatrix,
        });
        console.log('in first time')
    }
    else if(gateMatrix==cnotgate){
      console.log("in else")
      
      input=kroneckerProduct(input,resultMatrix);
        // Perform matrix multiplication
        console.log(resultMatrix2);
        console.log(input);
        console.log(gateMatrix);
        const multiplicationResult = multiplyMatrices( gateMatrix,input);

        // Update the resultMatrix with the new multiplication result
        resultMatrix = multiplicationResult;
        localStorage.setItem('resultMatrix', JSON.stringify(resultMatrix));
        // Store the intermediate result in calculationSteps
        calculationSteps.push({
        input,
        gateMatrix,
        resultMatrix,
        });

    }
    else{
        console.log("in else")
        input=resultMatrix;
        // Perform matrix multiplication
        console.log(input);
        console.log(gateMatrix);
        const multiplicationResult = multiplyMatrices( gateMatrix,input);

        // Update the resultMatrix with the new multiplication result
        resultMatrix = multiplicationResult;
        localStorage.setItem('resultMatrix', JSON.stringify(resultMatrix));
        // Store the intermediate result in calculationSteps
        calculationSteps.push({
        input,
        gateMatrix,
        resultMatrix,
        });
    }
    
    f++;
  }

  for (let j = 0; j < gate2.length; j++) {
    const gate = gate2[j];
    let gateMatrix;

    // Determine the corresponding matrix based on the gate value
    if (gate === "h") {
      gateMatrix = H;
    } else if (gate === "+") {
      gateMatrix = plusGate;
    } else if (gate === "-") {
      gateMatrix = minusgate;
    } else if (gate === "x") {
      gateMatrix = xgate;
    } else if (gate === "y") {
      gateMatrix = ygate;
    } else if (gate === "z") {
      gateMatrix = zgate;
    }else if (gate === ".") {
      gateMatrix = cnotgate;
      input1=JSON.parse(localStorage.getItem('resultMatrix'));
    } else {
      gateMatrix = q1;
    }

    if(t==0){
            // Perform matrix multiplication
        const multiplicationResult2 = multiplyMatrices(gateMatrix,input1);
        
        // Update the resultMatrix with the new multiplication result
        resultMatrix2 = multiplicationResult2;
        localStorage.setItem('resultMatrix2', JSON.stringify(resultMatrix2));
        // setResult2([...res,resultMatrix2]);
        // Store the intermediate result in calculationSteps
        calculationSteps2.push({
        input1,
        gateMatrix,
        resultMatrix2,
        });
        console.log('in first time')
    }
    else if(gateMatrix==cnotgate){
      console.log(input1);
      input1=kroneckerProduct(resultMatrix2,input1);
      console.log(input1);
        // Perform matrix multiplication
        const multiplicationResult2 = multiplyMatrices( gateMatrix,input1);
        
        // Update the resultMatrix with the new multiplication result
        resultMatrix2 = multiplicationResult2;
        localStorage.setItem('resultMatrix2', JSON.stringify(resultMatrix2));

        // setResult2([...res,resultMatrix2]);
        // Store the intermediate result in calculationSteps
        calculationSteps2.push({
        input1,
        gateMatrix,
        resultMatrix2,
        });
    }
    else{
        console.log("in else")
        input1=resultMatrix2;
        // Perform matrix multiplication
        const multiplicationResult2 = multiplyMatrices( gateMatrix,input1);
        
        // Update the resultMatrix with the new multiplication result
        resultMatrix2 = multiplicationResult2;
        localStorage.setItem('resultMatrix2', JSON.stringify(resultMatrix2));

        // setResult2([...res,resultMatrix2]);
        // Store the intermediate result in calculationSteps
        calculationSteps2.push({
        input1,
        gateMatrix,
        resultMatrix2,
        });
    }
    
    t++;
  }
  
  
      
    return(
        <>
        <div className="menu">
          <h1>Calculations</h1>
            <div className="menu-box">
              <div className="left">
              <h3>Gateline 1</h3>
              
              {/* ... Existing code ... */}
        
              {/* Render calculationSteps to display all intermediate calculations */}
              {calculationSteps.map((step, index) => (
                <div key={index}>
                  <h4>state {index + 1}</h4>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <table>
                            {/* Display the current gate matrix */}
                            {step.gateMatrix.map((row, k) => (
                              <tr key={k}>
                                {row.map((value, l) => (
                                  <td key={l}>{value}</td>
                                ))}
                              </tr>
                            ))}
                          </table>
                        </td>
                        <td>&#x2715;</td>
                        <td>
                          <table>
                            {/* Display the result matrix */}
                            {step.input.map((row, k) => (
                              <tr key={k}>
                                {row.map((value, l) => (
                                  <td key={l}>{value}</td>
                                ))}
                              </tr>
                            ))}
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
        
              {/* Display the final result matrix */}
              <div>
                <h4>Final state</h4>
                <table>
                  {resultMatrix.map((row, k) => (
                    <tr key={k}>
                      {row.map((value, l) => (
                        <td key={l}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </table>
              </div>
              </div>
              <div className="right">
                <h3>Gateline 2</h3>
                {/* ... Existing code ... */}
        
              {/* Render calculationSteps to display all intermediate calculations */}
              {calculationSteps2.map((step, index) => (
                <div key={index}>
                  <h4>state {index + 1}</h4>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <table>
                            {/* Display the current gate matrix */}
                            {step.gateMatrix.map((row, k) => (
                              <tr key={k}>
                                {row.map((value, l) => (
                                  <td key={l}>{value}</td>
                                ))}
                              </tr>
                            ))}
                          </table>
                        </td>
                        <td>&#x2715;</td>
                        <td>
                          <table>
                            {/* Display the result matrix */}
                            {step.input1.map((row, k) => (
                              <tr key={k}>
                                {row.map((value, l) => (
                                  <td key={l}>{value}</td>
                                ))}
                              </tr>
                            ))}
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
        
              {/* Display the final result matrix */}
              <div>
                <h4>Final state</h4>
                <table>
                  
                  {resultMatrix2.map((row, k) => (
                    <tr key={k}>
                      {row.map((value, l) => (
                        <>
                        <td key={l}>{value}</td>
                        
                        </>
                      ))}
                    </tr>
                  ))}
                </table>
              </div>

              </div>

            </div>
        </div>

      </>
    );
}

export default Menu;