document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const players = urlParams.get('players');
    const firstCell = document.querySelector('.cell-1');
    const questions = [
        {
            "question": "Combien y’a t’il de membre dans le 667 ?",
            "answers": [
                { "text": "19", "correct": true },
                { "text": "24", "correct": false },
                { "text": "7", "correct": false },
                { "text": "32", "correct": false }
            ]
        },
        {
            "question": "En quelle année est sorti l’album Or Noir de Kaaris ?",
            "answers": [
                { "text": "2010", "correct": false },
                { "text": "2015", "correct": false },
                { "text": "2013", "correct": true },
                { "text": "2011", "correct": false }
            ]
        },
        {
            "question": "D'où vient le célèbre rappeur JUL ?",
            "answers": [
                { "text": "Paris", "correct": false },
                { "text": "Nantes", "correct": false },
                { "text": "Marseille", "correct": true },
                { "text": "Montpellier", "correct": false }
            ]
        },
        {
            "question": "Ninho détient combien de singles certifiés (or, platine, diamant) depuis le début de sa carrière ?",
            "answers": [
                { "text": "230", "correct": false },
                { "text": "70", "correct": false },
                { "text": "160", "correct": true },
                { "text": "300", "correct": false }
            ]
        },
        {
            "question": "Qui est le rappeur préféré des créateurs du jeu ?",
            "answers": [
                { "text": "JUL", "correct": false },
                { "text": "Freeze Corleone", "correct": true },
                { "text": "Ninho", "correct": false },
                { "text": "Kaaris", "correct": false }
            ]
        },
        {
            "question": "De quelle origine est PLK ?",
            "answers": [
                { "text": "Congolais", "correct": false },
                { "text": "Suisse", "correct": false },
                { "text": "Polonais", "correct": true },
                { "text": "Mexicains", "correct": false }
            ]
        },
        {
            "question": "Quel est le nom de l'album solo de Lacrim sorti en 2014 ?",
            "answers": [
                { "text": "Corleone", "correct": true },
                { "text": "Force & Honneur", "correct": false },
                { "text": "R.I.P.R.O. Volume 1", "correct": false },
                { "text": "Né pour mourir", "correct": false }
            ]
        },
        {
            "question": "Quel est le nom du premier album studio de Lomepal ?",
            "answers": [
                { "text": "FLIP", "correct": true },
                { "text": "Jeannine", "correct": false },
                { "text": "Flipé", "correct": false },
                { "text": "Majesté", "correct": false }
            ]
        },
        {
            "question": "Quel est le nom complet de Gims, anciennement Maître Gims ?",
            "answers": [
                { "text": "Gandhi Bilel Djuna", "correct": true },
                { "text": "Gandhi Djuna", "correct": false },
                { "text": "Gims Djuna", "correct": false },
                { "text": "Maître Gandhi Djuna", "correct": false }
            ]
        },
        {
            "question": "Quel est le nom du premier album studio de Niska ?",
            "answers": [
                { "text": "Commando", "correct": false },
                { "text": "Zifukoro", "correct": true },
                { "text": "Charo Life", "correct": false },
                { "text": "Mr. Sal", "correct": false }
            ]
        },
        {
            "question": "Qui a réalisé l'album 'Fantôme' de Lefa ?",
            "answers": [
                { "text": "Nekfeu", "correct": false },
                { "text": "Stromae", "correct": true },
                { "text": "Maître Gims", "correct": false },
                { "text": "Dinos", "correct": false }
            ]
        },
        {
            "question": "Quel rappeur français a sorti l'album 'La Cour des grands' en 2015 ?",
            "answers": [
                { "text": "Bigflo & Oli", "correct": true },
                { "text": "Soprano", "correct": false },
                { "text": "Orelsan", "correct": false },
                { "text": "Kool Shen", "correct": false }
            ]
        },
        {
            "question": "Quel est le nom du premier album studio de Sofiane, également connu sous le nom de Fianso ?",
            "answers": [
                { "text": "Bandit Saleté", "correct": true },
                { "text": "Affranchis", "correct": false },
                { "text": "93 Empire", "correct": false },
                { "text": "Je suis passé chez So", "correct": false }
            ]
        },
        {
            "question": "Quel est le nom du premier album studio de Damso ?",
            "answers": [
                { "text": "Ipséité", "correct": false },
                { "text": "Lithopédion", "correct": false },
                { "text": "Batterie Faible", "correct": true },
                { "text": "QALF", "correct": false }
            ]
        },
        {
            "question": "En quelle année est sorti l'album 'Dans la légende' de PNL ?",
            "answers": [
                { "text": "2015", "correct": false },
                { "text": "2016", "correct": true },
                { "text": "2017", "correct": false },
                { "text": "2018", "correct": false }
            ]
        },
        {
            "question": "Quel rappeur a collaboré avec Lacrim sur le titre 'Traîtres' ?",
            "answers": [
                { "text": "Booba", "correct": false },
                { "text": "SCH", "correct": true },
                { "text": "Kaaris", "correct": false },
                { "text": "Ninho", "correct": false }
            ]
        },
        {
            "question": "D'où vient le rappeur Naps ?",
            "answers": [
                { "text": "Paris", "correct": false },
                { "text": "Marseille", "correct": true },
                { "text": "Lyon", "correct": false },
                { "text": "Bordeaux", "correct": false }
            ]
        },
        {
            "question": "Quel est le véritable nom de Booba ?",
            "answers": [
                { "text": "Elie Yaffa", "correct": true },
                { "text": "Youssoupha Mabiki", "correct": false },
                { "text": "William Kalubi", "correct": false },
                { "text": "Aurélien Cotentin", "correct": false }
            ]
        },
        {
            "question": "Quel rappeur est connu pour son gimmick 'OKLM' ?",
            "answers": [
                { "text": "Niska", "correct": false },
                { "text": "Booba", "correct": true },
                { "text": "Kaaris", "correct": false },
                { "text": "Lacrim", "correct": false }
            ]
        },
        {
            "question": "Quel est le nom du projet collaboratif entre Vald et Suikon Blaz AD sorti en 2020 ?",
            "answers": [
                { "text": "Horizon Vertical", "correct": true },
                { "text": "XEU", "correct": false },
                { "text": "Ce monde est cruel", "correct": false },
                { "text": "V", "correct": false }
            ]
        }
    ];
    
    let currentPlayer = 0;
    let positions = Array(parseInt(players)).fill(1); // Initialisation des positions des joueurs
    let answeringQuestion = false;

    if (players) {
        const pointsContainer = document.createElement('div');
        pointsContainer.classList.add('points-container');
        
        for (let i = 0; i < players; i++) {
            const point = document.createElement('div');
            point.classList.add('point');
            point.textContent = i + 1;
            point.id = `player-${i}`;
            pointsContainer.appendChild(point);
        }

        firstCell.appendChild(pointsContainer);
    }

    const rollButton = document.getElementById('roll-dice');
    const diceDisplay = document.getElementById('dice-display');

    rollButton.addEventListener('click', function() {
        if (!answeringQuestion) {
            rollDiceWithAnimation();
        }
    });

    function rollDiceWithAnimation() {
        let rollResult = Math.floor(Math.random() * 6) + 1;
        let currentNumber = 1;
        let interval = 50;
        let iterations = 0;
        const maxIterations = 20;

        function animateDice() {
            diceDisplay.textContent = currentNumber;
            currentNumber = Math.floor(Math.random() * 6) + 1;
            iterations++;

            if (iterations > maxIterations) {
                diceDisplay.textContent = rollResult;
                movePlayer(rollResult);
            } else {
                interval += 20;
                setTimeout(animateDice, interval);
            }
        }

        animateDice();
    }

    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    function showRandomQuestion() {
        answeringQuestion = true;
        const questionContainer = document.createElement('div');
        questionContainer.id = 'question-container';
        const randomQuestionIndex = Math.floor(Math.random() * questions.length);
        const question = questions[randomQuestionIndex];

        const questionElement = document.createElement('p');
        questionElement.textContent = question.question;
        questionContainer.appendChild(questionElement);

        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.classList.add('answer-btn');
            button.addEventListener('click', () => selectAnswer(answer, questionContainer));
            questionContainer.appendChild(button);
        });

        document.body.appendChild(questionContainer);
    }

    function selectAnswer(answer, questionContainer) {
        const buttons = questionContainer.querySelectorAll('.answer-btn');
        buttons.forEach(button => {
            button.disabled = true;
            if (button.textContent === answer.text) {
                button.style.backgroundColor = answer.correct ? 'lightgreen' : 'lightcoral';
            }
        });
        if (answer.correct) {
            setTimeout(() => {
                movePlayer(3); // Avance de 3 cases si la réponse est correcte
                document.body.removeChild(questionContainer);
                answeringQuestion = false;
            }, 2000);
        } else {
            setTimeout(() => {
                document.body.removeChild(questionContainer);
                answeringQuestion = false;
            }, 2000);
        }
    }

    function movePlayer(steps) {
        const playerPoint = document.getElementById(`player-${currentPlayer}`);
        const currentPos = positions[currentPlayer];
        let newPos = currentPos + steps;
        if (newPos > 25) newPos = 25;

        const newCell = document.querySelector(`.cell:nth-child(${26 - newPos})`);
        newCell.appendChild(playerPoint);
        positions[currentPlayer] = newPos;

        if (isPrime(newPos)) {
            showRandomQuestion();
        } else {
            currentPlayer = (currentPlayer + 1) % players;
        }
    }
});
