'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let money, income = 'Фриланс', addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'), 
deposit = confirm('Есть ли у вас депозит в банке?'), mission = 100000, period = '6', expenses = [], amount1, amount2;

let start = function() {
    money = prompt('Ваш месячный доход?', 50000);

    // while (isNaN(money) || money.trim() === '' || money === null) {
    //     money = prompt('Ваш месячный доход?');
    // }

    // while (isNaN(parseFloat(money))) {
    //     money = prompt('Ваш месячный доход?');
    // }

    // while (!isNumber(money)) {
    //     money = prompt('Ваш месячный доход?');
    // }

    do {
        money = prompt('Ваш месячный доход?');
    } 
    while (!isNumber(money));
    // но если мы изначально записали число, нас спросят еще раз про доходы, что ни к чему.
}

start();

function showTypeOf(data) {
    console.log(typeof data);
}
showTypeOf(typeof money);
showTypeOf(typeof income);
showTypeOf(typeof deposit);

function getExpensesMonth() {
    let sum = 0;
        
    for (let i = 0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов?');
        sum += +prompt('Во сколько это обойдется?');
        while (!isNumber(sum)) {
        sum = prompt('Во сколько это обойдется?');
        }
    }
    return sum;
}

let expensesAmount = getExpensesMonth();


console.log('Расходы: ' + expensesAmount);

function getAccumulatedMonth() {
    return money - expensesAmount;
}
let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
    return mission / accumulatedMonth;
}

period = getTargetMonth();


console.log('Цель заработать ' + mission + ' рублей');


if (period >= 0) {
    console.log('Цель будет достигнута через ' + Math.ceil(period) + ' месяцев');
} else {
    console.log('Цель не будет достигнута');
}

console.log('Бюджет на месяц ' + accumulatedMonth);

console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Бюджет на день: ' + budgetDay);

function getStatusIncome() {
    if (budgetDay > 1200) {
        return 'У вас высокий уровень дохода';
    } else if(budgetDay < 1200 && budgetDay > 600) {
        return 'У вас средний уровень дохода';
    } else if(budgetDay < 600 && budgetDay > 0) {
        return 'К сожалению у вас уровень дохода ниже среднего';
    } else if(budgetDay === 0) {
        return 'Вам желательно найти дополнительные источники дохода';
    } else {
        return 'Что-то пошло не так';
    }
}

console.log(getStatusIncome());


