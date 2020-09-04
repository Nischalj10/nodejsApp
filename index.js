var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b)

    rect(l,b, (err, rectangle) => {
        if (err){
            console.log(err.message)
        }
        else {
            console.log("The area of rectangle with l = " + l + " and b = " + b + " is " + rectangle.area())
            console.log("The perimeter of rectangle with l = " + l + " and b = " + b + " is " + rectangle.perimeter())
        }
    })

    console.log("This message is after callback!")
}

solveRect(2,4)
solveRect(3,5)
solveRect(0, 4)
solveRect(-2, 4)