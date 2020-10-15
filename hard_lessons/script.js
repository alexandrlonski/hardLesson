
function checkString(str) {
  if (typeof(str) === 'number' ) {
    alert('вы ввели цифры');
    console.log(str);
  } else if ( str === "" ) {
    alert('пустая строка');
    console.log(str);
  } else if ( str == null ) {
    alert('null');
    console.log(str);
  } else {  
    alert('вы ввели всё верно');
    str = str.trim(); 
    return str.length > 30 ? str.slice(0, 30) + '...' : str; 
    
  }
  
};
console.log(checkString(""));






