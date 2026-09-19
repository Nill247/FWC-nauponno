$(document).ready(function() {
    function isPositiveInteger(value) {
        return /^\d+$/.test(value.trim());
    }

    $('#calc-form').submit(function(e) {
        e.preventDefault();

        const leftStr = $('#left-num').val();
        const rightStr = $('#right-num').val();

        if (!isPositiveInteger(leftStr) || !isPositiveInteger(rightStr)) {
            alert('Error :(');
            return;
        }

        const leftNum = parseInt(leftStr, 10);
        const rightNum = parseInt(rightStr, 10);
        const op = $('#operator').val();

        if ((op === '/' || op === '%') && rightNum === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        let result = 0;
        switch (op) {
            case '+': result = leftNum + rightNum; break;
            case '-': result = leftNum - rightNum; break;
            case '*': result = leftNum * rightNum; break;
            case '/': result = leftNum / rightNum; break;
            case '%': result = leftNum % rightNum; break;
        }

        alert(result);
        console.log(result);
    });

    setInterval(function() {
        alert('Please, use me...');
    }, 30000);
});