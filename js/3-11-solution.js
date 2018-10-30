function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration;
    },
    set: function(value) {
      duration = value;
    }
  });
  Object.defineProperty(this, 'startTime', {
    get: function() {
      return startTime;
    },
    set: function(value) {
      startTime = value;
    }
  });
  Object.defineProperty(this, 'endTime', {
    get: function() {
      return endTime;
    },
    set: function(value) {
      endTime = value;
    }
  });
  Object.defineProperty(this, 'running', {
    get: function() {
      return running;
    },
    set: function(value) {
      running = value;
    }
  });
}

const sw = new Stopwatch();

Stopwatch.prototype.start = function() {
  if (this.running) throw new Error('Stopwatch has already started.');

  this.running = true;

  this.startTime = new Date();
};

Stopwatch.prototype.stop = function() {
  if (!this.running) throw new Error('Stopwatch is not started.');

  this.running = false;

  this.endTime = new Date();

  const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += seconds;
};

Stopwatch.prototype.reset = function() {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  this.duration = 0;
};
