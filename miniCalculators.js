import Calculator from "./calculator.js";

export class ConstCalc extends Calculator {
  constructor(idx, value, max, min, defaultVal) {
    super(idx, value, max, min, defaultVal);
  }

  calculate() {
    const arr = [];
    for (let i = 0; i < this.displayValues; i++) {
      arr.push(this.value);
    }
    return arr;
  }
}

export class RuntimeCalc extends Calculator {
  constructor(idx, value, max, min, defaultVal) {
    super(idx, value, max, min, defaultVal);
  }

  logN(n, base = 2) {
    return Math.log(n) / Math.log(base);
  }

  factorial() {
    let n = this.value;
    let i = this.value;

    if (n === 1 || n === 0) {
      return 1;
    }

    while (n > 1) {
      n--;
      i *= n;
    }

    return i;
  }

  calcAll() {
    const c = Calculator.calculators[0].value;
    const counters = [];

    [1, 2].forEach(x => {
      counters.push(
        c,
        (c * this.logN(this.value)).toFixed(5),
        c * this.value,
        (this.value * this.logN(this.value)).toFixed(5),
        c * this.value ** 2,
        c * this.value ** 3,
        c * 2 ** this.value,
        c * this.factorial()
      );
    });

    return counters;
  }

  calculate() {
    return this.calcAll();
  }
}

export class LogCalc extends Calculator {
  constructor(idx, value, max, min, defaultVal) {
    super(idx, value, max, min, defaultVal);
  }

  logN(n, base) {
    const constant = Calculator.calculators[0].value;

    return constant * (Math.log(n) / Math.log(base)).toFixed(5);
  }

  calculate() {
    return [this.logN(Calculator.calculators[1].value, this.value)];
  }
}

export class NLogCalc extends Calculator {
  constructor(idx, value, max, min, defaultVal) {
    super(idx, value, max, min, defaultVal);
  }

  logN(n, base) {
    return Calculator.calculators[1].value * (Math.log(n) / Math.log(base));
  }

  calculate() {
    return [this.logN(Calculator.calculators[1].value, this.value).toFixed(5)];
  }
}

export class ExpCalc extends Calculator {
  constructor(idx, value, max, min, defaultVal) {
    super(idx, value, max, min, defaultVal);
  }

  calcExp() {
    const calcs = Calculator.calculators;
    return calcs[0].value * this.value ** calcs[1].value;
  }

  calculate() {
    return [this.calcExp()];
  }
}

export class CubicCalc extends Calculator {
  constructor(idx, value, max, min, defaultVal) {
    super(idx, value, max, min, defaultVal);
  }

  calcExp() {
    const calcs = Calculator.calculators;
    return calcs[0].value * calcs[1].value ** this.value;
  }

  calculate() {
    return [this.calcExp()];
  }
}
