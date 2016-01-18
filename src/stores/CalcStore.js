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
  110: '.',
  190: '.',
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
  8: 'reset',
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

  updateAction(newAction) {
    var { value, waitingValue, action } = this.state;
    waitingValue                          = parseFloat(waitingValue);

    if (newAction == 'reset') {
      this.state.value        = 0;
      this.state.waitingValue = 0;
      this.state.action       = null;
    }
    else if (newAction == '=') {
      if (!waitingValue) return;
      this.state.value        = this.calculate();
      this.state.waitingValue = 0;
      this.state.action       = null;
    }
    else {
      this.state.waitingValue = waitingValue ? this.calculate() : value;
      this.state.action       = newAction;
      this.state.value        = 0;
    }
  },
  calculate() {
    const { value, waitingValue, action } = this.state;

    return calculator(action, waitingValue, value);
  },
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