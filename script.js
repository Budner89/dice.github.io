document.addEventListener('DOMContentLoaded', () => {
    let selectedDice = [];
    const diceButtons = document.querySelectorAll('.dice-btn');
    const resultsContainer = document.getElementById('result-container');
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close-btn");

    diceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const diceValue = parseInt(this.getAttribute('data-dice'), 10);
            const index = selectedDice.indexOf(diceValue);

            if (index > -1) {
                selectedDice.splice(index, 1);
                this.classList.remove('dice-btn-selected');
            } else {
                selectedDice.push(diceValue);
                this.classList.add('dice-btn-selected');
            }
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    document.getElementById('roll-btn').addEventListener('click', () => {
        if (selectedDice.length === 0) {
            modal.style.display = "block";
            return;
        }

        resultsContainer.innerHTML = '';
        let totalValue = 0;
        let maxTotal = selectedDice.reduce((acc, dice) => acc + dice, 0);

        selectedDice.forEach(dice => {
            const rollResult = 1 + Math.floor(Math.random() * dice);
            totalValue += rollResult;

            const resultContainer = document.createElement('div');
            resultContainer.classList.add('result-container');

            const diceTypeElement = document.createElement('div');
            diceTypeElement.classList.add('dice-type');
            diceTypeElement.textContent = `D${dice}`;

            const rollResultElement = document.createElement('div');
            rollResultElement.classList.add('roll-number', 'roll-animation');
            rollResultElement.textContent = rollResult;

            resultContainer.appendChild(diceTypeElement);
            resultContainer.appendChild(rollResultElement);

            resultsContainer.appendChild(resultContainer);
        });

        if (selectedDice.length > 1) {
            const totalContainer = document.createElement('div');
            totalContainer.classList.add('total-container');

            const totalNumber = document.createElement('div');
            totalNumber.classList.add('total-number');
            totalNumber.textContent = totalValue;

            // Determine the color based on the ratio of actual total to max potential
            const ratio = totalValue / maxTotal;
            let color;
            if (ratio < 0.3) {
                color = 'rgb(255, 100, 100)'; // Red
            } else if (ratio > 0.7) {
                color = 'rgb(100, 255, 100)'; // Green
            } else {
                color = 'rgb(200, 200, 200)'; // Grey
            }
            totalContainer.style.backgroundColor = color;

            // Set text color to white for contrast
            totalContainer.style.color = '#ffffff';

            const totalLabel = document.createElement('div');
            totalLabel.classList.add('total-label');
            totalLabel.textContent = "Total";

            totalContainer.appendChild(totalNumber);
            totalContainer.appendChild(totalLabel);

            resultsContainer.appendChild(totalContainer);
        }
    });

    document.getElementById('clear-btn').addEventListener('click', () => {
        selectedDice = [];
        diceButtons.forEach(button => button.classList.remove('dice-btn-selected'));
        resultsContainer.innerHTML = '';
        modal.style.display = "none";
    });
});
