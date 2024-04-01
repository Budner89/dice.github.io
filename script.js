document.addEventListener('DOMContentLoaded', () => {
    let selectedDice = []; // Updated to hold multiple selections
    const diceButtons = document.querySelectorAll('.dice-btn');
    const resultsContainer = document.getElementById('result-container'); // Container for results

    // Toggle selection state for dice buttons
    diceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const diceValue = parseInt(this.getAttribute('data-dice'), 10);
            const index = selectedDice.indexOf(diceValue);

            if (index > -1) {
                // If dice already selected, remove from array
                selectedDice.splice(index, 1);
                this.classList.remove('dice-btn-selected');
            } else {
                // Add newly selected dice to array
                selectedDice.push(diceValue);
                this.classList.add('dice-btn-selected');
            }
        });
    });

    document.getElementById('roll-btn').addEventListener('click', () => {
        resultsContainer.innerHTML = ''; // Clear results before displaying new ones

        selectedDice.forEach(dice => {
            const rollResult = 1 + Math.floor(Math.random() * dice);

            // Container for the dice type and roll result
            const resultContainer = document.createElement('div');
            resultContainer.classList.add('result-container');

            // Element for the dice type
            const diceTypeElement = document.createElement('div');
            diceTypeElement.classList.add('dice-type');
            diceTypeElement.textContent = `D${dice}`;

            // Element for the roll result with animation class applied
            const rollResultElement = document.createElement('div');
            rollResultElement.classList.add('roll-number');
            rollResultElement.textContent = rollResult;

            // Append the dice type and result elements to the container
            resultContainer.appendChild(diceTypeElement);
            resultContainer.appendChild(rollResultElement);

            // Append the container to the main results container
            resultsContainer.appendChild(resultContainer);

            // Apply animation class
            rollResultElement.classList.add('roll-animation');
            // Force reflow/repaint to restart the animation
            void rollResultElement.offsetWidth;
            // Re-apply the animation class to trigger the animation
            rollResultElement.classList.add('roll-animation');
        });
    });
});
