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

function process() {
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

    if (totalValue < 0) {
        totalValue.style.color = red;
    }
}

button.addEventListener("click", process);


