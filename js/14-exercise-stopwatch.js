// Mosh's code
function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function() {
    if (running) throw new Error('Stopwatch has already started.');

    running = true;

    startTime = new Date();
  };

  this.stop = function() {
    if (!running) throw new Error('Stopwatch is not started.');

    running = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration;
    }
  });
}

// Herri's code
// function Stopwatch() {
//   let duration = 0;

//   let isRunning = false;
//   let start;

//   Object.defineProperty(this, 'duration', {
//     get: function() {
//       return duration;
//     }
//   });

//   this.start = function() {
//     if (isRunning) throw new Error('Stopwatch has already started.');

//     isRunning = true;
//     start = Date.now();
//   };

//   this.stop = function() {
//     if (!isRunning) throw new Error('Stopwatch is not started.');

//     isRunning = false;
//     duration += (Date.now() - start) / 1000;
//     // duration += msToTime(Date.now() - start);
//   };

//   this.reset = function() {
//     duration = 0;
//   };
// }
