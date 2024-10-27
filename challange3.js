// function to calculate PAYE tax
function calculatePAYE(taxableIncome) {
    let tax;
    if (taxableIncome <= 24000) {
        tax = taxableIncome * 0.1;
    } else if (taxableIncome <= 32333) {
        tax = 24000 * 0.1 + (taxableIncome - 24000) * 0.25;
    } else if (taxableIncome <= 500000) {
        tax = 24000 * 0.1 + (32333 - 24000) * 0.25 + (taxableIncome - 32333) * 0.3;
    } else if (taxableIncome <= 800000) {
        tax = 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.3 + (taxableIncome - 500000) * 0.325;
    } else {
        tax = 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.3 + (800000 - 500000) * 0.325 + (taxableIncome - 800000) * 0.35;
    }
    return tax;
}

// function to calculate NHIF deduction based on gross salary
const calculateNHIF = function (grossSalary) {
    if (grossSalary <= 5999) return 150;
    else if (grossSalary <= 7999) return 300;
    else if (grossSalary <= 11999) return 400;
    else if (grossSalary <= 14999) return 500;
    else if (grossSalary <= 19999) return 600;
    else if (grossSalary <= 24999) return 750;
    else if (grossSalary <= 29999) return 850;
    else if (grossSalary <= 34999) return 900;
    else if (grossSalary <= 39999) return 950;
    else if (grossSalary <= 44999) return 1000;
    else if (grossSalary <= 49999) return 1100;
    else if (grossSalary <= 59999) return 1200;
    else if (grossSalary <= 69999) return 1300;
    else if (grossSalary <= 79999) return 1400;
    else if (grossSalary <= 89999) return 1500;
    else if (grossSalary <= 99999) return 1600;
    else return 1700;
};

// function to calculate NSSF deduction
const calculateNSSF = function (grossSalary) {
    return Math.min(grossSalary * 0.06, 1080);
};

//  function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payeeTax = calculatePAYE(grossSalary);
    const nhifDeduction = calculateNHIF(grossSalary);
    const nssfDeduction = calculateNSSF(grossSalary);

    const totalDeductions = payeeTax + nhifDeduction + nssfDeduction;
    const netSalary = grossSalary - totalDeductions;

    console.log(`Gross Salary: Ksh ${grossSalary}`);
    console.log(`PAYE (Tax): Ksh ${payeeTax}`);
    console.log(`NHIF Deduction: Ksh ${nhifDeduction}`);
    console.log(`NSSF Deduction: Ksh ${nssfDeduction}`);
    console.log(`Total Deductions: Ksh ${totalDeductions}`);
    console.log(`Net Salary: Ksh ${netSalary}`);
}

// Example usage
const basicSalary = 50000; // Input: Basic Salary
const benefits = 10000; // Input: Benefits
calculateNetSalary(basicSalary, benefits);
