const smoothScrollTo = (element, target, duration) => {
    target = Math.round(target);
    duration = Math.round(duration);
    if (duration < 0) {
      return Promise.reject("bad duration");
    }
    if (duration === 0) {
      element.scrollLeft = target;
      return Promise.resolve();
    }
  
    const startTime = Date.now();
    const endTime = startTime + duration;
  
    const startLeft = element.scrollLeft;
    const distance = target - startLeft;
  
    const smoothStep = (start, end, point) => {
      if (point <= start) { return 0; }
      if (point >= end) { return 1; }
      const x = (point - start) / (end - start);
      return x * x * (3 - 2 * x);
    }
  
    return new Promise(resolve => {
      const timer = setInterval(() => {
        const time = Date.now();
        const fraction = (time - startTime) / duration;
        if (time >= endTime) {
          clearInterval(timer);
          resolve();
        }
        const currentLeft = startLeft + distance * smoothStep(startTime, endTime, time);
        element.scrollLeft = currentLeft;
      }, 10);
    });
  }
  export default smoothScrollTo