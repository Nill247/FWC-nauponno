const form = document.getElementById('calc-form');
const leftInput = document.getElementById('left-num');
const operatorInput = document.getElementById('operator');
const rightInput = document.getElementById('right-num');

function isPositiveInteger(value) {
    return /^\d+$/.test(value.trim());
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const leftStr = leftInput.value;
    const rightStr = rightInput.value;

    if (!isPositiveInteger(leftStr) || !isPositiveInteger(rightStr)) {
        alert('Error :(');
        return;
    }

    const leftNum = parseInt(leftStr, 10);
    const rightNum = parseInt(rightStr, 10);
    const op = operatorInput.value;

    if ((op === '/' || op === '%') && rightNum === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result = 0;
    switch (op) {
        case '+':
            result = leftNum + rightNum;
            break;
        case '-':
            result = leftNum - rightNum;
            break;
        case '*':
            result = leftNum * rightNum;
            break;
        case '/':
            result = leftNum / rightNum;
            break;
        case '%':
            result = leftNum % rightNum;
            break;
    }

    alert(result);
    console.log(result);
});

setInterval(() => {
    alert('Please, use me...');
}, 30000);