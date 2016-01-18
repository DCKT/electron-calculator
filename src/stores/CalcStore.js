const numberCode = {
  49: 1,
  50: 2,
  51: 3,
  52: 4,
  53: 5,
  54: 6,
  55: 7,
  56: 8,
  57: 9,
  48: 0,
  97: 1,
  98: 2,
  99: 3,
  100: 4,
  101: 5,
  102: 6,
  103: 7,
  104: 8,
  105: 9,
  96: 0,
};

const actionCode = {
  107: '+',
  109: '-',
  13: '=',
  106: '*',
  111: '/',
  191: '/',
  220: '*',
  187: '+',
  54: '-',
};

export default {
  state: {
    value: "0",
    waitingValue: 0,
    action: null,
  },
  numberCode,
  actionCode,

  updateValue(value) {
    const currentValue = this.state.value;
    const dot          = currentValue.toString().indexOf('.') != -1;


    if (currentValue != '0') {
      if (dot && value == '.') {
        return;
      }

      this.state.value += value;
    }
    else {
      if (value == '.') {
        this.state.value = '0.';
      }
      else {
        this.state.value = value.toString();
      }
    }
  },

  updateAction(action) {
    if (action == "=") {
      this.calculate();
    }
    else {
      this.state.waitingValue = this.state.value;
      this.state.action = action;
      this.state.value = 0;
    }
  },
  calculate() {
    const { value, waitingValue, action } = this.state;

    this.state.value = calculator(action, waitingValue, value);
    this.state.waitingValue = 0;
    this.state.action = null;
  }
}

function calculator(action, a, b) {
  a = Number.isInteger(a) ? parseInt(a) : parseFloat(a);
  b = Number.isInteger(b) ? parseInt(b) : parseFloat(b);

  switch(action) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case 'x':
      return a * b;
    case '/': 
      return a / b;
  }
}