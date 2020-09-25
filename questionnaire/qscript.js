(function(){
    function buildQuestionaire(){
        const output = []; //variable stored in html output
        Questions.forEach(
            (currentquestion, questionnumber) => 
        {
            const answers = [];

            for(letter in currentquestion.answers){

                answers.push(
                    '<label> <input type = "radio",  name = "question${questionnumber}",  value = "${letter}" ${letter} : ${currentquestion.answers[letter]} </label>' 
                    ); 
            }

            output.push(
             '<div class = "question"> ${currentquestion.question} </div> <div class = "answers"> ${answers.join(',')} </div>'
    );  
        }
            ); 
        questionnairecontainter.innerHTML = ouput.join('');
    }
    function showRecommendation (){

        const answerContainer = questionnairecontainter.querySelectorAll('.answers');

        let numCorrect = 0;

        Questions.forEach((currentquestion,questionnumber) => {

            const answerContainer = answerContainer[questionnumber];
            const selector = 'input[name = question${questionnumber}]:checked';
            const userAns = (answerContainer.querySelector(selector) || {}).value;

            if(userAns === currentquestion.correctAns){
                numCorrect ++;

            }

            });
        }
        

        resultsContainer.innerHTML = '${numCorrect} out of {Questions.length}';
    });

    const questionnairecontainter = document.getElementById('questionnaire');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const Questions = [
        {
            question: "Have you had a cough in the last 14 days?",
            answers: {
                a: "Yes",
                b: "No"
            },
            get answers() {
                return this._answers;
            },
            set answers(value) {
                this._answers = value;
            },
            correctAns: "b"
        },
        {
            question: " ",
            answers: {
                a: "Yes",
                b: "No"
            },
            correctAns: "b"
        }
    ];

    buildQuestionaire();

    submitButton.addEventListener('click', showRecommendation);
