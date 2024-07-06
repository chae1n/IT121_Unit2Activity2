//Questions and answers stored in an object
const quizData = {
    q1: 'a',
    q2: 'b',
  };
  
  //Function to evaluate answers and calculate score
  function submitQuiz() {
    let score = 0;
  
    const userAnswers = {
      q1: document.querySelector('input[name = "q1"]:checked')?.value,
      q2: document.querySelector('input[name = "q2"]:checked')?.value,
    };
  
    for (let question in quizData) {
      if (userAnswers[question] === quizData[question]) {
        score++;
      }
    }
    
    document.getElementById('score').innerText = "Score: " + score;
  }
  
  