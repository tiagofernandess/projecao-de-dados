
const button = document.querySelector("#processing")
const prohibited = document.querySelector("#inputProhibited")
const luck = document.querySelector("#input-Luck")
const commission = document.querySelector("#input-commission")
const expenses = document.querySelector("#input-expenses")

const inputProhibited = document.querySelector("#calculated-monthly-three-months")
const inputLuck = document.querySelector("#monthly-luck-three-months")
const inputCommission = document.querySelector("#royal-commission-three-months")
const inputExpendes = document.querySelector("#real-expenses-three-months")
const total = document.querySelector("#actual-total-three-months")



function process() {
    inputProhibited.textContent = prohibited.value
    inputLuck.textContent = luck.value
    inputCommission.textContent = commission.value
    inputExpendes.textContent = expenses.value
}


button.addEventListener("click", process, subtracao)


