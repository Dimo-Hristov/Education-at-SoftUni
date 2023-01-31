function calculator() {
    let num1Element;
    let num2Element;
    let sumElement;

    return {
        init: (selector1, selector2, resultSelector) => {
            num1Element = document.querySelector(selector1);
            num2Element = document.querySelector(selector2);
            sumElement = document.querySelector(resultSelector);
        },
        add: () => (sumElement.value = +num1Element.value + +num2Element.value),
        subtract: () => (sumElement.value = +num1Element.value - +num2Element.value),
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');


// Create a function calculator which returns an object that can modify the DOM. The returned object should support the following functionality:

// · init (selector1, selector2, resultSelector) - initializes the object to work with the elements corresponding to the supplied selectors.

// · add () - adds the numerical value of the element corresponding to selector1 to the numerical value of the element corresponding to selector2 and then writes the result in the element corresponding to resultSelector.

// · subtract () - subtracts the numerical value of the element corresponding to selector1 from the numerical value of the element corresponding to selector2 and then writes the result in the element corresponding to resultSelector.

// Input

// There will be no input your function must only provide an object.

// Output

// Your function should return an object that meets the specified requirements.

// Constraints

// · All commands will always be valid, there will be no nonexistent or incorrect input.

// · All selectors will point to single textbox elements.

// · Use the given skeleton to solve this problem




