function daysInYear(year){
  try {
    if (!Number.isInteger(year)) {
      throw new Error();
    }
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0) ? 366 : 365;
  }
  catch (e) {
    return 'exception';
  }
}

console.log(daysInYear(2019)); // 365
console.log(daysInYear('2019')); // exception
console.log(daysInYear(2020)); // 366
console.log(daysInYear(2020.2)); // exception
console.log(daysInYear(2100)); // 365
console.log(daysInYear({year: 2100})); // exception
