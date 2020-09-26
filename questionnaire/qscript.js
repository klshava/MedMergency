function tabulateAnswers() {
    var Fluscore = 0;
    var  Pneumonia= 0; 

    var choices = document.getElementsByTagName('input');

    for(i=0; i<choices.length; i++){

        if(choices[i].checked){
            if(choices[i].value == 'c1'){
                Fluscore = Fluscore +1; 
                Pneumonia = Pneumonia +1; 
            }
            if(choices[i].value == 'c2'){
                Fluscore = Fluscore +1; 
            }
        }
    }

    var maxscore = Math.max(Fluscore, Pneumonia);

    var answerbox = document.getElementById('answer');
  if (Fluscore == maxscore) { // If user chooses the first choice the most, this outcome will be displayed.
    answerbox.innerHTML = "your symptoms are similar with those of both pneumonia and influenza, however, influenza symptoms are more apparent";
}
  function resetAnswer() {
    var answerbox = document.getElementById('answer');
    answerbox.innerHTML = "There is a high chance you have influenza";
}
}