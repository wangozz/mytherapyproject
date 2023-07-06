    // // Fetch the JSON file
    // fetch('diary.json')
    //   .then(response => response.json()) // Parse the response as JSON
    //   .then(data => {
    //     // Access the diary entries
    //     const diaryEntries = data.diaryEntries;

    //     // Get the 'entries' element
    //     const entriesContainer = document.getElementById('diary');

    //     // Iterate through the diary entries
    //     diaryEntries.forEach(entry => {
    //       // Create a new paragraph element for each entry
    //       const entryElement = document.createElement('p');
    //       entryElement.textContent = `${entry.date}: ${entry.entry}`;

    //       // Append the entry element to the 'entries' container
    //       entriesContainer.appendChild(entryElement);
    //     });
    //   })
    //   .catch(error => {
    //     console.log('An error occurred:', error);
    //   });
// Function to fetch the quotes from the JSON file
function fetchQuotes() {
  return fetch('quotes.json')
    .then(response => response.json())
    .then(data => data.quotes)
    .catch(error => {
      console.log('An error occurred while fetching the quotes:', error);
      return [];
    });
}

// Function to show a random quote
function showRandomQuote() {
  fetchQuotes()
    .then(quotes => {
      if (quotes.length > 0) {
        // Get a random index from the quotes array
        const randomIndex = Math.floor(Math.random() * quotes.length);

        // Get the random quote object
        const randomQuote = quotes[randomIndex];

        // Alert the quote with the author
        alert(`${randomQuote.quote}\n- ${randomQuote.author}`);
      } else {
        alert('No quotes available.');
      }
    });
}

// Attach click event to the button
document.getElementById("start").addEventListener("click", showRandomQuote);

      