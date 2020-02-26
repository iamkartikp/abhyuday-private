//Gaming
const rulesBtn = document.querySelector('#game-rule-btn');
const gameRules = document.querySelector('#game-rules');
const gameCancel = document.querySelector('#game-cancel');


//Coding
const codingBtn = document.querySelector('#code-rule-btn');
const codingRules = document.querySelector('#code-rules');
const codingCancel = document.querySelector('#code-cancel');

//IT-Manager
const managerBtn = document.querySelector('#it-manager-rule-btn');
const managerRules = document.querySelector('#it-manager-rules');
const managerCancel = document.querySelector('#it-manager-cancel');

// IT QUIZ
const quizBtn = document.querySelector('#it-quiz-rule-btn');
const quizRules = document.querySelector('#it-quiz-rules');
const quizCancel = document.querySelector('#it-quiz-cancel');

// WEB Development
const webBtn = document.querySelector('#web-rule-btn');
const webRules = document.querySelector('#web-rules');
const webCancel = document.querySelector('#web-cancel');

// App Development
const appBtn = document.querySelector('#app-rule-btn');
const appRules = document.querySelector('#app-rules');
const appCancel = document.querySelector('#app-cancel');

// Graphic Design
const graphicBtn = document.querySelector('#graphic-rule-btn');
const graphicRules = document.querySelector('#graphic-rules');
const graphiCancel = document.querySelector('#graphic-cancel');

// Treasur Hunt
const thBtn = document.querySelector('#th-rule-btn');
const thRules = document.querySelector('#th-rules');
const thCancel = document.querySelector('#th-cancel');

function popup(btn, rule, cancel) {
    btn.addEventListener('click', ()=> {
        rule.style.display = 'block';
        rule.style.zIndex=3;
        // scrollTo(0,0);
    })
    
    cancel.addEventListener('click', ()=> {
        rule.style.display = 'none';
    })    
}

popup(rulesBtn, gameRules, gameCancel);
popup(codingBtn, codingRules, codingRules);
popup(managerBtn, managerRules, managerCancel);
popup(quizBtn, quizRules, quizCancel);
popup(webBtn,webRules,webCancel);
popup(appBtn, appRules, appCancel);
popup(graphicBtn, graphicRules, graphiCancel);
popup(thBtn,thRules, thCancel);