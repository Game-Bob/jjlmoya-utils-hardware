import { StatisticalFilter } from '../logic/StatisticalFilter';
import { MovingAverage } from '../logic/MovingAverage';

const statisticalFilter = new StatisticalFilter();
const smoothingFilter = new MovingAverage(20);

let lastTime = 0;
let maxHz = 0;
const history: number[] = [];

self.onmessage = (event: MessageEvent<{ time: number } | 'reset'>) => {
  if (event.data === 'reset') {
    lastTime = 0;
    return;
  }

  const { time } = event.data;
  
  if (lastTime === 0) {
    lastTime = time;
    return;
  }

  const delta = time - lastTime;
  lastTime = time;

  if (delta <= 0 || delta > 100) return;

  const hz = 1000 / delta;

  if (statisticalFilter.isOutlier(hz)) {
    return;
  }

  const smoothedHz = smoothingFilter.next(hz);
  
  history.push(hz);
  if (history.length > 200) history.shift();
  
  if (hz > maxHz) maxHz = hz;

  const avgHz = history.reduce((a, b) => a + b, 0) / history.length;

  self.postMessage({
    hz,
    smoothedHz,
    avgHz,
    maxHz
  });
};
