let lang = 'en';

var week = {
    'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    };

if (lang === 'ru') {
    console.log(week['ru']);
} else {
console.log(week['en']);
}

switch (lang) {
    case 'ru':
        console.log(week['ru']);
        break;
    case 'en': 
        console.log(week['en']);
        break;
}

lang === 'ru' ? console.log(week['ru']) : console.log(week['en']);


let namePerson = 'Дмитрий';

namePerson === 'Артем' ? console.log('Директор') : namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Студент');
