function convertToRoman(num) {
    let numbers = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    let results = "";
  
    for (let key in numbers) {
      if (num >= numbers[key]) {
        results += key.repeat(Math.trunc(num / numbers[key]));
        num -= numbers[key] * Math.trunc(num / numbers[key]);
      }
    }
    return results;
  
  }
  
  console.log(convertToRoman(891));