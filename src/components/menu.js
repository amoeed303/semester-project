import './styles/menu.css'
export default function Menu( props){
    console.log(props.gates);
    if(props.gates.length>0){
        let q1=document.getElementById('q1');
        var q=  props.gates[0]?[[1,0]]:[[0,1]] ;

    }
    else{

    }
    function multiplyMatrices(matrix1, matrix2) {
        const result = [];
        for (let i = 0; i < matrix1.length; i++) {
          const row = [];
          for (let j = 0; j < matrix2[0].length; j++) {
            let sum = 0;
            console.log(sum)
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
      
      const matrix1 = [[1, 1], [1, -1]];
      const matrix2 = [[1],[0]];
      const result = multiplyMatrices(matrix1, matrix2);
    return(
        <>
        <div className="menu">
            <h1>Calculations</h1>
            <div className="menu-box">
            <div>
                <h4>Qubit 1=H|0></h4>
                <table>
                    {/* {matrix1.map((row, i) => ( */}
                    {/* <tr key={i}> */}
                    <tr>
                        <td id='1st'>
                            <table id='matrix1'>
                            {matrix1.map((row, k) => (
                                <tr key={k}>
                                    {/* {k===0?<td></td>:<td>1/2</td>} */}
                                {row.map((value, l) => (
                                    <td key={l}>{value}</td>
                                ))}
                                </tr>
                            ))}
                            </table>
                        </td>
                        {/* {row.map((value, j) => (
                        <td key={j}>{value}</td>
                        ))} */}
                        {/* {i === 0 ?  : null} */}
                            <td>&#x2715;</td>
                        {/* {i === 0 ? ( */}
                        <td>
                            <table id='2nd matrix'>
                            {matrix2.map((row, k) => (
                                <tr key={k}>
                                {row.map((value, l) => (
                                    <td key={l}>{value}</td>
                                ))}
                                </tr>
                            ))}
                            </table>
                        </td>
                        {/* ) : null} */}
                    </tr>
                    {/* ))} */}
                </table>
                <table id='result'>
                    <p>result:</p>
                    {result.map((row, i) => (
                    <tr key={i}>
                        {row.map((value, j) => (
                        <td key={j}>{value}</td>
                        ))}
                    </tr>
                    ))}
                </table>
            </div>
            </div>

        </div>
        </>
    )
}