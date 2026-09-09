import { useEffect,useState } from "react";

export function EMICalculator(){

    const [loanAmount, setLoanAmount] = useState(50000);
    const [interestRate, setInterestRate] = useState(10);
    const [loanTenure, setLoanTenure] = useState(15);   

    useEffect(()=>{

    },[])

    function handleLoanAmountChange(e){
        setLoanAmount(e.target.value);
    }

    function handleInterestRateChange(e)  {
        setInterestRate(e.target.value);
    }

    function handleLoanTenureChange(e){
        setLoanTenure(e.target.value);
    }

    return(
        <div className="container-fluid p-4">
             <div className="d-flex row mt-2 justify-content-between">
                <div className="col-5">
                    <div className="row ">
                    <div className="d-flex justify-content-between">
                    <div>
                        <label className="form-label fw-bold">Loan Amount</label>
                    </div>
                    <div>
                        <input type="number" className="form-control mx-3" value={loanAmount} onChange={handleLoanAmountChange} />
                    </div>
                    </div>
                    </div>
                    <div>
                        <input type="range" className="form-range mx-5" value={loanAmount} onChange={handleLoanAmountChange} min="10000" max="1000000" defaultValue="50000" />
                    </div>
                    <div>
                            <span>&#8377; 25,000/-</span>
                            <span className="float-end">&#8377; 10,00,000/-</span>
                    </div>
                    <div class="row my-3">
                    <div className="d-flex justify-content-between">
                    <div>
                        <label className="form-label fw-bold">Interest %</label>
                    </div>
                    <div>
                        <input type="number" value={interestRate} onChange={handleInterestRateChange} className="form-control mx-3" />
                    </div>
                    </div>
                    </div>
                    <div>
                        <input type="range" value={interestRate} onChange={handleInterestRateChange} className="form-range mx-5" min="5" max="20" defaultValue="10" />
                    </div>
                    <div>
                            <span>5%</span>
                            <span className="float-end">20%</span>
                    </div>
                    <div class="row my-3">
                    <div className="d-flex justify-content-between">
                    <div>
                        <label className="form-label fw-bold">Loan Tenure (in Years)</label>
                    </div>
                    <div>
                        <input type="number" value={loanTenure} onChange={handleLoanTenureChange} className="form-control mx-3" />
                    </div>
                    </div>
                    <div>
                        <input type="range" value={loanTenure} onChange={handleLoanTenureChange} className="form-range mx-5" min="1" max="30" defaultValue="15" />
                    </div>
                    <div>
                            <span>1 Year</span>
                            <span className="float-end">30 Years</span> 
                    </div>  
                    </div>      

                    
                </div>
            <div className="col-6">
                <h3 className="text-primary">EMI Details</h3>
                <hr />
                <p>Loan Amount : &#8377; {loanAmount}/-</p>
                <p>Interest Rate : {interestRate} %</p>
                <p>Loan Tenure : {loanTenure} Years</p>
                <h4 className="text-success">Estimated EMI : &#8377; {Math.round((loanAmount + (loanAmount * interestRate * loanTenure)/100)/(loanTenure*12))}/-</h4>
            </div>
                    
            </div>
            
        </div>
    )
}