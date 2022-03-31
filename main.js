// Programming with Mosh - OOP homework
function Stopwatch () {
    let duration = 0;
    let isStopped = true;

    this.start = function () {
        if (isStopped) {
            duration = Date.now();
            console.log('Starting timer...');
            isStopped = !isStopped
        } else {
            throw "Stopwatch has already started.";
        }

    }

    this.stop = function () {
        if (!isStopped) {
            duration = (Date.now() - duration) / 1000;
            isStopped = !isStopped
        } else {
            throw "Stopwatch has already stopped."
        }
    }

    this.reset = function () {
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: _ => duration,
    })

}

const sw = new Stopwatch();

// Javascript.info - Objects

// TASK 1 - Hello, object
const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// TASK 2 - Check for emptiness
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true
}

// TASK 3 - Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    totalSalaries: function () {
        let total = 0;
        for (key in salaries) {
            if (typeof salaries[key] !== "function") {
                total += salaries[key];
            }
        }
        return total;
    }
}

console.log(salaries.totalSalaries())

// TASK 4 - Multiply numeric property values by 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] = obj[key] * 2
        }
    }
}

multiplyNumeric(menu)
console.log(menu.width)