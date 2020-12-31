import Calculator from "./calculator.js";

class ConstCalc extends Calculator {
  constructor(idx, value, max, min) {
    super(idx, value, max, min);
  }

  calculate() {
    const arr = [];
    for (let i = 0; i < this.displayValues; i++) {
      arr.push(this.value);
    }
    return arr;
  }
}

class RuntimeCalc extends Calculator {
  constructor(idx, value, max, min) {
    super(idx, value, max, min);
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
        this.logN(this.value).toFixed(5),
        this.value,
        (this.value * this.logN(this.value)).toFixed(5),
        this.value ** 2,
        this.value ** 3,
        2 ** this.value,
        this.factorial()
      );
    });
    return counters;
  }

  calculate() {
    return this.calcAll();
  }
}

class LogCalc extends Calculator {
  constructor(idx, value, max, min) {
    super(idx, value, max, min);
  }

  logN(n, base) {
    return (Math.log(n) / Math.log(base)).toFixed(5);
  }

  calculate() {
    return [this.logN(Calculator.calculators[1].value, this.value)];
  }
}

class NLogCalc extends Calculator {
  constructor(idx, value, max, min) {
    super(idx, value, max, min);
  }

  logN(n, base) {
    return Calculator.calculators[1].value * (Math.log(n) / Math.log(base));
  }

  calculate() {
    return [this.logN(Calculator.calculators[1].value, this.value).toFixed(5)];
  }
}

class ExpCalc extends Calculator {
  constructor(idx, value, max, min) {
    super(idx, value, max, min);
  }

  calcExp() {
    return this.value ** Calculator.calculators[1].value;
  }

  calculate() {
    return [this.calcExp()];
  }
}

const c0 = new ConstCalc(1, 1, 10000, 0);
const c1 = new RuntimeCalc(0, 3, 10000, 0);
const c2 = new LogCalc(2, 2, 10000, 0);
const c3 = new NLogCalc(3, 2, 10000, 0);
const c4 = new ExpCalc(4, 2, 10000, 0);
