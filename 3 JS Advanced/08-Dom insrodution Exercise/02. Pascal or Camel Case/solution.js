function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let result = '';

  if (convention === 'Camel Case') {
    for (let i = 0; i < text.length; i++) {
      if (text[i] == ' ') {
        result += text[i + 1].toUpperCase();
        i++
      } else {
        result += text[i].toLowerCase();
      }
    }
  } else if (convention == 'Pascal Case') {
    result += text[0].toUpperCase();
    for (let i = 1; i < text.length; i++) {
      if (text[i] == ' ') {
        result += text[i + 1].toUpperCase();
        i++
      } else {
        result += text[i].toLowerCase();
      }
    }
  } else {
    result = 'Error!'
  }
  document.getElementById('result').textContent = result;
}

// An HTML file is given and your task is to write a function that takes two string parameters as an input and transforms the first parameter to the type required by the second parameter.

// · The first parameter will be the text that you need to modify depending on the second parameter. The words in it will always be separated by space.

// · The second parameter will be either "Camel Case" or "Pascal Case". In case of different input, your output should be "Error!"

// When the button is clicked the function should convert the first string to either of the cases. The output should consist of only one word - the string you have modified. Once your output is done, you should set it as HTML to the <span> element. For more information, see the examples below:

// Example

// Input Output

// "this is an example", "Camel Case" => thisIsAnExample

// "secOND eXamPLE", "Pascal Case" => SecondExample

// "Invalid Input", "Another Case" => Error