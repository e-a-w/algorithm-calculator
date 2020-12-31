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

  calculate() {
    const c = Calculator.calculators[0].value;
    const counters = [];
    counters.push(c);
    counters.push(this.value);
    counters.push(this.logN(this.value).toFixed(5));
    counters.push(this.value ** 2);
    counters.push(this.value * this.logN(this.value).toFixed(5));
    counters.push(this.factorial());
    return counters;
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

const c0 = new ConstCalc(1, 1, 10000, 0);
const c1 = new RuntimeCalc(0, 3, 10000, 0);
const c2 = new LogCalc(2, 2, 10000, 0);
const c3 = new NLogCalc(3, 2, 10000, 0);
