document.addEventListener('DOMContentLoaded', () => {
    let selectedDice = [];
    const diceButtons = document.querySelectorAll('.dice-btn');
    const resultsContainer = document.getElementById('result-container');
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close-btn");

    // Toggle selection state for dice buttons
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

    // Close the modal when the close button is clicked
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal if the user clicks outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById('roll-btn').addEventListener('click', () => {
        if (selectedDice.length === 0) {
            // Show the modal if no dice are selected
            modal.style.display = "block";
            return; // Prevent further execution
        }

        resultsContainer.innerHTML = ''; // Clear results before displaying new ones

        selectedDice.forEach(dice => {
            const rollResult = 1 + Math.floor(Math.random() * dice);
            const resultContainer = document.createElement('div');
            resultContainer.classList.add('result-container');

            const diceTypeElement = document.createElement('div');
            diceTypeElement.classList.add('dice-type');
            diceTypeElement.textContent = `D${dice}`;

            const rollResultElement = document.createElement('div');
            rollResultElement.classList.add('roll-number');
            rollResultElement.textContent = rollResult;

            resultContainer.appendChild(diceTypeElement);
            resultContainer.appendChild(rollResultElement);
            resultsContainer.appendChild(resultContainer);

            // Apply animation
            rollResultElement.classList.add('roll-animation');
            void rollResultElement.offsetWidth;
            rollResultElement.classList.add('roll-animation');
        });
    });

    // Clear button functionality
    document.getElementById('clear-btn').addEventListener('click', () => {
        selectedDice = []; // Reset selected dice
        diceButtons.forEach(button => button.classList.remove('dice-btn-selected')); // Deselect all dice buttons
        resultsContainer.innerHTML = ''; // Clear the results display
    });
});
