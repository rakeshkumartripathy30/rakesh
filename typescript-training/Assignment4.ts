let transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

let creditCount: number = 0;
let debitCount: number = 0;
let totalCredit: number = 0;
let totalDebit: number = 0;
let suspiciousCount: number = 0;

for (let i = 0; i < transactions.length; i++) {
    let amount = transactions[i];  

    if (amount > 0) {              // credit case
        creditCount = creditCount + 1;
        totalCredit = totalCredit + amount;

        if (amount > 10000) {      // suspicious credit
            console.log("Suspicious credit transaction:", amount);
            suspiciousCount = suspiciousCount + 1;
        }
    } else {                       // debit case
        debitCount = debitCount + 1;
        totalDebit = totalDebit + (-amount); 

        if (amount < -10000) {     // suspicious debit
            console.log("Suspicious debit transaction:", amount);
            suspiciousCount = suspiciousCount + 1;
        }
    }
}

let balance: number = totalCredit - totalDebit;

console.log("Total Credit Transactions:", creditCount);
console.log("Total Debit Transactions:", debitCount);
console.log("Total Amount Credited:", totalCredit);
console.log("Total Amount Debited:", totalDebit);
console.log("Remaining Balance:", balance);
console.log("Total Suspicious Transactions:", suspiciousCount);
