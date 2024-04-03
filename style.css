* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, html {
    margin: 0;
    padding: 0;
    font-family: 'Merriweather', serif; /* A serif font that's modern yet retains an old-world charm */
    background-color: #453227; /* Darker, richer wood tone */
    color: #E4D6C3; /* Soft, parchment-like color for text */
    text-align: center; /* Center-aligns text for a cleaner look */
}


.dice-selector {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    padding: 20px 0; /* Adds vertical spacing */
}

.dice-btn {
    padding: 12px 24px; /* Slightly larger padding for a more touch-friendly design */
    cursor: pointer;
    background-color: #5D4B3C; /* A warm, leather-like color */
    border: 2px solid #44342A; /* Slightly darker border for depth */
    color: #F4EFE6; /* Lighter color for contrast */
    border-radius: 8px; /* Slightly rounder corners for a modern look */
    font-size: 18px; /* Larger font size for readability */
    font-weight: 500; /* Medium font weight for emphasis */
    transition: all 0.3s ease; /* Smoother transition for hover effects */
}

#result-display, #welcome-message {
    background-color: rgba(93, 64, 55, 0.85);
    color: #FBEEDE;
    margin: 20px auto;
    padding: 20px;
    border-radius: 8px;
    max-width: 80%;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.dice-btn:hover, .dice-btn-selected {
    background-color: #75655D; /* Lighter shade for interaction */
    color: #F4EFE6; /* Ensures text color contrasts well with the background */
    border-color: #A68B79; /* Lighter border for emphasis */
}

.clear-btn {
    background-color: #d3d3d3;
    display: block;
    margin: 10px auto;
    padding: 10px 20px;
    cursor: pointer;
    display: inline-block;
}

/* Roll and Clear Button Styles */
#roll-btn, #clear-btn {
    background-color: #bdbdbd; /* Warm, inviting */
    color: #00000;
    padding: 12px 25px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    margin: 10px;
    display: inline-block; /* Side by side display */
}



#clear-btn:hover {
    background-color: #BF360C; 
    color: #ffffff;

}


#roll-btn {
    padding: 15px 30px; /* Larger button for easier interaction */
    background-color: #ff9800; /* A deep, inviting orange, simulating candlelight */
    border-color: #A68B79; /* Lighter border for emphasis */
    color: #fffff; /* Brighter text color for legibility */
    font-size: 20px; /* Bigger text for clarity */
    border-radius: 8px; /* Consistent rounded corners */
    margin-top: 30px; /* More space above the roll button */
    width: 50%; /* Makes the button wider and easier to click */
    max-width: 300px; /* Limits width on larger screens */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

#roll-btn:hover {
    background-color: #8A735E; /* A lighter, more welcoming fire-like color on hover */
    color: #000000;
    /* background-color: #ff9800; /* A deep, inviting orange, simulating candlelight */
    border-color: #000000; /* Lighter border for emphasis */
}

#result-display {
    margin-top: 20px;
    text-align: center;
    font-size: 24px;
    border-top: 2px dashed #f1e4d4; /* Parchment-like separator */
    padding-top: 10px;
}
#welcome-message {
    background-color: #5d4037; /* A deep, warm brown, evoking aged wood. */
    color: #fbe9e7; /* A soft, warm cream, resembling candlelight. */
    font-size: 20px;
    font-family: 'Times New Roman', serif;
    text-align: center;
    padding: 20px;
    margin-bottom: 30px; /* Adds some space before the dice selector for better visual separation. */
    border-bottom: 4px solid #3e2723; /* A darker line to emulate the shadow or separation in old structures. */
}


.dice-btn-selected {
    background-color: #ffc107; /* Highlight color */
    color: black;
    border: 2px solid #ff9800; /* Optional: adds a border to make it more noticeable */
}

@keyframes rollDiceAnimation {
  0% {
    transform: rotateX(0) rotateY(0);
    opacity: 0;
  }
  25% {
    transform: rotateX(180deg) rotateY(180deg);
    opacity: 0.5;
  }
  50% {
    transform: rotateX(360deg) rotateY(360deg);
    opacity: 0.75;
  }
  75% {
    transform: rotateX(540deg) rotateY(540deg);
    opacity: 0.5;
  }
  100% {
    transform: rotateX(720deg) rotateY(720deg);
    opacity: 1;
  }
}

.roll-animation {
    animation: rollDiceAnimation 0.2s ease-in-out;
}

.roll-number {
    font-size: 48px;
    width: 100px; /* Adjust size as needed */
    height: 100px; /* Keep width and height the same for a square */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1e4d4;
    color: #94785d;
    border-radius: 10px;
    border: 3px solid #6a4f4b;
    margin: 5px; /* Ensures spacing between boxes */
    text-align: center;
}

.roll-number, .dice-type {
    padding: 10px;
    border-radius: 5px;
    text-align: center;
}

.dice-type {
    background-color: #fff; /* Or any color that fits the theme */
    color: #333; /* Contrast color for the text */
}

.dice-type, .roll-number {
    padding: 5px 10px;
    border-radius: 5px;
    text-align: center;

}

.result-container {
    display: flex;
    align-items: center; /* Vertically center the contents */
    gap: 10px; /* Space between the roll number and dice type */
    justify-content: center; /* Center the container's contents */
    margin: 10px; /* Margin around each result container for spacing */
}


#roll-text {
    font-size: 24px;
    color: #f1e4d4; /* Adjust the color to fit the tavern theme */
    margin-bottom: 10px; /* Adds some space between the text and the number */
}

.outer-container {
    display: flex;
    justify-content: center;
    width: 100%; /* Takes full width of its parent */
}

/* Modal Styles */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
    background-color: #5d4037;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
    border-radius: 5px;
}

.close-btn {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close-btn:hover,
.close-btn:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

/* Ensure body has a minimum height to cover the viewport height */
body, html {
    height: 100%;
}

/* Adjustments for screens smaller than 600px wide */
@media (max-width: 600px) {
    /* Adjust font sizes for readability on smaller screens */
    body, html {
        font-size: 16px;
    }

    #welcome-message, .dice-btn, #roll-btn, .modal-content p {
        font-size: 1em; /* Adjust font size to maintain readability */
    }

    .dice-selector {
        justify-content: center; /* Reiterate centering for clarity */
        width: 100%; /* Ensure it's explicitly set if necessary */
        max-width: none; /* Remove max-width constraint on small screens */
    }

    .dice-btn, #roll-btn {
        padding: 12px; /* Increase padding for better touch interaction */
        font-size: larger; /* Increase font size for better visibility */
    }

    .modal-content {
        width: 90%; /* Increase width to use more screen space */
        padding: 10px; /* Adjust padding for space efficiency */
    }

    .result-container {
        flex-direction: column; /* Stack dice type and roll result vertically */
    }

    .roll-number, .dice-type {
        width: auto; /* Adjust width to fit content */
        height: auto; /* Adjust height to fit content */
        font-size: 2em; /* Increase font size for visibility */
    }
}

/* Additional media query for even smaller devices (less than 400px) */
@media (max-width: 400px) {
    .dice-selector {
        margin: 10px 0; /* Reduce margin for more screen space */
    }

    .dice-btn, #roll-btn {
        width: auto; /* Allow buttons to adjust width to content */
    }
}



.total-label, .total-number {
    font-size: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    width: 100px;
    height: 100px;
}

.total-container {
    padding: 10px;
    border-radius: 8px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    /* Avoid setting background-color or color here to allow JS to control it */
}

.total-content {
    /* background-color: #8a2be2; /* Example background color */
    color: #f1e4d4; /* Text color */
    border: 3px solid #6a4f4b;
    border-radius: 10px;
    padding: 10px;
    display: inline-flex; /* Use inline-flex to keep label and number in the same line */
    align-items: center; /* Vertically center the contents */
    gap: 5px; /* Space between the "Total" label and the number */
}

.total-label, .total-number {
    font-size: 48px; /* Adjust as necessary for consistency */
}

/* If you want the "Total:" label to be smaller than the number */
.total-label {
    font-size: 36px; /* Smaller font size for the "Total:" label */
}

.total-number {
    font-size: 48px; /* Maintain larger font size for numbers */
   /* background-color: #8a2be2; /* Same background color for consistency */
    color: #f1e4d4;
    width: 100px; /* Adjust width as needed */
    height: 100px; /* Adjust height as needed */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px; /* Consistent rounding */
    border: 0px solid #6a4f4b; /* Consistent border styling */
}

.total-number {
    /* Other styling */
    color: inherit; /* Fallback to ensure JS-set color takes precedence */
}
/* Continue with existing styles... */
