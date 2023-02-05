class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(p1, p2) {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        return Math.sqrt(dx ** 2 + dy ** 2);
    }
}

// Write a JS class that represents a Point. It has x and y coordinates as properties, that are set through the constructor, and a static method for finding the distance between two points, called distance().

// Input

// The distance() method should receive two Point objects as parameters.

// Output

// The distance() method should return a number, the distance between the two-point parameters.

// Submit the class definition as is, without wrapping it in any function.