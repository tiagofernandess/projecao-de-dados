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

//Mapeamento Mensal Ideal
const monthlyIdealCalculated = document.querySelector("#monthly-ideal-calculated")
const monthlyIdealLuck = document.querySelector("#monthly-ideal-luck")
const idealMonthlyCommission = document.querySelector("#ideal-monthly-commission")
const idealMonthlyExpenses = document.querySelector("#ideal-monthly-expenses")
const totalMonthlyIdeal = document.querySelector("#total-monthly-ideal")

//Mapeando porcentagem 3 meses real
const hundredToll = document.querySelector("#hundred-toll")
const hundredTollTwo = document.querySelector("#hundred-toll-two")
const hundredTollTree = document.querySelector("#hundred-toll-tree")
const hundredTollFour = document.querySelector("#hundred-toll-four")

const luckyPercentageThreeMonths = document.querySelector("#lucky-percentage-three-months")
const commissionPercentageThreeMonths = document.querySelector("#commission-percentage-three-months")
const percentageExpensesThreeMonths = document.querySelector("#percentage-expenses-threemonths")
const totalPercentageThreeMonths = document.querySelector("#total-percentage-three-months")

//Mapeando porcentagem 3 meses ideal
const idealPercentageThreeMonthsLuck = document.querySelector("#ideal-percentage-three-months-luck")
const idealPercentageThreeMonthsCommission = document.querySelector("#ideal-percentage-three-months-commission")
const idealPercentageThreeMonthsExpenses = document.querySelector("#ideal-percentage-three-months-expenses")
const idealTotalPercentageThreeMonths = document.querySelector("#ideal-total-percentage-three-months")

//Mapeando porcentagem mensal real
const realMonthlyLuckyPercentage = document.querySelector("#real-monthly-lucky-percentage")
const realMonthlyCommissionPercentage = document.querySelector("#real-monthly-commission-percentage")
const percentageActualMonthlyExpenses = document.querySelector("#percentage-actual-monthly-expenses")
const totalMonthlyRealPercentage = document.querySelector("#total-monthly-real-percentage")

//Mapeando porcentagem mensal IDEAL
const luckyMonthlyIdealPercentage = document.querySelector("#lucky-monthly-ideal-percentage")
const idealMonthlyCommissionPercentage = document.querySelector("#ideal-monthly-commission-percentage")
const idealPercentageMonthlyExpenses = document.querySelector("#ideal-percentage-monthly-expenses")
const totalMonthlyIdealPercentage = document.querySelector("#total-monthly-ideal-percentage")




function process() {
    //Processo Projeção Real 3 meses
    const prohibitedValue = parseFloat(prohibited.value) || 0;
    const luckValue = parseFloat(luck.value) || 0;
    const commissionValue = parseFloat(commission.value) || 0;
    const expensesValue = parseFloat(expenses.value) || 0;

    inputProhibited.textContent = "Apurado: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(prohibitedValue);

    inputLuck.textContent = "Sorte: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(luckValue);

    inputCommission.textContent = "Comissão: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(commissionValue);

    inputExpendes.textContent = "Despesas: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(expensesValue);

    const totalValue = prohibitedValue - expensesValue - commissionValue - luckValue;

    total.textContent = "Total: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalValue);

    //Valores Fixos
    const averageLuck = 0.72
    const averageExpenses = 0.9
    const averageCommission = 0.8
    const monthlyProjection = 3


    //Processo Projeção Ideal 3 meses
    const luckConvertedThreeMonths = prohibitedValue * averageLuck
    const comissionConvertedThreeMonths = commissionValue * averageCommission
    const expensesConvertedThreeMonths = expensesValue * averageExpenses

    determinedIdealThreeMonths.textContent = "Apurado: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(prohibitedValue);

    luckyThreeMonths.textContent = "Sorte: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(luckConvertedThreeMonths);

    idealCommissionthreeMonths.textContent = "Comissão: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(comissionConvertedThreeMonths);

    idealExpensesThreeMonths.textContent = "Despesas: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(expensesConvertedThreeMonths);


    const determinedIdealValue = prohibitedValue;
    const totalValueTree = determinedIdealValue - comissionConvertedThreeMonths - expensesConvertedThreeMonths - luckConvertedThreeMonths;

    totalThree.textContent = "Total: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalValueTree);


    //Processo Projeção Real Mensal
    const countedDividedbyThree = prohibitedValue / monthlyProjection
    const luckDividedByThree = luckValue / monthlyProjection
    const commissionDividedByThree = commissionValue / monthlyProjection
    const expensesDividedByThree = expensesValue / monthlyProjection


    currentMonthlyCalculation.textContent = "Apurado: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(countedDividedbyThree);

    receiveMonthlyluck.textContent = "Sorte: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(luckDividedByThree);

    receiveMonthlyCommission.textContent = "Comissão: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(commissionDividedByThree);

    actualMonthlyExpenses.textContent = "Despesas: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(expensesDividedByThree);

    const realMonthlyMalculation = countedDividedbyThree
    const totalRealValue = realMonthlyMalculation - luckDividedByThree - commissionDividedByThree - expensesDividedByThree

    totalRealMonthlyValue.textContent = "Total: " + new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }).format(totalRealValue);

    //Processo Projeção Ideal Mensal
    const monthlyIdealCalculatedForTree = prohibitedValue / monthlyProjection
    const monthlyIdealLuckForTree = luckConvertedThreeMonths / monthlyProjection
    const idealMonthlyCommissionForTree = comissionConvertedThreeMonths / monthlyProjection
    const idealMonthlyExpensesForTree = expensesConvertedThreeMonths / monthlyProjection

    monthlyIdealCalculated.textContent = "Apurado: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(monthlyIdealCalculatedForTree);

    monthlyIdealLuck.textContent = "Sorte: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(monthlyIdealLuckForTree);

    idealMonthlyCommission.textContent = "Comissão: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(idealMonthlyCommissionForTree);

    idealMonthlyExpenses.textContent = "Despesas: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(idealMonthlyExpensesForTree);

    const totalMonthlyIdealValue = monthlyIdealCalculatedForTree - monthlyIdealLuckForTree - idealMonthlyCommissionForTree - idealMonthlyExpensesForTree;

    totalMonthlyIdeal.textContent = "Total: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalMonthlyIdealValue);

    hundredToll.textContent = "100%"
    hundredTollTwo.textContent = "100%"
    hundredTollTree.textContent = "100%"
    hundredTollFour.textContent = "100%"


    //Formatando numeros em porcentagem 3 MESES real
    const calculatingPercentageThreeMonths = luckValue / prohibitedValue
    luckyPercentageThreeMonths.textContent = (calculatingPercentageThreeMonths * 100).toFixed(1) + '%';

    const calculatingPercentageThreeComission = commissionValue / prohibitedValue
    commissionPercentageThreeMonths.textContent = (calculatingPercentageThreeComission * 100).toFixed(1) + '%';

    const calculatingPercentageThreeExpenses = expensesValue / prohibitedValue
    percentageExpensesThreeMonths.textContent = (calculatingPercentageThreeExpenses * 100).toFixed(1) + '%';

    const finalTotalOfThreeMonthsP = totalValue / prohibitedValue
    totalPercentageThreeMonths.textContent = (finalTotalOfThreeMonthsP * 100).toFixed(1) + '%';


    //Formatando numeros em porcentagem 3 MESES ideal
    const idealPercentageThreeMonthsLuckP = luckConvertedThreeMonths / prohibitedValue
    idealPercentageThreeMonthsLuck.textContent = (idealPercentageThreeMonthsLuckP * 100).toFixed(1) + '%';

    const idealPercentageThreeMonthsCommissionP = comissionConvertedThreeMonths / prohibitedValue
    idealPercentageThreeMonthsCommission.textContent = (idealPercentageThreeMonthsCommissionP * 100).toFixed(1) + '%';

    const idealPercentageThreeMonthsExpensesP = expensesConvertedThreeMonths / prohibitedValue
    idealPercentageThreeMonthsExpenses.textContent = (idealPercentageThreeMonthsExpensesP * 100).toFixed(1) + '%';

    const idealTotalPercentageThreeMonthsP = totalValueTree / prohibitedValue
    idealTotalPercentageThreeMonths.textContent = (idealTotalPercentageThreeMonthsP * 100).toFixed(1) + '%';


    //Formatando numeros em porcentagem mensal real
    const realMonthlyLuckyPercentageP = luckDividedByThree / monthlyIdealCalculatedForTree
    realMonthlyLuckyPercentage.textContent = (realMonthlyLuckyPercentageP * 100).toFixed(1) + '%';

    const realMonthlyCommissionPercentageP = commissionDividedByThree / monthlyIdealCalculatedForTree
    realMonthlyCommissionPercentage.textContent = (realMonthlyCommissionPercentageP * 100).toFixed(1) + '%';

    const percentageActualMonthlyExpensesP = expensesDividedByThree / monthlyIdealCalculatedForTree
    percentageActualMonthlyExpenses.textContent = (percentageActualMonthlyExpensesP * 100).toFixed(1) + '%';

    const totalMonthlyRealPercentageP = totalRealValue / monthlyIdealCalculatedForTree
    totalMonthlyRealPercentage.textContent = (totalMonthlyRealPercentageP * 100).toFixed(1) + '%';


    //Formatando numeros em porcentagem mensal ideal
    const luckyMonthlyIdealPercentageP = monthlyIdealLuckForTree / monthlyIdealCalculatedForTree
    luckyMonthlyIdealPercentage.textContent = (luckyMonthlyIdealPercentageP * 100).toFixed(1) + '%';
   
    const idealMonthlyCommissionPercentageP = idealMonthlyCommissionForTree / monthlyIdealCalculatedForTree
    idealMonthlyCommissionPercentage.textContent = (idealMonthlyCommissionPercentageP * 100).toFixed(1) + '%';

    const idealPercentageMonthlyExpensesP = idealMonthlyExpensesForTree / monthlyIdealCalculatedForTree
    idealPercentageMonthlyExpenses.textContent = (idealPercentageMonthlyExpensesP * 100).toFixed(1) + '%';

    const totalMonthlyIdealPercentageP = totalMonthlyIdealValue / monthlyIdealCalculatedForTree
    totalMonthlyIdealPercentage.textContent = (totalMonthlyIdealPercentageP * 100).toFixed(1) + '%';
}



button.addEventListener("click", process);


