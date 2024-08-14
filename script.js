//Mapeamento Entradas de Dados Principal
const button = document.querySelector("#processing");
const prohibited = document.querySelector("#inputProhibited");
const luck = document.querySelector("#input-Luck");
const commission = document.querySelector("#input-commission");
const expenses = document.querySelector("#input-expenses");

//Mapeamento dados reais 3 meses
const inputProhibited = document.querySelector("#calculated-monthly-three-months");
const inputLuck = document.querySelector("#monthly-luck-three-months");
const inputCommission = document.querySelector("#royal-commission-three-months");
const inputExpendes = document.querySelector("#real-expenses-three-months");
const total = document.querySelector("#actual-total-three-months");

//Mapeamento dados ideais 3 meses
const determinedIdealThreeMonths = document.querySelector("#determined-ideal-three-months")
const luckyThreeMonths = document.querySelector("#luck-three-months-ideal")
const idealCommissionthreeMonths = document.querySelector("#ideal-commission-three-months")
const idealExpensesThreeMonths = document.querySelector("#ideal-expenses-three-months")
const totalThree = document.querySelector("#total-value-three-months")

//Mapeamento Mensal Real
const currentMonthlyCalculation = document.querySelector("#current-monthly-calculation")
const receiveMonthlyluck = document.querySelector("#real-monthly-luck")
const receiveMonthlyCommission = document.querySelector("#monthly-real-commission")
const actualMonthlyExpenses = document.querySelector("#actual-monthly-expenses")
const totalRealMonthlyValue = document.querySelector("#total-real-monthly-value")




function process() {
    //Processo Projeção Real 3 meses
    const prohibitedValue = parseFloat(prohibited.value) || 0;
    const luckValue = parseFloat(luck.value) || 0;
    const commissionValue = parseFloat(commission.value) || 0;
    const expensesValue = parseFloat(expenses.value) || 0;

    inputProhibited.textContent = `Apurado (R$): ${prohibitedValue.toFixed(2)}`;
    inputLuck.textContent = `Sorte (R$): ${luckValue.toFixed(2)}`;
    inputCommission.textContent = `Comissão (R$): ${commissionValue.toFixed(2)}`;
    inputExpendes.textContent = `Despesas (R$): ${expensesValue.toFixed(2)}`;

    const totalValue = prohibitedValue - expensesValue - commissionValue - luckValue;
    total.textContent = `Total (R$): ${totalValue.toFixed(2)}`;

    //Valores Fixos
    const averageLuck = 0.72
    const averageExpenses = 0.9
    const averageCommission = 0.8
    const monthlyProjection = 3
   

    //Processo Projeção Ideal 3 meses
    const luckConvertedThreeMonths = prohibitedValue * averageLuck
    const comissionConvertedThreeMonths = commissionValue * averageCommission
    const expensesConvertedThreeMonths = expensesValue * averageExpenses

    luckyThreeMonths.textContent = `Sorte (R$): ${luckConvertedThreeMonths.toFixed(2)}`;
    idealCommissionthreeMonths.textContent = `Comissão (R$): ${comissionConvertedThreeMonths.toFixed(2)}`;
    idealExpensesThreeMonths.textContent = `Despesas (R$): ${expensesConvertedThreeMonths.toFixed(2)}`;
    determinedIdealThreeMonths.textContent = `Apurado (R$): ${prohibitedValue.toFixed(2)}`;


    const determinedIdealValue = prohibitedValue;
    const totalValueTree = determinedIdealValue - comissionConvertedThreeMonths - expensesConvertedThreeMonths - luckConvertedThreeMonths;

    totalThree.textContent = `Total (R$): ${totalValueTree.toFixed(2)}`;


     //Processo Projeção Real Mensal
    const countedDividedbyThree = prohibitedValue / monthlyProjection
    const luckDividedByThree = luckValue / monthlyProjection
    const commissionDividedByThree = commissionValue / monthlyProjection
    const expensesDividedByThree = expensesValue / monthlyProjection

    currentMonthlyCalculation.textContent = `Apurado (R$): ${countedDividedbyThree.toFixed(2)}`;
    receiveMonthlyluck.textContent = `Sorte (R$): ${luckDividedByThree.toFixed(2)}`;
    receiveMonthlyCommission.textContent = `Comissão (R$): ${commissionDividedByThree.toFixed(2)}`;
    actualMonthlyExpenses.textContent = `Despesas (R$): ${expensesDividedByThree.toFixed(2)}`;

    const realMonthlyMalculation = countedDividedbyThree
    const totalRealValue = realMonthlyMalculation - luckDividedByThree - commissionDividedByThree - expensesDividedByThree

    totalRealMonthlyValue.textContent = `Total (R$): ${totalRealValue.toFixed(2)}`;

    

    
}


button.addEventListener("click", process);


