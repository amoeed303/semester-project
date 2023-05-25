import './styles/menu.css'
export default function Menu( props){
    console.log(props.dataarray);
    console.log(props.gates);
    console.log(props.gate2);

    //all gates matrices
    var plusGate = [[1 / Math.sqrt(2)], [1 / Math.sqrt(2)]];
    var minusgate = [[1 / Math.sqrt(2)],[ -1 / Math.sqrt(2)]];
    var H = [[1 / Math.sqrt(2), 1 / Math.sqrt(2)], [1 / Math.sqrt(2), -1 / Math.sqrt(2)]];
    var q1=[[0],[1]];
    var q2=[[0],[1]];
    if(props.dataarray.length>0){
        
        q1=  props.dataarray[0]==='1'?[[1],[0]]:[[0],[1]] ;
        q2=  props.dataarray[1]==='1'?[[1],[0]]:[[0],[1]] ;
       
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
      
    var matrix1 = [[1, 1], [1, -1]];
    // //   const matrix2 = [[1],[0]];
    // var len1=props.gates.length;
    // console.log(len1);
    // if(props.gates.length>0){
    //     var matrix1 = props.gates[len1-1]==='h'?H:props.gates[len1-1]==='+'?plusGate:props.gates[len1]==='-'?minusgate:q1;
        
    // }
    // Create an initial resultMatrix and calculationSteps array
  let resultMatrix = q1;
  let input=q1;
  const calculationSteps = [];
  let f=0;
  // Iterate over props.gates and perform matrix multiplication
  for (let i = 0; i < props.gates.length; i++) {
    const gate = props.gates[i];
    let gateMatrix;

    // Determine the corresponding matrix based on the gate value
    if (gate === "h") {
      gateMatrix = H;
    } else if (gate === "+") {
      gateMatrix = plusGate;
    } else if (gate === "-") {
      gateMatrix = minusgate;
    } else {
      gateMatrix = q1;
    }

    if(f==0){
            // Perform matrix multiplication
        const multiplicationResult = multiplyMatrices(gateMatrix,input);

        // Update the resultMatrix with the new multiplication result
        resultMatrix = multiplicationResult;

        // Store the intermediate result in calculationSteps
        calculationSteps.push({
        input,
        gateMatrix,
        resultMatrix,
        });
        console.log('in first time')
    }
    else{
        console.log("in else")
        input=resultMatrix;
        // Perform matrix multiplication
        const multiplicationResult = multiplyMatrices( gateMatrix,input);

        // Update the resultMatrix with the new multiplication result
        resultMatrix = multiplicationResult;

        // Store the intermediate result in calculationSteps
        calculationSteps.push({
        input,
        gateMatrix,
        resultMatrix,
        });
    }
    
    f++;
  }


      
    return(
        <>
        {/* ... Existing code ... */}
  
        {/* Render calculationSteps to display all intermediate calculations */}
        {calculationSteps.map((step, index) => (
          <div key={index}>
            <h4>Calculation {index + 1}</h4>
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
          <h4>Final Result</h4>
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
      </>
    );
}