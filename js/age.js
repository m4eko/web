// Set your birthday here
var birth = new Date('2006-01-26'); // Replace with your birthday
var now = new Date();

// Calculate the difference in milliseconds
var difference = now - birth;

// Convert the difference to a date and calculate the age
var age = new Date(difference).getFullYear() - 1970;

// Update the age in the HTML element with ID 'age'
var span = document.getElementById('age');
if (span) {
    span.innerHTML = age;
}