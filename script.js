// fetch the quote from the JSON file
function fetchQuote() {
  return fetch('quotes.json')
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      console.log('An error occurred while fetching the quote:', error);
      return null;
    });
}

// display the quote
function showQuote() {
  fetchQuote()
    .then(quote => {
      if (quote) {
        const { quote: motivationalQuote, author } = quote;
        alert(`Motivational Quote:\n\n"${motivationalQuote}" - ${author}`);
      } else {
        alert('No quote available.');
      }
    });
}

//  click event to the button
document.getElementById("start").addEventListener("click", showQuote);

// delete an entry by clearing the input field
function deleteEntry(inputId) {
  const inputField = document.getElementById(inputId);
  inputField.value = '';
}



// save an entry to the JSON file
function saveEntry(inputId) {
  const inputField = document.getElementById(inputId);
  const entryValue = inputField.value;
  const date = new Date().toLocaleDateString();
  const day = inputId.replace('Input', '');

  // object with the entry data
  const entryData = {
    day: day,
    date: date,
    entry: entryValue
  };

  // Get the existing entries from the JSON file or create an empty array
  let entries = localStorage.getItem('entries');
  entries = entries ? JSON.parse(entries) : [];

  // Add the new entry to the array
  entries.push(entryData);

  // Save the updated entries to the JSON file
  localStorage.setItem('entries', JSON.stringify(entries));

  // Clear the input field
  inputField.value = '';
  alert('Entry saved successfully!');
}

