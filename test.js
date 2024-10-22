class Calculator {
    constructor() {
        this.currentInput = '';
        this.previousInput = '';
        this.operation = null;
    }

    clear() {
        this.currentInput = '';
        this.previousInput = '';
        this.operation = null;
    }

    appendDigit(digit) {
        if (digit === '.' && this.currentInput.includes('.')) return;
        this.currentInput = this.currentInput.toString() + digit.toString();
    }

    chooseOperation(op) {
        if (this.currentInput === '') return;
        if (this.previousInput !== '') {
            this.compute();
        }
        this.operation = op;
        this.previousInput = this.currentInput;
        this.currentInput = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousInput);
        const current = parseFloat(this.currentInput);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentInput = computation;
        this.operation = null;
        this.previousInput = '';
    }

    updateDisplay() {
        alert(this.currentInput);
    }
}

const calculator = new Calculator();

while (true) {
    const input = prompt("Enter a digit, operation (+, -, *, /), 'C' to clear, '=' to compute, or 'Q' to quit:");

    if (input === null || input.toUpperCase() === 'Q') {
        break;
    } else if (input.toUpperCase() === 'C') {
        calculator.clear();
    } else if (['+', '-', '*', '/'].includes(input)) {
        calculator.chooseOperation(input);
    } else if (input === '=') {
        calculator.compute();
        calculator.updateDisplay();
    } else if (!isNaN(input) || input === '.') {
        calculator.appendDigit(input);
    } else {
        alert("Invalid input");
    }
}