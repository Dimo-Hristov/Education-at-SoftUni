function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient-box');
    gradientElement.addEventListener('mousemove', (e) => {
        document.getElementById('result').textContent = `${Math.floor(e.offsetX / 300 * 100)}%`;
    })
}

// 4. Mouse Gradient

// Write a program that detects and displays how far along a gradient the user has moved their mouse. The result should be rounded down and displayed as a percentage inside the <div> with id "result".

// Submit only the attachGradientEvents() function in Judge.

// Input/Output

// There will be no input/output, your program should instead modify the DOM of the given HTML document.