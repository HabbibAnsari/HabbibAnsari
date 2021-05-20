const quizData = [
    {
      question: "Who invented JavaScript?",
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
        d: "Ansari Habbib",
      correct: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
        a: "Node.js",
        b: "TypeScript",
        c: "npm",
        d:"yarn",
      correct: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint", 
      correct: "d"
    },

    {
        question: "What does HTML Stands for?",
            a:"HyperText Markup Language",
            b:"Cascading style sheet",
            c:"Jason Object Notation",
            d:"Application Programing Interface",
        correct:"a"
    },

    {
        question: "Who is the Vice President of India?",
            a:"Narendra Modi",
            b:"Manmohan Singh",
            c:"Rahul Gandhi",
            d:"Uddav Thakarey",
        correct:"a"
    }
  ];

    const questionE1 = document.getElementById('question');
    const quiz = document.getElementById("quiz");
    const answerEls = document.querySelectorAll(".answer");
    const a_text = document.getElementById("a_text"); 
    const b_text = document.getElementById("b_text"); 
    const c_text = document.getElementById("c_text"); 
    const d_text = document.getElementById("d_text");
    const submitBtn = document.getElementById("submit");

    let currentQuiz = 0;
    let score = 0;

    loadQuiz();

    function loadQuiz() {
        deselectAnswer();
        const currentQuizData = quizData[currentQuiz];
        questionE1.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;

    }

    function getSelected() {

        let answer = undefined;

        answerEls.forEach((answerEl) => {
            if (answerEl.checked){
                answer = answerEl.id;
            }
        });
       return answer;
    }


    function deselectAnswer() {
        answerEls.forEach((answerEl) => {
            answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", ()=> {

//check to see answer
  const answer = getSelected();

    if (answer) {
      if(answer === quizData[currentQuiz].correct){
        score++;
      }
      currentQuiz++;
      if (currentQuiz < quizData.length){
          loadQuiz();
      } else {
               quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                                     <button onclick="location.reload()">Reload Game</button>`;
       }
    }
});
