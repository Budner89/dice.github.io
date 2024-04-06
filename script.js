document.addEventListener('DOMContentLoaded', () => {
    let selectedDice = [];
    const diceButtons = document.querySelectorAll('.dice-btn');
    const resultsContainer = document.getElementById('result-container');
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close-btn");
    const historyLog = document.getElementById('history-log');
    const historyTitle = document.getElementById("history-title");
    
    let rollIndex = 1; // Declare rollIndex variable outside the click event listener

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

        const prevDiceCount = selectedDice.length; // Store previous dice count

        resultsContainer.innerHTML = '';
        let totalValue = 0;
        let maxTotal = selectedDice.reduce((acc, dice) => acc + dice, 0);
        let rollResults = [];

        selectedDice.forEach(dice => {
            const rollResult = 1 + Math.floor(Math.random() * dice);
            totalValue += rollResult;
            rollResults.push(`D${dice}: ${rollResult}`);

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

        const historyItem = document.createElement('div');
        historyItem.textContent = `Roll ${rollIndex}: ${rollResults.join(', ')}`;
        historyLog.appendChild(historyItem);

        // Check if the total number of dice rolled is greater than one
        if (selectedDice.length + prevDiceCount > 1) {
            historyTitle.classList.remove('hidden'); // Show the result title
        }

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
                color = 'rgb(180, 70, 70)'; // Slightly darker red
            } else if (ratio > 0.7) {
                color = 'rgb(70, 180, 70)'; // Slightly darker green
            } else {
                color = 'rgb(150, 150, 150)'; // Slightly darker grey
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

        // Show the history log and title
        historyLog.style.display = "block";
        historyTitle.style.display = "block";

        // Check if confetti should be triggered
        if ((selectedDice.length === 1 && totalValue === maxTotal) || 
            (selectedDice.length > 1 && rollResults.every(result => result.endsWith(maxTotal)))) {
            // Trigger confetti
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }

        // Increment the roll index
        rollIndex++;
    });

    document.getElementById('clear-btn').addEventListener('click', () => {
        selectedDice = [];
        diceButtons.forEach(button => button.classList.remove('dice-btn-selected'));
        resultsContainer.innerHTML = '';
        historyLog.innerHTML = ''; // Clear history log
        modal.style.display = "none";
        historyLog.style.display = "none"; // Hide history log on clear
        historyTitle.style.display = "none"; // Hide result title on clear

        // Reset roll index
        rollIndex = 1;
    });
});
