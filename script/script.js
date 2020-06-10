'use strict';

let money = Number(prompt('Ваш месячный доход?')), income = 'Фриланс', addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'), 
deposit = confirm('Есть ли у вас депозит в банке?'), mission = 100000, period = '6', expenses1 = prompt('Введите обязательную статью расходов?'), 
amount1 = +prompt('Во сколько это обойдется?', '1000'), expenses2 = prompt('Введите обязательную статью расходов?'),  amount2 = +prompt('Во сколько это обойдется?');

function showTypeOf(data) {
    console.log(typeof data);
}
showTypeOf(typeof money);
showTypeOf(typeof income);
showTypeOf(typeof deposit);

function getExpensesMonth(amount1, amount2) {
    return amount1 + amount2;
}

console.log(getExpensesMonth(amount1, amount2));

function getAccumulatedMonth(money, amount1, amount2) {
    return money - amount1 - amount2;
}
let accumulatedMonth = getAccumulatedMonth(money, amount1, amount2);

function getTargetMonth(mission, accumulatedMonth) {
    return mission / accumulatedMonth;
}
period = getTargetMonth(mission, accumulatedMonth);


console.log('Цель заработать ' + mission + ' рублей');
console.log('Цель будет достигнута через ' + Math.ceil(period) + ' месяцев');
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


