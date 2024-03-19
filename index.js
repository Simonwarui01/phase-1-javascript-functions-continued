function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Function expression for mondayWork with a default activity
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

// Function to create a function that wraps an adjective in a highlight
function wrapAdjective(highlight = "*") {
    return function(adjective) {
        return `You are ${highlight}${adjective}${highlight}!`;
    }
}

// Exporting the functions
module.exports = {
    saturdayFun, // Corrected syntax here
    mondayWork, // Corrected syntax here
    wrapAdjective // Corrected syntax here
};