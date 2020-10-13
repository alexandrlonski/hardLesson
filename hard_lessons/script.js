
function test(str) {
  if (typeof str !== 'string') {
    alert('аргумент не строка');
    return;
  }

  str = str.trim(); 
  return str.length > 30 ? str.slice(0, 30) + '...' : str;
};

alert(test(prompt('Напишите предложение', '')));
// alert(test(+prompt('Напишите предложение', '')));



