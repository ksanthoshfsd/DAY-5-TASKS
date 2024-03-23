// Define an array of objects containing words
let wordsArray = [
    { word: "level" },
    { word: "radar" },
    { word: "hello" },
    { word: "racecar" },
    { word: "world" },
    { word: "madam" }
];

// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Check if the string is equal to its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Function to filter palindromes from an array of objects
function filterPalindromes(arr) {
    return arr.filter(obj => isPalindrome(obj.word));
}

// Filter palindromes from the array
let palindromeWords = filterPalindromes(wordsArray);

// Log the palindromes
console.log("Palindromes in the array:");
palindromeWords.forEach(obj => {
    console.log(obj.word);
});
