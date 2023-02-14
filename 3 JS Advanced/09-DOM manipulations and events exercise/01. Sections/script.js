function create(words) {
   let parent = document.getElementById("content");

   for (const word of words) {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.style.display = "none";
      p.textContent = word;
      div.appendChild(p);
      div.addEventListener("click", (e) => {
         e.target.querySelector("p").style.display = "block";
      });
      parent.appendChild(div);
   }
}


// You will receive an array of strings. For each string, create a div with a paragraph with the string in it. Each paragraph is initially hidden (display:none). Add a click event listener to each div that displays the hidden paragraph. Finally, you should append all divs to the element with an id "content".