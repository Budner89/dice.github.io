<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Essential for mobile-friendly pages -->
    <title>D&D Dice Roller</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
<div id="welcome-message">
    Welcome to the Dice Tavern! Select your dice and let fate decide your next move.
</div>

<div class="dice-selector">
    <button class="dice-btn" data-dice="4">D4</button>
    <button class="dice-btn" data-dice="6">D6</button>
    <button class="dice-btn" data-dice="8">D8</button>
    <button class="dice-btn" data-dice="10">D10</button>
    <button class="dice-btn" data-dice="12">D12</button>
    <button class="dice-btn" data-dice="20">D20</button>
    <button class="dice-btn" data-dice="100">D100</button>
</div>
<button id="roll-btn">Roll Dice</button>
<button id="clear-btn">Clear</button> <!-- Clear button added here -->

<!-- Roll result container -->
<div class="outer-container">
    <div id="result-container">
<!--         <div id="roll-text">You rolled:</div> -->
        <div id="roll-number"></div>
    </div>
</div>

<!-- Modal Structure -->
<div id="modal" class="modal">
    <div class="modal-content">
        <span class="close-btn">&times;</span>
        <p>Please select at least one dice to roll.</p>
    </div>
</div>

<script src="script.js"></script>
</body>
</html>
