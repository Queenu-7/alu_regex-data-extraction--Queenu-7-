const fs = require('fs');

// Importing the built-in 'fs' module so we can read files from the computer
const input = fs.readFileSync('sample_data.txt','utf-8');

// This is going to read the file named sample_data.txt and utf-8 makes sure its read as normal text not as binary

function extractEmails(text) {
	return text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [];
}

//Function to find emails in the text, looking for patterns using match and RegEx

function extractURLs (text) {
	return text.match(/https?:\/\/[^\s"]+/g) || [];
}

//This one finds urls(links) in the text, looks for links that start with http:// or https:// and again if none are found it returns an empty list

function extractPhoneNumbers(text) {
	return text.match(/(\(\d{3}\)\s*\d{3}[-.]\d{4})|(\d{3}[-.]\d{3}[-.]\d{4})/g) || [];
}

//Function to find phone numbers in the text, matching numbers like (123) 456-7890, 123-456-7890 or 123.456.7890

function extractCreditCards(text) {
	return text.match(/\b(?:\d{4}[- ]?){3}\d{4}\b/g) || [];
}

//Function to find credit card number in the text, matching credit card numbers like 1234 5678 9012 3456 0r 1234-5678-9012-3456 and the usual outcome if none are found

function extractCurrencyAmounts(text) {
	return text.match(/\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g) || [];
}

console.log("🙌 Successfully Extracted Emails:", extractEmails(input));
console.log("🎉 Successfully Extracted URLs:", extractURLs(input));
console.log("🥳 Successfully Extracted Phone Numbers:", extractPhoneNumbers(input));
console.log("🤩 Successfully Extracted Credit Cards:", extractCreditCards(input));
console.log("💰 Successfully Extracted Currency Amounts:", extractCurrencyAmounts(input));
