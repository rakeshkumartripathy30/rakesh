let customerName: string = "John Doe";
let creditScore: number = 720;
let income: number = 55000.0;
let isEmployed: boolean = true;
let debtToIncomeRatio: number = 35.0;
function checkLoanEligibility(
    customerName: string,
    creditScore: number,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number
): void
{


    if (creditScore > 750) {
        console.log(`${customerName} is eligible: Loan Approved `);
    } else if (creditScore >= 650 && creditScore <= 750) {
       
        if (income >= 50000) {
           
            if (isEmployed) {
    
                switch (true) {
                    case (debtToIncomeRatio < 40):
                        console.log(`${customerName} is eligible: Loan Approved`);
                        break;
                    default:
                        console.log(`${customerName} is not eligible: Loan Denied`);
                        break;
                }
            } else {
                console.log(`${customerName} is not eligible`);
            }
        } else {
            console.log(`${customerName} is not eligible`);
        }
    } else {
        console.log(`${customerName} is not eligible`);
    }
}

checkLoanEligibility(customerName, creditScore, income, isEmployed, debtToIncomeRatio);
