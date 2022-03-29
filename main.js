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