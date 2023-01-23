function search() {
   let givenLetters = document.getElementById('searchText').value;
   let townsElement = Array.from(document.querySelectorAll('#towns li'));
   let counter = 0;

   for (const town of townsElement) {
      if (town.textContent.includes(givenLetters)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline'
         counter++
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   document.getElementById('result').textContent = `${counter} matches found`
}

// An HTML page holds a list of towns, a search box, and a [Search] button. Implement the search function to bold and underline the items from the list which include the text from the search box. Also, print the number of items the current search matches in the format `${matches} matches found`.

// Note: It is necessary to clear the results of the previous search.

// Write your JavaScript code in this file: