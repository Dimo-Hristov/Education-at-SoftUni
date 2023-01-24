function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementById('searchField');
      let rows = document.querySelectorAll('tbody tr');

      for (const row of rows) {
         row.classList.remove('select')
         if (input.value !== '' && row.textContent.includes(input.value)) {
            row.className = 'select'
         }
      }
   }
}

// Write a function that searches in a table by given input.
// When the "Search" button is clicked, go through all cells in the table except for the first row (Student name, Student email, and Student course) and check if the given input has a match (check for both full words and single letters).

// If any of the rows contain the submitted string, add a class select to that row. Note that more than one row may contain the given string.

// Оtherwise, if there is no match, nothing should happen.

// Note: After every search ("Search" button is clicked), clear the input field and remove all already selected classes (if any) from the previous search, for the new search to contain only the new result.