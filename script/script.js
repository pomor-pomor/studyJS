'use strict';

let money = Number(prompt('Ваш месячный доход?')), income = 'Фриланс', addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'), 
deposit = confirm('Есть ли у вас депозит в банке?'), mission = 1000000, period = '6', expenses1 = prompt('Введите обязательную статью расходов?'), 
amount1 = +prompt('Во сколько это обойдется?'), expenses2 = prompt('Введите обязательную статью расходов?'),  amount2 = +prompt('Во сколько это обойдется?');

let budgetMonth = money - amount1 - amount2;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

console.log('Бюджет на месяц ' + budgetMonth);

console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = Math.floor(budgetMonth / 30);
console.log('Бюджет на день: ', budgetDay);

if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
} else if(budgetDay < 1200 && budgetDay > 600) {
    console.log('У вас средний уровень дохода');
} else if(budgetDay < 600 && budgetDay > 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if(budgetDay === 0) {
    console.log('Вам желательно найти дополнительные источники дохода');
} else {
    console.log('Что-то пошло не так');
}