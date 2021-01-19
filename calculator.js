const plusButtons = document.getElementsByClassName("plus");
const minusButtons = document.getElementsByClassName("minus");
const calcInputs = document.getElementsByClassName("calc-input");
const errors = document.getElementsByClassName("error");

export default class Calculator {
  static calculators = [];

  constructor(idx, value, max, min, defaultVal) {
    Calculator.calculators.push(this);

    // DOM Elements
    this.minus = minusButtons[idx];
    this.plus = plusButtons[idx];
    this.input = calcInputs[idx];
    this.error = errors[idx];
    this.reset = document.getElementsByClassName(`default-${idx}`)[0];
    this.resetButton = document.getElementsByClassName(`default-btn-${idx}`)[0];
    this.valueDisplays = document.getElementsByClassName(`output-${idx}`);
    this.calculationDisplays = document.getElementsByClassName(
      `calculation-${idx}`
    );

    // Values
    this.idx = idx;
    this.value = value;
    this.input.value = this.value;
    this.input.max = this.max;
    this.input.min = this.min;
    this.max = max;
    this.min = min;
    this.defaultVal = defaultVal;
    this.reset.innerText = this.defaultVal;

    for (let i = 0; i < this.valueDisplays.length; i++) {
      this.valueDisplays[i].innerText = this.value;
    }

    for (let i = 0; i < this.calculationDisplays.length; i++) {
      this.calculationDisplays[i].innerText = this.calculate()[i];
    }

    // Event Listener
    this.minus.addEventListener("click", () => {
      if (this.input.value > min) {
        this.input.value--;
        this.value--;
        this.miniCalc();
      } else {
        this.showError(`Cannot be less than ${this.min}`);
      }
      this.showResults();
    });

    this.plus.addEventListener("click", () => {
      if (this.input.value < max) {
        this.input.value++;
        this.value++;
        this.miniCalc();
      } else {
        this.showError(`Cannot be more than ${this.max}`);
      }
      this.showResults();
    });

    this.input.addEventListener("keyup", e => {
      const val = Number(e.target.value);
      if (val > this.max) {
        this.showError(`Cannot be larger than ${this.max}`);
        this.input.value = this.max;
        this.value = this.max;
        this.miniCalc();
      } else if (val < this.min) {
        this.showError(`Cannot be less than ${this.min}`);
        this.input.value = this.min;
        this.value = this.min;
        this.miniCalc();
      } else {
        this.value = val;
        this.miniCalc();
      }
      this.showResults();
    });

    this.input.addEventListener("keyup", e => {
      const keys = [69, 187, 189];
      if (keys.includes(e.keyCode)) {
        this.showError("Cannot contain characters other than digits");
        if (this.min > 0) {
          this.input.value = this.min;
          this.value = this.min;
          this.miniCalc();
        } else if (this.max < 0) {
          this.input.value = this.max;
          this.value = this.max;
          this.miniCalc();
        } else {
          this.input.value = 0;
          this.value = 0;
          this.miniCalc();
        }
      }
      this.showResults();
    });

    this.resetButton.addEventListener("click", () => {
      this.value = this.defaultVal;
      this.input.value = this.defaultVal;
      this.miniCalc();
    });
  }

  showError(text) {
    this.error.innerText = text;
    setTimeout(() => {
      this.error.innerText = "";
    }, 5000);
  }

  showResults() {
    for (let i = 0; i < this.valueDisplays.length; i++) {
      this.valueDisplays[i].innerText = this.value;
    }

    for (let i = 0; i < this.calculationDisplays.length; i++) {
      this.calculationDisplays[i].innerText = this.calculate()[i];
    }
  }

  calculate() {
    return [this.value];
  }

  miniCalc() {
    Calculator.calculators[1].showResults();
    Calculator.calculators[2].showResults();
    Calculator.calculators[4].showResults();
    Calculator.calculators[5].showResults();
  }
}
