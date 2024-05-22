document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const players = urlParams.get('players');
    const firstCell = document.querySelector('.cell-1');

    if (players) {
        const pointsContainer = document.createElement('div');
        pointsContainer.classList.add('points-container');
        
        for (let i = 0; i < players; i++) {
            const point = document.createElement('div');
            point.classList.add('point');
            point.textContent = i + 1; // Ajouter le numéro du joueur
            pointsContainer.appendChild(point);
        }

        firstCell.appendChild(pointsContainer);
    }

    const rollButton = document.getElementById('roll-dice');
    const diceDisplay = document.getElementById('dice-display');

    rollButton.addEventListener('click', function() {
        rollDiceWithAnimation();
    });

    function rollDiceWithAnimation() {
        let rollResult = Math.floor(Math.random() * 6) + 1; // Génère un nombre aléatoire entre 1 et 6
        let currentNumber = 1;
        let interval = 50; // Intervalle initial en millisecondes
        let iterations = 0;
        const maxIterations = 20; // Nombre maximum d'itérations avant d'afficher le résultat final

        function animateDice() {
            diceDisplay.textContent = currentNumber;
            currentNumber = Math.floor(Math.random() * 6) + 1; // Change le chiffre aléatoirement
            iterations++;

            if (iterations > maxIterations) {
                diceDisplay.textContent = rollResult; // Affiche le résultat final
            } else {
                interval += 20; // Augmente l'intervalle pour ralentir l'animation
                setTimeout(animateDice, interval); // Planifie le prochain appel avec le nouvel intervalle
            }
        }

        animateDice(); // Démarre l'animation
    }
});
