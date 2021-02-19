//shape container for blue square
const shapeconstainer = document.getElementById('shape-container');


//get shapes elements
const formShape = document.getElementById("formShape");
const rectangle = document.getElementById("rect-btn");
const Square = document.getElementById("Square-btn");
const circle = document.getElementById("Circle-btn");
const Triangle = document.getElementById("Iso-triangle-btn");

// shape metrics
const recHeight = document.getElementById("rect-height");
const recWidth = document.createAttribute("rectangle-width");
const SquareLength = document.getElementById("Side-length");
const circleRadius = document.getElementById("Radius");
const triangleHeight = document.getElementById("Height");




//Class- Shape Shape is very generic Try to put as much logic in this class as you can, but remember, sometimes you have to put logic in child classes for more custom behavior
class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.div = document.createElement('Div');
        this.div.classname = 'Shape';
        
    }

}


//Class- Circle Needs to take a single parameter, radius, in its constructor Needs to call the constructor of its logical parent class Can have methods that define behavior/calculations specific to Circles
class Circle{
    constructor(radius) {

        this.radius = radius;
        
    }
}

class Triangle{
    constructor(height){
       this.height = height;
       this.width = height;
       this.perimeter = 2 * height + Math.sqrt(2) * height;
       this.area = 0.5 * base * height;
       this.name = Triangle;
       

    }
}

class rectangle extends shape{
    constructor(width, height) {
        this.name = "Rectangle";
        this.area = height * width;
    }
    
}

class Square extends Shape {
    constructor(sideLength){
       this.area = area.sqrt(2);
       this.sideLength = sideLength;
       this.div = document.createElement('div');
       this.div.className = 'square';
       shapeconstainer.appendChild(this.div);
        
    }
}


// button clicks

