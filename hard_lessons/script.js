
function add(a) {
if (a < 10) {
  a = '0' + a};
  return a;
};  


setInterval( function(){
let Data = new Date(), 
Year = Data.getFullYear(),
NumDay = Data.getDate(),
Hour = Data.getHours(),
Minutes = Data.getMinutes(),
Seconds = Data.getSeconds(),
week = [ "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "<i>Суббота</i>", "<i>Воскресенье</i>" ],
today = (6 + new Date().getDay()) % 7,
Day = week[today],
nameMonth = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря" ],
Month = nameMonth[Data.getMonth()],
textHour = function() {
   if(Hour > 1 && Hour < 5 || Hour >= 22 && Hour <= 24) {
    return "часа";
  } else if(Hour >= 5 && Hour <= 20 || Hour === 0) {
    return "часов";
  } else {
    return "час";
  }; 
}; 


document.getElementById('dateOne').innerHTML = (`Cегодня ${Day}, ${NumDay} ${Month} ${Year} года, ${Hour} ${textHour()} ${Minutes} минуты ${Seconds} секунды` );
document.getElementById('dateTwo').innerHTML =  (`${add(NumDay)}.${add(Data.getMonth())}.${Year} - ${add(Hour)}.${add(Minutes)}.${add(Seconds)}`);
}, 1000);


