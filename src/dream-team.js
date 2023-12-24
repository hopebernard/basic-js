const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
 
  // Create an array to store the first letters of the members' names
  let dreamTeamName = [];
 
  // Loop through the members array
  for (let i = 0; i < members.length; i++) {
    // Check if the current member is a string
    if (typeof members[i] === 'string') {
      // Get the first letter of the member's name
      let firstLetter = members[i].charAt(0).toUpperCase();
 
      // Push the first letter to the dreamTeamName array
      dreamTeamName.push(firstLetter);
    }
  }
 
  // Sort the dreamTeamName array alphabetically
  dreamTeamName.sort();
 
  // Join the letters in the dreamTeamName array
  let dreamTeamNameString = dreamTeamName.join('');
 
  // Return the dream team name
  return dreamTeamNameString;
}

module.exports = {
  createDreamTeam
};
