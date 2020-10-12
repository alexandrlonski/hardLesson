// Пункт№1

let lang;
langRu = ['Пн','Вт','СР','Чт','Пт','Сб','Вс'];
langEn = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

lang = prompt('Выберите язык', 'ru/en');

// Через if

if (lang === 'ru') {
  console.log(langRu);
} else if (lang === 'en') {
  console.log(langEn);
}

// Через Switch

switch (lang) {
  case 'ru':
    console.log(langRu);
    break
  case 'en':
    console.log(langEn);
    break
  default:
    alert( "Повторите попытку" );  
}

// Через многомерный массив

let langDay = [];
langDay['ru'] = ['Пн','Вт','СР','Чт','Пт','Сб','Вс'];
langDay['en'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

console.log(langDay[lang]);


// Пункт№2

let namePerson;

namePerson = prompt('Введите своё имя', '');

let message = (namePerson.toLowerCase() === 'максим') ? 'преподаватель' :
  (namePerson.toLowerCase() === 'артём') ? 'директор' :
  'студент';

alert( message );