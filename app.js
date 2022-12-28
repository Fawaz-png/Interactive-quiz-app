const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')

form.addEventListener('submit', e => {
    e.preventDefault();
    let i = 0;
    let score = 0;
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswer.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        };
    });

    scrollTo(0, 0);
    result.classList.remove('d-none');

    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${i}%`;
        if (i === score) {
            clearInterval(timer);
        } else {
            i++;
        }
    }, 10);
});




