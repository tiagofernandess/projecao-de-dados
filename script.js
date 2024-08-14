const button = document.querySelector("#processing");
const prohibited = document.querySelector("#inputProhibited");
const luck = document.querySelector("#input-Luck");
const commission = document.querySelector("#input-commission");
const expenses = document.querySelector("#input-expenses");

const inputProhibited = document.querySelector("#calculated-monthly-three-months");
const inputLuck = document.querySelector("#monthly-luck-three-months");
const inputCommission = document.querySelector("#royal-commission-three-months");
const inputExpendes = document.querySelector("#real-expenses-three-months");
const total = document.querySelector("#actual-total-three-months");

const determinedIdealThreeMonths = document.querySelector("#determined-ideal-three-months")
const luckyThreeMonths = document.querySelector("#luck-three-months-ideal")
const idealCommissionthreeMonths = document.querySelector("#ideal-commission-three-months")
const idealExpensesThreeMonths = document.querySelector("#ideal-expenses-three-months")
const totalThree = document.querySelector("#total-value-three-months")



function process() {
    const prohibitedValue = parseFloat(prohibited.value) || 0;
    const luckValue = parseFloat(luck.value) || 0;
    const commissionValue = parseFloat(commission.value) || 0;
    const expensesValue = parseFloat(expenses.value) || 0;

    const averageLuck = 0.72
    const averageExpenses = 0.9
    const averageCommission = 0.8
    const monthlyProjection = 3
   

    const luckConvertedThreeMonths = prohibitedValue * averageLuck
    const comissionConvertedThreeMonths = commissionValue * averageCommission
    const expensesConvertedThreeMonths = expensesValue * averageExpenses


    inputProhibited.textContent = `Apurado (R$): ${prohibitedValue.toFixed(2)}`;
    inputLuck.textContent = `Sorte (R$): ${luckValue.toFixed(2)}`;
    inputCommission.textContent = `Comissão (R$): ${commissionValue.toFixed(2)}`;
    inputExpendes.textContent = `Despesas (R$): ${expensesValue.toFixed(2)}`;

    const totalValue = prohibitedValue - expensesValue - commissionValue - luckValue;
    total.textContent = `Total (R$): ${totalValue.toFixed(2)}`;


    luckyThreeMonths.textContent = `Sorte (R$): ${luckConvertedThreeMonths.toFixed(2)}`;
    idealCommissionthreeMonths.textContent = `Comissão (R$): ${comissionConvertedThreeMonths.toFixed(2)}`;
    idealExpensesThreeMonths.textContent = `Despesas (R$): ${expensesConvertedThreeMonths.toFixed(2)}`;
    determinedIdealThreeMonths.textContent = `Apurado (R$): ${prohibitedValue.toFixed(2)}`;


    const determinedIdealValue = prohibitedValue;
    const totalValueTree = determinedIdealValue - comissionConvertedThreeMonths - expensesConvertedThreeMonths - luckConvertedThreeMonths;

    totalThree.textContent = `Total (R$): ${totalValueTree.toFixed(2)}`;

}


button.addEventListener("click", process);


