let correctAnswer;
let isAddition;

function generateNumber(digits) {
    if (digits === 1) {
        return Math.floor(Math.random() * 10);
    } else {
        return Math.floor(Math.random() * 90) + 10;
    }
}

function generateProblem() {
    const num1 = Math.random() > 0.5 ? generateNumber(1) : generateNumber(2);
    const num2 = Math.random() > 0.5 ? generateNumber(1) : generateNumber(2);
    
    isAddition = Math.random() > 0.5;
    correctAnswer = isAddition ? num1 + num2 : num1 - num2;

    document.getElementById('problem').textContent = `${num1} ${isAddition ? '+' : '-'} ${num2}`;
    document.getElementById('feedback').textContent = '';
    document.getElementById('answer').value = '';
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value, 10);
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = 'Correct!';
    } else {
        document.getElementById('feedback').textContent = 'Try Again';
    }
}

// Generate an initial problem on page load
generateProblem();
