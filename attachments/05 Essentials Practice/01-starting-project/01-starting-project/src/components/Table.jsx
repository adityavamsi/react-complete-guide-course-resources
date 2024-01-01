import { formatter } from "../util/investment";
import calculateInvestmentResults from "../util/investment"; 

export default function Table({data}){
    
    const tableData = calculateInvestmentResults({
        initialInvestment:data.initial,annualInvestment:data.annual,expectedReturn:data.expected,duration:data.duration    })
    console.log(tableData);
    const initialInvestment = tableData[0].valueEndOfYear - tableData[0].interest - tableData[0].annualInvestment; 
    
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((dataObj)=> {
                    const totalInterest = dataObj.valueEndOfYear - dataObj.annualInvestment * dataObj.year - initialInvestment;
                    const totalAmountInvested = dataObj.valueEndOfYear - totalInterest;
                    return(
                        <tr key={dataObj.year}>
                            <td>{dataObj.year}</td>
                            <td>{formatter.format(dataObj.valueEndOfYear)}</td>
                            <td>{formatter.format(dataObj.interest)}</td>                        
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>

                        </tr>
                    )
                })}
                
            </tbody>
        </table>
    );
}