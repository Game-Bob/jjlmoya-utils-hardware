import type { PointSample } from './model';

interface RenderOptions {
  points: PointSample[];
  jitter: number;
  getCss: (name: string, fallback: string) => string;
}

export function drawGrid(ctx: CanvasRenderingContext2D, width: number, height: number, getCss: RenderOptions['getCss']) {
  ctx.fillStyle = getCss('--mjas-canvas-bg', '#071013');
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = getCss('--mjas-grid', 'rgba(103, 232, 249, 0.14)');
  ctx.lineWidth = 1;
  drawGridLines(ctx, width, height, 'x');
  drawGridLines(ctx, width, height, 'y');
}

export function drawTrace(ctx: CanvasRenderingContext2D, { points, getCss }: RenderOptions) {
  ctx.lineWidth = 2;
  ctx.strokeStyle = getCss('--mjas-line', '#67e8f9');
  ctx.beginPath();
  points.forEach((point, index) => (index === 0 || point.fresh ? ctx.moveTo(point.x, point.y) : ctx.lineTo(point.x, point.y)));
  ctx.stroke();
}

export function drawNodes(ctx: CanvasRenderingContext2D, { points, jitter, getCss }: RenderOptions) {
  const nodeColor = getCss('--mjas-node', '#facc15');
  const hotColor = getCss('--mjas-hot-node', '#fb7185');
  points.slice(-380).forEach((point, index, list) => {
    const age = index / list.length;
    ctx.fillStyle = age > 0.82 && jitter > 55 ? hotColor : nodeColor;
    ctx.globalAlpha = Math.max(0.25, age);
    ctx.beginPath();
    ctx.arc(point.x, point.y, age > 0.82 ? 3.2 : 2.1, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;
}

function drawGridLines(ctx: CanvasRenderingContext2D, width: number, height: number, axis: 'x' | 'y') {
  const limit = axis === 'x' ? width : height;
  for (let position = 0; position < limit; position += 34) {
    ctx.beginPath();
    ctx.moveTo(axis === 'x' ? position : 0, axis === 'x' ? 0 : position);
    ctx.lineTo(axis === 'x' ? position : width, axis === 'x' ? height : position);
    ctx.stroke();
  }
}
