/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

import { maxBy } from './e17';

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let countForYear = data.asteroids
    .reduce((count, asteroid) => {
      count[asteroid.discoveryYear] = (count[asteroid.discovery] || 0) + 1;
      return count;
    }, {});
    return parseInt(maxBy(Object.keys(countForYear), year => countForYear[year]), 10);
}

//starts with empty object, reduce data by counting the discoveries of each iterated year, and groups them.
//using the maxby function from last ex, return the max count, if there was no count for a specific year 
// it defaults to 0. return the result after parsing the int with radix of 10 otherwise returns year 1801

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
